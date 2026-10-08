# @openengine/web

The engine on a web page: a WebGPU renderer (clustered lighting, cascaded shadows, a physical sky) and an entity-component world behind a small TypeScript API.

**Early access (alpha).** The engine and this API change between releases. Prereleases are published as `2026.10.0-alpha.1` and later under the `alpha` npm dist-tag (`npm install @openengine/web@alpha`); nothing is published as `latest` yet.

The engine module and the engine pack carry third-party code and content; `THIRD_PARTY_NOTICES.md` beside this file holds their licenses.

Status: the engine module is built from source: the `WebLibrary` target writes `opengine-core.st.js` and `.wasm` in a `wasm-release-singlethread` build and `opengine-core.mt.js` and `.wasm` in a `wasm-release` build, beside `opengine-core-binding.js`, and `Tools/Web/engine_pack.py` builds the `opengine-core.gepak` the module fetches from the same folder. The package that ships the module with this library is not published yet.

## A model with an orbit camera

```js
import { Engine, OrbitControls, Light } from '@openengine/web';

const canvas = document.querySelector('canvas');
if (!canvas) throw new Error('The page needs a <canvas> element.');
const engine = await Engine.create({ canvas });
const scene = engine.scene;                                  // the engine's world
const robot = await scene.load('models/robot.glb');          // the model's root entity
robot.transform.position.set(0, 0, 0);                       // meters
const controls = new OrbitControls(scene.camera, canvas);    // drag to orbit, wheel to zoom, right-drag to pan
controls.target.copy(robot.bounds.center);
scene.sun.intensity = 100_000;                               // lux: a clear noon
scene.sky.timeOfDay = 9.5;                                   // hours: the sun follows
const lamp = scene.create('lamp');                           // an empty entity
lamp.set(Light, { type: 'Point', intensity: 800 });          // add a component, or update it
engine.onFrame(dt => robot.transform.rotateWorldY(20 * dt)); // 20 degrees per second
engine.run();
```

## The ten calls

| Call | What it does |
|---|---|
| `Engine.create({ canvas, threads })` | Loads the engine, starts WebGPU on the canvas, and makes a world with a camera, a sun and a sky. |
| `engine.run()` | Starts the frame loop (`engine.pause()` stops it). |
| `scene.load(url)` | Fetches a glTF or GLB model and places it; resolves to its root entity. Each call places another copy; a URL is fetched once and later calls reuse it. |
| `scene.create(name)` | Makes an empty entity. |
| `entity.transform` | `position` (meters), `rotation` (degrees), `quaternion`, `scale`, `parent`, `rotateX/Y/Z(degrees)` about the entity's own axes, `rotateWorldY(degrees)` about the world's up axis through the entity's position (exact under parents of uniform scale, mirrored or not; nothing under a parent scaled to zero or flattened). A positive turn takes +Y toward +Z about X, +Z toward +X about Y (clockwise seen from above) and +X toward +Y about Z. |
| `scene.camera` + `OrbitControls` | The camera entity, and mouse orbit, zoom and pan around `controls.target`. |
| `scene.sun` + `scene.sky` | The sun's `intensity` (lux) and `color`; the sky's `timeOfDay` (hours), `latitude`, `dayOfYear`, `northHeading` (degrees). |
| `engine.onFrame(dt => ...)` | Runs a function every frame before the engine's systems, with the time step in seconds. |
| `entity.get / set` | Reads or writes one component on an entity, as a live view. |
| `await engine.dispose()` | Stops the engine and frees the GPU device and memory; resolves when the engine is gone. |

## Adding a component to an entity

