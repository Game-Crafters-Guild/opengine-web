// What every example page shows around its canvas: the status (in the panel, over the canvas
// until the first frame, and beside a closed panel's title), the download bar along the top edge,
// the frame-rate readout, and the canvas area the panel leaves free. The pages import it; it
// calls into the page's document and never into the engine.
// Needs: the page's `.panel output[name=status]`, `.canvas-status`, `.panel .summary-progress`
// and `progress.download` elements.

const kFpsWindowSeconds = 1;

/** The frames of the last second: their rate and the longest one. */
export class FrameMeter {
    /** @param {HTMLElement} readout */
    constructor(readout) {
        this.readout = readout;
        /** @type {number[]} */
        this.frames = [];
        this.sinceUpdate = 0;
    }
    /** @param {number} dt the frame's time step, in seconds */
    add(dt) {
        this.frames.push(dt);
        let span = this.frames.reduce((sum, frame) => sum + frame, 0);
        while (span - this.frames[0] >= kFpsWindowSeconds) span -= this.frames.shift() ?? 0;
        this.sinceUpdate += dt;
        if (this.readout.hidden || this.sinceUpdate < 0.25) return;
        this.sinceUpdate = 0;
        const worst = Math.max(...this.frames) * 1000;
        this.readout.textContent = `${(this.frames.length / span).toFixed(0)} fps · worst ${worst.toFixed(1)} ms`;
    }
}

/**
 * Shows `text` as the status: in the panel, over the canvas until its first frame draws, and,
 * while a download runs (`downloading`), beside the panel's title, where a closed panel shows it.
 * @param {string} text @param {boolean} [downloading]
 */
export function setStatus(text, downloading = false) {
    /** @type {HTMLOutputElement} */ (document.querySelector('.panel output[name=status]')).value = text;
    /** @type {HTMLElement} */ (document.querySelector('.canvas-status')).textContent = text;
    /** @type {HTMLElement} */ (document.querySelector('.panel .summary-progress')).textContent = downloading ? `· ${text}` : '';
}

/**
 * An onProgress for a download (the engine's, or a model's) that shows "Loading <label> 37%"
 * as the status and fills the bar along the page's top edge from empty; the engine's phases add
 * up. A percentage, not megabytes: the bytes are the network's only when the host sends their
 * length. The bar runs without a value while a size is unknown, and once every byte is in when
 * the status then says `whenDownloaded` (work that follows the download, of unknown length).
 * @param {string} label @param {string} [whenDownloaded]
 */
export function downloadProgress(label, whenDownloaded) {
    const bar = /** @type {HTMLProgressElement} */ (document.querySelector('progress.download'));
    bar.value = 0;
    /** @type {Map<string, { loaded: number, total: number }>} */
    const phases = new Map();
    return (/** @type {import('@openengine/web').LoadProgress} */ { phase, loaded, total }) => {
        phases.set(phase, { loaded, total });
        const all = [...phases.values()];
        bar.hidden = false;
        if (all.some((one) => !one.total)) {
            bar.removeAttribute('value');
            setStatus(`Loading ${label}...`, true);
            return;
        }
        const sum = all.reduce((sum, one) => ({ loaded: sum.loaded + one.loaded, total: sum.total + one.total }));
        if (sum.loaded === sum.total && whenDownloaded) {
            bar.removeAttribute('value');
            setStatus(whenDownloaded, true);
            return;
        }
        const percent = `${Math.floor((100 * sum.loaded) / sum.total)}%`;
        bar.max = sum.total;
        bar.value = sum.loaded;
        setStatus(`Loading ${label} ${percent}`, true);
    };
}

/**
 * The size, in CSS pixels, of the canvas area the open panel leaves free: the panel is a column
 * on the right, or a strip along the bottom on a narrow page.
 * @param {HTMLCanvasElement} canvas
 */
export function freeArea(canvas) {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const panel = /** @type {HTMLDetailsElement | null} */ (document.querySelector('.panel'));
    if (!panel?.open) return { width, height };
    const card = panel.getBoundingClientRect();
    return card.left > width / 2 ? { width: card.left, height } : { width, height: card.top };
}
