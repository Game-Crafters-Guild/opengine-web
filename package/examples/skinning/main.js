// Skinning: an animated fox. Its skeleton plays one of the model's clips, picked in the panel,
// at the speed the slider sets; the panel lists the clips the model carries.
// Model: Fox, Khronos glTF Sample Assets (the page shows its credit; ../ASSET_PROVENANCE.md).
// License: CC0 1.0 (the fox's mesh); CC BY 4.0 (its rigging and animation, and the glTF
// conversion); MIT (coi-serviceworker.js).
// Needs: WebGPU; @openengine/web; coi-serviceworker.js beside the engine module for the threaded build.
import { Camera, Engine, OrbitControls } from '@openengine/web';
import { downloadProgress, freeArea, setStatus } from '../shared/page-status.js';
import { controlPanel } from './panel.js';

const kModel = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/Fox/glTF-Binary/Fox.glb';
const kFirstClip = 'Run';

const canvas = document.querySelector('canvas');
if (!canvas) throw new Error('The page needs a <canvas>.');
const onProgress = downloadProgress('the engine', 'Starting the engine...');
const engine = await Engine.create({ canvas, threads: 'auto', onProgress }).catch((error) => {
    setStatus(error.message);   // the facade's own text names what to do (no WebGPU, ...)
    throw error;
});
const { scene } = engine;
const fox = await scene.load(kModel, { onProgress: downloadProgress('the fox') });

// The orbit starts low, three-quarters to the fox's side (its length runs along the bounds' longer
// horizontal axis), at the model viewer's fit: the bounding sphere fills the free area's shorter side.
const { center, size } = fox.bounds;
const radius = 0.5 * Math.hypot(size.x, size.y, size.z), [dx, dz] = size.x > size.z ? [0.57, 0.82] : [0.82, 0.57];
scene.camera.transform.position.set(center.x + dx * radius, center.y + 0.15 * radius, center.z + dz * radius);
const controls = new OrbitControls(scene.camera, canvas);
controls.target.copy(center);
const halfFov = ((scene.camera.get(Camera)?.fovY ?? 60) * Math.PI) / 360, { width, height } = freeArea(canvas);
controls.distance = 1.15 * radius / Math.sin(Math.atan((Math.tan(halfFov) * Math.min(width, height)) / canvas.clientHeight));
controls.minDistance = radius / 2;
globalThis.demo = { engine, controls, fox };   // for the browser console and the gate
scene.camera.set(Camera, { nearZ: radius / 100 });
scene.sky.timeOfDay = 15;

const { clips } = fox.animation;
const panel = controlPanel(document, {
    clips,
    first: clips.includes(kFirstClip) ? kFirstClip : clips[0],
    play: (clip, speed) => fox.animation.play(clip, { speed }),
    pause: () => fox.animation.pause(),
});
engine.onFrame(panel.frame);
engine.run();
