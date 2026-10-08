// The skinning page's control panel: the clip list, the speed slider, the pause button and the
// model's credit. It calls back into the page (main.js) and never into the engine; the status and
// the download bar are the shared page helpers.
// Model credit: Fox, Khronos glTF Sample Assets; the mesh is CC0 1.0, the rigging, animation and
// glTF conversion CC BY 4.0, credited on the page while the fox is on screen.
// Needs: the shared status helpers (../shared/page-status.js).
import { setStatus } from '../shared/page-status.js';

const kCcBy = ['CC BY 4.0', 'https://creativecommons.org/licenses/by/4.0/'];
const kCredit = [['Fox', 'https://github.com/KhronosGroup/glTF-Sample-Assets/tree/main/Models/Fox'],
    [': model © 2014 PixelMannen (CC0); rigging and animation © 2014 tomkranis, '], kCcBy,
    ['; glTF conversion © 2017 @AsoboStudio and @scurest, '], kCcBy, ['.']];

/** Writes [text, link?] pieces into `element`. @param {HTMLElement} element @param {string[][]} pieces */
function writePieces(element, pieces) {
    element.replaceChildren(...pieces.map(([text, href]) => {
        if (!href) return document.createTextNode(text);
        return Object.assign(document.createElement('a'), { href, textContent: text, target: '_blank' });
    }));
}

/**
 * Starts the panel once the engine and the model are in: the downloads are over.
 * @param {Document} page
 * @param {{ clips: string[], first: string, play: (clip: string, speed: number) => void, pause: () => void }} callbacks
 */
export function controlPanel(page, { clips, first, play, pause }) {
    const field = (/** @type {string} */ name) => /** @type {any} */ (page.querySelector(`.panel [name=${name}]`));
    const [list, slider, speedOutput, pauseButton] = ['clip', 'speed', 'rate', 'pause'].map(field);
    const canvasStatus = /** @type {HTMLElement} */ (page.querySelector('.canvas-status'));
    const summary = /** @type {HTMLElement} */ (page.querySelector('.panel .summary-progress'));
    /** @type {HTMLElement} */ (page.querySelector('progress.download')).hidden = true;
    let paused = false;
    const apply = () => {
        const speed = Number(slider.value);
        speedOutput.value = `${speed.toFixed(2)}×`;
        if (!paused) play(list.value, speed);
        pauseButton.textContent = paused ? 'Play' : 'Pause';
        const state = paused ? `${list.value}, paused` : `Playing ${list.value}`;
        setStatus(state);
        summary.textContent = `· ${paused ? state : list.value}`;   // what a closed panel (a phone) shows
    };

    for (const clip of clips) list.add(new Option(clip, clip, clip === first, clip === first));
    list.addEventListener('change', () => { paused = false; apply(); });
    slider.addEventListener('input', apply);
    pauseButton.addEventListener('click', () => {
        paused = !paused;
        if (paused) pause();
        apply();
    });
    writePieces(/** @type {HTMLElement} */ (page.querySelector('.panel .credit')), kCredit);
    apply();
    for (const control of [list, slider, pauseButton]) control.disabled = false;
    return { frame: () => { canvasStatus.hidden = true; } };   // the canvas draws from here on
}