Every entity is a set of components, and `entity.set(Component, values)` is the one call that adds one: `lamp.set(Light, { type: 'Point', intensity: 800 })` gives the entity a `Light` when it has none and otherwise updates the named fields, leaving the rest as they are. `entity.add(Light)` adds a component with the engine's defaults (and throws if the entity already has one), `entity.remove(Light)` takes it off, and `entity.has(Light)` asks. `entity.get(Light)` returns a live view, or `undefined` when the entity has no `Light`: reading `view.intensity` reads the engine, and assigning it writes the engine, so a value the engine changes (physics, animation, the sky driving the sun) is what the page sees next. The types name the components and their fields, so an editor completes them and a typo is a compile error: `Light`, `Camera`, `MeshRenderer`, `SkyEnvironment`, `LocalBounds` and `Transform` are exported beside `Engine` today, with their fields in camelCase and their units in the documentation of each field; the generated types that replace this first set name every component. A field that refers to another entity takes and returns an `Entity`, or null for none (`sky.set(SkyEnvironment, { sunLight: sun })`), and an asset field an `AssetRef` (`{ guid }`). `Transform` is on every entity, so `add` and `remove` do not take it.

Two views are written by hand rather than generated from a component: `entity.transform` (position, rotation and scale over the Transform matrix, and the hierarchy: `parent` and `children`) and `entity.bounds` (the LocalBounds box, which has no reflected field type, read for the page by the engine module). `entity.transform.children` lists the entities parented to it: a loaded model's root has its meshes below it, each with a `MeshRenderer` a page can read or copy onto entities of its own.

## Playing a model's animation

A skinned model with animation clips plays them through `entity.animation` on the entity `scene.load` returned: `fox.animation.clips` lists the clip names in the model's order, `fox.animation.play('Run', { speed: 1.5 })` plays one, looping, at a multiple of its authored rate (default 1), and `fox.animation.pause()` holds the pose. Calling `play` for the clip that is already playing keeps its place, so it changes the speed or resumes after a pause; another clip starts from its beginning. A clip name the model does not have throws, naming the ones it has. A change takes effect on the next frame. The model rests in its bind pose until the page plays a clip.

```js
import { Engine } from '@openengine/web';

const canvas = document.querySelector('canvas');
if (!canvas) throw new Error('The page needs a <canvas> element.');
const engine = await Engine.create({ canvas });
const fox = await engine.scene.load('models/Fox.glb');      // a skinned model with clips
fox.animation.play(fox.animation.clips[0], { speed: 1.5 }); // its first clip, half again as fast
engine.run();
```

## Units and axes

Meters; degrees in `transform`, `OrbitControls`, `scene.sun` and `scene.sky`; the component views keep the engine's own units, which are radians for angles unless a field says degrees; lux for the sun; hours for `timeOfDay`; seconds for `dt`. The axes are left-handed: +X right, +Y up, +Z forward, and cameras and lights look along their entity's +Z.

## One thread or many

The engine comes in two builds. The single-threaded build works on any host. The threaded build runs the engine's job system on a pool of Web Workers, which needs `SharedArrayBuffer`, which the browser grants only to a cross-origin isolated page: one served with the `Cross-Origin-Opener-Policy: same-origin` and `Cross-Origin-Embedder-Policy: require-corp` headers. `Engine.create({ canvas, threads: 'auto' })`, the default, takes the threaded build when the page is isolated and the single-threaded one otherwise, and logs which it picked and why.

On a host that cannot set headers, such as GitHub Pages, a small service worker adds them. Its scope is the folder it is served from, and it must cover the page and the engine module both, because the threaded build starts its workers from `opengine-core.mt.js`: a worker script outside the scope is not isolated and the threaded build never starts. The package ships `coi-serviceworker.js` beside the engine module, in the package's root folder, so serve your pages from that folder or below it and load the worker from there first, configured for `require-corp`. The examples, in `examples/<name>/`, load it as `../../coi-serviceworker.js`:

```html
<script>window.coi = { coepCredentialless: () => false };</script>
<script src="../../coi-serviceworker.js"></script>
```

The first visit registers the worker and reloads the page once; every later visit is isolated from the start.

A model or texture from another origin loads only when its host answers with CORS headers (`Access-Control-Allow-Origin`), under either build: `scene.load` reads the file's bytes, and a browser hands a page another origin's bytes only with CORS (`Cross-Origin-Resource-Policy` alone does not do it). Serve assets from the page's own origin, or from a host that sends those headers.

## While a model loads

The engine keeps running while a model loads: frames, `onFrame` callbacks, the orbit camera and every other call work as usual, and the promise `scene.load` returns resolves on the first frame after the engine has the model. Loads run one at a time, in the order they were asked for; a load started from an `onFrame` callback begins after that frame. A load also completes before `engine.run()`, so a page can await its model first and start the frame loop after.

