// Instancing: one model drawn up to 10,000 times, each copy an entity with the model's MeshRenderer on a
// sunflower spiral, turned about world up each frame (one call per copy: tens of ms a frame at 10,000).
// Model: Avocado, Khronos glTF Sample Assets (../ASSET_PROVENANCE.md).
// License: CC0 1.0 (the model); MIT (coi-serviceworker.js).
// Needs: WebGPU; @openengine/web; coi-serviceworker.js beside the engine module for the threaded build.
import { Camera, Engine, MeshRenderer, OrbitControls } from '@openengine/web';
import { downloadProgress, freeArea, setStatus } from '../shared/page-status.js';
import { controlPanel } from './panel.js';

const kModel = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/Avocado/glTF-Binary/Avocado.glb';
const kScale = 15;                                   // the avocado is 6 cm long: 90 cm here
const kStep = 0.6;                                   // meters: neighbors on the spiral sit about 1 m apart
const kGoldenAngle = Math.PI * (3 - Math.sqrt(5));   // radians between consecutive copies
const kTurnDegreesPerSecond = 45;
const kFramedCopies = 2500;   // past this many the view holds and the spiral runs off the frame's edges
const canvas = /** @type {HTMLCanvasElement} */ (document.querySelector('canvas'));
const onProgress = downloadProgress('the engine', 'Starting the engine...');
const engine = await Engine.create({ canvas, threads: 'auto', onProgress }).catch((error) => {
    setStatus(error.message);   // the facade's own text names what to do (no WebGPU, ...)
    throw error;
});
const { scene } = engine;
const avocado = await scene.load(kModel, { onProgress: downloadProgress('the avocado') });
// The model's mesh is a child of its root (at the origin); the copies draw it with its material.
const part = avocado.transform.children.find((child) => child.has(MeshRenderer)), mesh = part?.get(MeshRenderer);
if (!part || !mesh) throw new Error('The model has no mesh under its root; this page copies a single mesh.');
const { meshId, meshGpuHandleId, materialAssetGuid, modelAssetGuid } = mesh;
const instances = [part];   // the model's mesh and its copies, in spiral order
let turning = true;
/** Places copy `index` on the spiral, turned by its golden angle. @param {import('@openengine/web').Entity} entity @param {number} index */
function place(entity, index) {
    const radius = kStep * Math.sqrt(index), angle = index * kGoldenAngle;
    entity.transform.position.set(radius * Math.sin(angle), 0, radius * Math.cos(angle));
    entity.transform.scale.set(kScale, kScale, kScale);
    entity.transform.rotation.set(0, (angle * 180) / Math.PI, 0);
}
scene.camera.transform.position.set(0, 1.5, -4);   // the orbit starts 20 degrees above the spiral
const controls = new OrbitControls(scene.camera, canvas);
globalThis.demo = { engine, controls, instances };   // for the browser console and the gate
/** Adds or destroys copies until there are `count`; the model viewer's fit puts the spiral's sphere in the free area. @param {number} count */
function setCount(count) {
    while (instances.length > count) instances.pop()?.destroy();
    while (instances.length < count) {
        const copy = scene.create();
        copy.set(MeshRenderer, { meshId, meshGpuHandleId, materialAssetGuid, modelAssetGuid });
        place(copy, instances.length);
        instances.push(copy);
    }
    const radius = kStep * Math.sqrt(Math.min(count, kFramedCopies)) + 0.5, { width, height } = freeArea(canvas);
    const halfFov = ((scene.camera.get(Camera)?.fovY ?? 60) * Math.PI) / 360;
    controls.distance = 1.15 * radius / Math.sin(Math.atan((Math.tan(halfFov) * Math.min(width, height)) / canvas.clientHeight));
}
place(part, 0);
const panel = controlPanel(document, { setCount, setTurning: (on) => { turning = on; } });
engine.onFrame((dt) => {
    if (turning) for (const instance of instances) instance.transform.rotateWorldY(kTurnDegreesPerSecond * dt);
    panel.frame(dt);
});
engine.run();
