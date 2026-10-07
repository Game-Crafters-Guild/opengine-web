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
engine.onFrame(dt => robot.transform.rotateY(20 * dt));      // 20 degrees per second
engine.run();
```

## The ten calls

| Call | What it does |
|---|---|
| `Engine.create({ canvas, threads })` | Loads the engine, starts WebGPU on the canvas, and makes a world with a camera, a sun and a sky. |
| `engine.run()` | Starts the frame loop (`engine.pause()` stops it). |
| `scene.load(url)` | Fetches a glTF or GLB model and places it; resolves to its root entity. Each call places another copy; a URL is fetched once and later calls reuse it. |
| `scene.create(name)` | Makes an empty entity. |
| `entity.transform` | `position` (meters), `rotation` (degrees), `quaternion`, `scale`, `parent`, `rotateX/Y/Z(degrees)`. |
| `scene.camera` + `OrbitControls` | The camera entity, and mouse orbit, zoom and pan around `controls.target`. |
| `scene.sun` + `scene.sky` | The sun's `intensity` (lux) and `color`; the sky's `timeOfDay` (hours), `latitude`, `dayOfYear`, `northHeading` (degrees). |
| `engine.onFrame(dt => ...)` | Runs a function every frame before the engine's systems, with the time step in seconds. |
| `entity.get / set` | Reads or writes one component on an entity, as a live view. |
| `await engine.dispose()` | Stops the engine and frees the GPU device and memory; resolves when the engine is gone. |

## Adding a component to an entity

Every entity is a set of components, and `entity.set(Component, values)` is the one call that adds one: `lamp.set(Light, { type: 'Point', intensity: 800 })` gives the entity a `Light` when it has none and otherwise updates the named fields, leaving the rest as they are. `entity.add(Light)` adds a component with the engine's defaults (and throws if the entity already has one), `entity.remove(Light)` takes it off, and `entity.has(Light)` asks. `entity.get(Light)` returns a live view, or `undefined` when the entity has no `Light`: reading `view.intensity` reads the engine, and assigning it writes the engine, so a value the engine changes (physics, animation, the sky driving the sun) is what the page sees next. The types name the components and their fields, so an editor completes them and a typo is a compile error: `Light`, `Camera`, `MeshRenderer`, `SkyEnvironment`, `LocalBounds` and `Transform` are exported beside `Engine` today, with their fields in camelCase and their units in the documentation of each field; the generated types that replace this first set name every component. A field that refers to another entity takes and returns an `Entity`, or null for none (`sky.set(SkyEnvironment, { sunLight: sun })`), and an asset field an `AssetRef` (`{ guid }`). `Transform` is on every entity, so `add` and `remove` do not take it.

Two views are written by hand rather than generated from a component: `entity.transform` (position, rotation and scale over the Transform matrix) and `entity.bounds` (the LocalBounds box, which has no reflected field type, read for the page by the engine module).

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

## Examples

`examples/model-viewer` is one page: pick a sample model or open your own `.glb` (or a `.gltf` with its buffers and images embedded; FBX is not supported on the web), orbit it, set the time of day, and show the frame rate with F. Its engine calls are `main.js`; the control panel is `panel.js` and `panel.css` beside it. The two helmets in its list are hosted by the demo site (`models/` beside the package); a copy of the package served elsewhere lists them but cannot load them. `coi-serviceworker.js` sits in the package root, beside the engine module; the models are loaded by URL from their sources, listed with their licenses in `examples/ASSET_PROVENANCE.md`.

## Known issues (alpha)

- The Damaged Helmet sample is held out of the model viewer's list: the turntable turns a model about its own up axis, and that model's root is rotated 90° about X, so it rolls. It returns when models with a rotated root turn about world up.
- The A Beautiful Game chess set is held out of the list: only 15 of its 49 nodes draw, because nodes that share one mesh draw once. It returns in a later release, when every piece draws.
- A local file the engine cannot load, such as a damaged file or a glTF that needs an extension the importer lacks (Draco mesh compression, KTX2 textures), stops the engine: the page stays on "Loading..." and needs a reload. The fix ships in a later release.
- The model viewer's time of day runs from 6:00 to 18:00: the web renderer draws the hours outside that black for now. The night hours return with the engine's night lighting on the web.

## Browsers

WebGPU is required: current Chrome and Edge; Safari and Firefox where they ship WebGPU. `Engine.create` rejects with a message naming the browsers when `navigator.gpu` is missing.

## Compared with three.js

The names follow three.js where the idea is the same (`scene`, `camera`, `load`, `OrbitControls`, `Vector3`); underneath, every object is an entity in the engine's world and every property is a component field, so the same world is open to queries and systems as the API grows.