## Download progress

The engine is a download of some 20 MB, and a model can be more; on a slow connection that is minutes. `Engine.create({ canvas, onProgress })` and `scene.load(url, { onProgress })` report the downloads as `{ phase, loaded, total }`, so a page can draw a bar and say how far it is. The bytes are network bytes when the server sends `Content-Length` (a file it compresses counts its compressed size), and otherwise the file's decompressed bytes; `loaded / total` is the fraction done either way, so show a percentage rather than megabytes. `total` is 0 while a size is unknown: a model the server compresses has none until it has arrived (draw the bar without a value then).

```js
import { Engine } from '@openengine/web';

const canvas = document.querySelector('canvas');
const status = document.querySelector('output');
if (!canvas || !status) throw new Error('The page needs a <canvas> and an <output>.');
const phases = new Map();
const engine = await Engine.create({ canvas, onProgress: ({ phase, loaded, total }) => {
    phases.set(phase, { loaded, total });
    const sum = [...phases.values()].reduce((a, b) => ({ loaded: a.loaded + b.loaded, total: a.total + b.total }));
    status.value = `Loading the engine ${Math.floor((100 * sum.loaded) / sum.total)}%`;
} });
const model = await engine.scene.load('models/robot.glb', { onProgress: ({ loaded, total }) => { /* the 'model' phase */ } });
```

`Engine.create` reports two phases, the engine module (`'wasm'`) and the engine pack (`'pack'`, when the folder serves it as parts), which download side by side: both report their totals, with `loaded` 0, before either reports bytes, so their sum is the whole download from the first report. `loaded` never decreases and each phase ends with `loaded` equal to `total`. With `onProgress`, `scene.load` fetches the model itself and hands the engine the bytes; a URL the engine already has reports nothing. A pack served whole (one `opengine-core.gepak`) is fetched by the engine module inside `Engine.create` and reports no progress.

## Examples

`examples/model-viewer` is one page: pick a sample model or open your own `.glb` (or a `.gltf` with its buffers and images embedded; FBX is not supported on the web), orbit it, set the time of day, and show the frame rate with F. Its engine calls are `main.js`; the control panel is `panel.js` and `panel.css` beside it. The two helmets in its list are hosted by the demo site (`models/` beside the package); a copy of the package served elsewhere lists them but cannot load them. `coi-serviceworker.js` sits in the package root, beside the engine module; the models are loaded by URL from their sources, listed with their licenses in `examples/ASSET_PROVENANCE.md`.

`examples/instancing` draws one model up to 10,000 times: each copy is an entity with its own `Transform` and the loaded model's `MeshRenderer` fields, placed on a spiral, and every copy turns about world up in `onFrame`. A slider sets the count and F shows the frame rate. Turning is one call per copy per frame until the batched update: at 10,000 copies that is tens of milliseconds a frame, while the copies at rest draw in a few. The web renderer draws these copies in many small instanced batches rather than once per mesh, which caps the page at 10,000 for now. `examples/skinning` plays the Fox sample's clips with `entity.animation`: a list of the model's clips, a speed slider and a pause button. The pages share their status line, download bar and frame-rate readout through `examples/shared/page-status.js`.

## Known issues (alpha)

- A local file the engine cannot load, such as a damaged file or a glTF that needs an extension the importer lacks (Draco mesh compression, KTX2 textures), stops the engine: the page stays on "Loading..." and needs a reload. The fix ships in a later release.
- The model viewer's time of day runs from 6:00 to 18:00: the web renderer draws the hours outside that black for now. The night hours return with the engine's night lighting on the web.

## Browsers

WebGPU is required: current Chrome and Edge; Safari and Firefox where they ship WebGPU. `Engine.create` rejects with a message naming the browsers when `navigator.gpu` is missing.

## Compared with three.js

The names follow three.js where the idea is the same (`scene`, `camera`, `load`, `OrbitControls`, `Vector3`); underneath, every object is an entity in the engine's world and every property is a component field, so the same world is open to queries and systems as the API grows.
