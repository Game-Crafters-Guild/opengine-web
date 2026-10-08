// The model viewer's control panel: the sample model list, opening or dropping a local file,
// the time of day, the turntable switch, a frame-rate readout toggled with F or its button, and
// the download progress of the engine and of each model.
// It calls back into the page (main.js) and never into the engine.
// Models: Khronos glTF Sample Assets (sources and credits in ../ASSET_PROVENANCE.md):
// https://github.com/KhronosGroup/glTF-Sample-Assets. The two helmets ship there as .gltf with
// separate files; the demo site hosts single-file .glb copies of them under models/.
// License: CC0 1.0, except the models credited in the list (CC BY 4.0; Damaged helmet also
// CC BY-NC 4.0). A model that needs a credit shows it, with links, while it is on screen.
// Needs: the shared status helpers (../shared/page-status.js).
import { downloadProgress, FrameMeter } from '../shared/page-status.js';

const kSampleBase = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models';
const sample = (/** @type {string} */ file) => `${kSampleBase}/${file.replace(/\.glb$/, '')}/glTF-Binary/${file}`;
const onSite = (/** @type {string} */ file) => new URL(`../../../models/${file}`, import.meta.url).href;
// A credit or a note is a list of [text, link?] pieces, shown while the model is on screen.
const kOpaqueGlass = [['Its glass draws opaque: the importer does not read glass (transmission) yet.']];
const kCcBy = ['CC BY 4.0', 'https://creativecommons.org/licenses/by/4.0/'];
const kKhronos = 'https://github.com/KhronosGroup/glTF-Sample-Assets/tree/main/Models';
const kFoxCredit = [['Fox', `${kKhronos}/Fox`], [': model © 2014 PixelMannen (CC0); rigging and animation © 2014 tomkranis, '],
    kCcBy, ['; glTF conversion © 2017 @AsoboStudio and @scurest, '], kCcBy, ['.']];
const kTruckCredit = [['Cesium Milk Truck', `${kKhronos}/CesiumMilkTruck`], [': © 2017 Cesium, '], kCcBy, ['.']];
const kCcByNc = ['CC BY-NC 4.0', 'https://creativecommons.org/licenses/by-nc/4.0/'];
const kDamagedHelmetCredit = [['Damaged Helmet', `${kKhronos}/DamagedHelmet`], [': © 2018 ctxwing, '], kCcBy,
    ['; © 2016 theblueturtle_, '], kCcByNc, [' (non-commercial).']];
const kChessCredit = [['A Beautiful Game', `${kKhronos}/ABeautifulGame`], [': © 2020 ASWF and © 2022 Ed Mackey, '],
    kCcBy, ['.']];
/** [name, url, megabytes of the download (shown in the list and while it loads), credit or note shown with the model] */
const kSamples = [
    ['Water bottle', sample('WaterBottle.glb'), 9],
    ['SciFi helmet', onSite('SciFiHelmet.glb'), 30],
    ['Flight helmet', onSite('FlightHelmet.glb'), 48, kOpaqueGlass],
    ['Damaged helmet', sample('DamagedHelmet.glb'), 4, kDamagedHelmetCredit],
    ['Chess set', sample('ABeautifulGame.glb'), 43, [...kChessCredit, [' '], ...kOpaqueGlass]],
    ['Lantern', sample('Lantern.glb'), 0, kOpaqueGlass],
    ['Antique camera', sample('AntiqueCamera.glb')],
    ['Boom box', sample('BoomBox.glb')],
    ['Corset', sample('Corset.glb')],
    ['Avocado', sample('Avocado.glb')],
    ['Barramundi fish', sample('BarramundiFish.glb')],
    ['Metal and roughness spheres', sample('MetalRoughSpheresNoTextures.glb')],
    ['Fox', sample('Fox.glb'), 0, kFoxCredit],
    ['Cesium milk truck', sample('CesiumMilkTruck.glb'), 0, kTruckCredit],
];
// The engine fetches one file per model, so a .gltf must embed its buffers and images; FBX has
// no importer on the web.
const kLocalRule = 'Open a .glb, or a .gltf with its buffers and images embedded. FBX is not supported on the web.';

const clock = (/** @type {number} */ hours) => `${Math.floor(hours)}:${String(Math.round((hours % 1) * 60) % 60).padStart(2, '0')}`;

/**
 * The files a .gltf names outside itself (its buffers' and images' URIs that are not data: URIs),
 * which a page cannot hand the engine with it.
 * @param {File} gltf
 */
async function externalFiles(gltf) {
    try {
        const { buffers = [], images = [] } = JSON.parse(await gltf.text());
        return [...buffers, ...images].map((entry) => entry.uri).filter((uri) => uri && !uri.startsWith('data:'));
    } catch {
        return [];   // not JSON: the engine's loader reports what is wrong with it
    }
}

/** Writes [text, link?] pieces into `element`. @param {HTMLElement} element @param {string[][]} pieces */
function writePieces(element, pieces) {
    element.replaceChildren(...pieces.map(([text, href]) => {
        if (!href) return document.createTextNode(text);
        const link = Object.assign(document.createElement('a'), { href, textContent: text, target: '_blank' });
        return link;
    }));
}

