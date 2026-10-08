// A model viewer: pick a sample model or open your own .glb, orbit it (drag to orbit,
// right-drag to pan, wheel to zoom), and set the time of day. The panel is panel.js.
// Models: Khronos glTF Sample Assets, listed in panel.js and ../ASSET_PROVENANCE.md.
// License: CC0 1.0, CC BY 4.0 and CC BY-NC 4.0 (the listed models, credited on screen); MIT (coi-serviceworker.js).
// Needs: WebGPU; @openengine/web; coi-serviceworker.js beside the engine module for the threaded build.
import { Camera, Engine, OrbitControls } from '@openengine/web';
import { controlPanel, downloadProgress, freeArea, setStatus } from './panel.js';

const found = document.querySelector('canvas');
if (!found) throw new Error('The page needs a <canvas>.');
const canvas = found;
const engine = await Engine.create({ canvas, threads: 'auto', onProgress: downloadProgress('the engine', 'Starting the engine...') }).catch((error) => {
    setStatus(error.message);   // the facade's own text names what to do (no WebGPU, ...)
    throw error;
});
const { scene } = engine;
const controls = new OrbitControls(scene.camera, canvas);
/** @type {import('@openengine/web').Model | null} */
let model = null;
let turning = true;
globalThis.viewer = { engine, controls, model: () => model };   // for the browser console

/**
 * Shows the model at `url` in place of the current one, sized to the area the panel leaves free.
 * @param {string} url @param {(progress: import('@openengine/web').LoadProgress) => void} onProgress
 */
async function show(url, onProgress) {
    const next = await scene.load(url, { onProgress });
    model?.destroy();
    model = next;
    const { center, size } = model.bounds;
    const radius = 0.5 * Math.hypot(size.x, size.y, size.z);
    const halfFov = ((scene.camera.get(Camera)?.fovY ?? 60) * Math.PI) / 360;
    const { width, height } = freeArea(canvas);
    // The orbit turns about the model's centre, at a distance where the bounding sphere fits the
    // shorter side of the free area with a margin; the near plane follows the model.
    const sine = Math.sin(Math.atan((Math.tan(halfFov) * Math.min(width, height)) / canvas.clientHeight));
    controls.distance = 1.15 * radius / sine;
    controls.minDistance = radius / 3;
    scene.camera.set(Camera, { nearZ: radius / 100 });
    controls.target.copy(center);
}

const panel = controlPanel(document, {
    show,
    timeOfDay: 15,
    setTimeOfDay: (hours) => { scene.sky.timeOfDay = hours; },
    setTurning: (on) => { turning = on; },
});
engine.onFrame((dt) => {
    if (turning) model?.transform.rotateWorldY(10 * dt);
    panel.frame(dt);
});
engine.run();   // the sky draws while the first model downloads