/**
 * @param {Document} page
 * @param {{ show: (url: string, onProgress: (progress: import('@openengine/web').LoadProgress) => void) => Promise<void>, timeOfDay: number, setTimeOfDay: (hours: number) => void,
 *     setTurning: (on: boolean) => void }} callbacks
 */
export function controlPanel(page, { show, timeOfDay, setTimeOfDay, setTurning }) {
    const field = (/** @type {string} */ name) => /** @type {any} */ (page.querySelector(`.panel [name=${name}]`));
    const [list, file, slider, timeOutput, fpsButton, status] =
        ['model', 'file', 'time', 'clock', 'fps', 'status'].map(field);
    const credit = /** @type {HTMLElement} */ (page.querySelector('.panel .credit'));
    const bar = /** @type {HTMLProgressElement} */ (page.querySelector('progress.download'));
    const summaryProgress = /** @type {HTMLElement} */ (page.querySelector('.panel .summary-progress'));
    const canvasStatus = /** @type {HTMLElement} */ (page.querySelector('.canvas-status'));
    const readout = /** @type {HTMLElement} */ (page.querySelector('.fps'));
    const meter = new FrameMeter(readout);

    /** The model on screen, named in the status once a refusal or an error is behind us. */
    let shown = '';
    const settle = () => { if (shown) status.value = `Showing ${shown}`; };
    const load = async (/** @type {string} */ url, /** @type {string} */ label, /** @type {string[][]} */ credited = [],
        megabytes = 0) => {
        status.value = megabytes ? `Loading ${label} (${megabytes} MB)...` : `Loading ${label}...`;
        try {
            await show(url, downloadProgress(label));
            shown = label;
            status.value = `Showing ${label}`;
            writePieces(credit, credited);
            return true;
        } catch (error) {
            status.value = `Could not load ${label}: ${error instanceof Error ? error.message : error}`;
            return false;
        } finally {
            bar.hidden = true;
            summaryProgress.textContent = '';
        }
    };
    // A local file reaches the engine as an object URL; its name after '#' picks the loader.
    const open = async (/** @type {File | undefined} */ chosen) => {
        if (!chosen || !/\.(glb|gltf)$/i.test(chosen.name)) {
            status.value = kLocalRule;
            return;
        }
        const missing = /\.gltf$/i.test(chosen.name) ? await externalFiles(chosen) : [];
        if (missing.length) {
            status.value = `${chosen.name} refers to files beside it (${missing.join(', ')}). ${kLocalRule}`;
            return;
        }
        // The list names the file while it is shown; picking a sample takes the entry away. A file
        // that does not load gives the list back to what is still on screen.
        const shownOption = list.selectedOptions[0];
        const shownFile = yourFile;
        shownFile?.remove();
        yourFile = new Option(`Your file: ${chosen.name}`, '', true, true);
        yourFile.disabled = true;
        list.add(yourFile);
        const url = URL.createObjectURL(chosen);
        const loaded = await load(`${url}#${chosen.name}`, chosen.name);
        URL.revokeObjectURL(url);   // the engine has read the file, or failed to
        if (loaded) return;
        yourFile.remove();
        yourFile = shownFile;
        if (shownFile) list.add(shownFile);
        shownOption.selected = true;
    };
    /** @type {HTMLOptionElement | null} */
    let yourFile = null;
    const setTime = (/** @type {number} */ hours) => {
        setTimeOfDay(hours);
        timeOutput.value = clock(hours);
    };
    const toggleFps = () => { readout.hidden = !readout.hidden; };

    for (const [name, url, megabytes] of kSamples) {
        const option = new Option(megabytes ? `${name} (${megabytes} MB)` : String(name), String(url));
        option.dataset.name = String(name);
        list.add(option);
    }
    const pick = () => {
        yourFile?.remove();
        yourFile = null;
        const [name, url, megabytes, credited] = kSamples[list.selectedIndex];
        return load(String(url), String(name), /** @type {string[][]} */ (credited ?? []), Number(megabytes ?? 0));
    };
    list.addEventListener('change', pick);
    file.addEventListener('change', () => {
        const chosen = file.files[0];
        file.value = '';   // so that choosing the same file again opens it again
        open(chosen);
    });
    page.addEventListener('dragover', (event) => { event.preventDefault(); page.body.classList.add('dragging'); });
    page.addEventListener('dragleave', () => page.body.classList.remove('dragging'));
    page.addEventListener('drop', (event) => {
        event.preventDefault();
        page.body.classList.remove('dragging');
        open(event.dataTransfer?.files[0]);
    });
    slider.value = String(timeOfDay);
    slider.addEventListener('input', () => { setTime(Number(slider.value)); settle(); });
    fpsButton.addEventListener('click', toggleFps);
    const turntable = field('turn');
    turntable.addEventListener('change', () => { setTurning(turntable.checked); settle(); });
    page.addEventListener('keydown', (event) => {
        if (event.code === 'KeyF' && !['INPUT', 'SELECT'].includes(/** @type {Element} */ (event.target).tagName)) toggleFps();
    });
    setTime(timeOfDay);
    for (const control of [list, file, slider, turntable, fpsButton]) control.disabled = false;
    pick();   // the first model; the page runs the engine meanwhile

    return {
        frame: (/** @type {number} */ dt) => {
            canvasStatus.hidden = true;   // the canvas draws from here on
            meter.add(dt);
        },
    };
}
