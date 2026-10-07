// The binding the facade imports to obtain the engine module's ABI (ts/src/abi.ts,
// CoreBindingModule): it instantiates opengine-core.<build>.js from `coreUrl` on the page's
// canvas and adapts the module's exports to the Abi interface. Served beside the glue files.

// A wasm export's 32-bit result reaches JavaScript signed. These return unsigned values
// (entity ids, asset handles, pointers), so their results are read back as unsigned:
// kInvalidEntity is 0xffffffff, not -1.
const kUnsignedExports = [
    'ge_load_asset', 'ge_instantiate_model', 'ge_entity_create', 'ge_reflection_json', 'ge_last_error',
];
const kSignedExports = [
    'ge_tick', 'ge_update_assets', 'ge_resize', 'ge_asset_status',
    'ge_entity_bounds', 'ge_entity_destroy', 'ge_entity_parent',
    'ge_component_add', 'ge_component_remove', 'ge_component_has',
    'ge_field_get', 'ge_field_set',
];

/** Adapts an instantiated engine module to the Abi interface. */
export function adaptModule(module) {
    const abi = {
        // A heap growth replaces the buffer: read the view at every access.
        get HEAPU8() { return module.HEAPU8; },
        _malloc: (size) => module._malloc(size) >>> 0,
        _free: module._free,
        // The exports that suspend: ccall drives ASYNCIFY's unwind and rewind and resolves with
        // the call's return value once the call has really returned.
        ge_create: (canvasSelector, flags) =>
            module.ccall('ge_create', 'number', ['number', 'number'], [canvasSelector, flags], { async: true }),
        ge_shutdown: () => module.ccall('ge_shutdown', 'number', [], [], { async: true }),
    };
    for (const name of kSignedExports) abi[name] = module[`_${name}`];
    for (const name of kUnsignedExports) {
        const exported = module[`_${name}`];
        abi[name] = (...args) => exported(...args) >>> 0;
    }
    return abi;
}

/**
 * FNV-1a 64 of `bytes` continued from `hash` (four 16-bit limbs, lowest first), as
 * Tools/Web/gepak.py computes it: 16-bit limbs keep every product inside a double's integer range.
 */
function fnv1a64(bytes, hash) {
    let [h0, h1, h2, h3] = hash;
    for (let i = 0; i < bytes.length; ++i) {
        h0 ^= bytes[i];
        // h * 0x100000001b3 = h * 0x1b3 + (h << 40), modulo 2^64.
        const t0 = h0 * 0x1b3;
        const t1 = h1 * 0x1b3 + (t0 >>> 16);
        const t2 = h2 * 0x1b3 + (t1 >>> 16) + ((h0 << 8) & 0xffff);
        const t3 = h3 * 0x1b3 + (t2 >>> 16) + (h0 >>> 8) + ((h1 << 8) & 0xffff);
        h0 = t0 & 0xffff;
        h1 = t1 & 0xffff;
        h2 = t2 & 0xffff;
        h3 = t3 & 0xffff;
    }
    return [h0, h1, h2, h3];
}

const kFnvOffsetBasis = [0x2325, 0x8422, 0x9ce4, 0xcbf2];   // 14695981039346656037

function fnvHex(hash) {
    return '0x' + [...hash].reverse().map((limb) => limb.toString(16).padStart(4, '0')).join('');
}

/**
 * The engine pack, when the folder serves it as parts (a host that refuses large files): the
 * index beside the glue, opengine-core.gepak.parts.json, lists them in order with each part's
 * size, and the whole pack's size and FNV-1a 64. Fetches the parts, checks every one against the
 * index, and joins them into one Blob whose object URL stands in for opengine-core.gepak; null
 * when the folder serves the pack whole.
 */
export async function joinEnginePack(base) {
    const index = await fetch(new URL('opengine-core.gepak.parts.json', base));
    if (!index.ok)
        return null;
    const { parts, bytes, fnv1a64: expected } = await index.json();
    const contents = await Promise.all(parts.map(async ({ file, bytes: size }) => {
        const response = await fetch(new URL(file, base));
        if (!response.ok)
            throw new Error(`Could not fetch ${file} of the engine pack from ${base}: HTTP ${response.status}.`);
        const content = new Uint8Array(await response.arrayBuffer());
        if (content.length !== size)
            throw new Error(`${file} of the engine pack is ${content.length} bytes; the index says ${size}. Serve the parts the index was written with.`);
        return content;
    }));
    const total = contents.reduce((sum, content) => sum + content.length, 0);
    let hash = kFnvOffsetBasis;
    for (const content of contents)
        hash = fnv1a64(content, hash);
    if (total !== bytes || fnvHex(hash) !== expected)
        throw new Error(`The engine pack's parts join into ${total} bytes with FNV-1a ${fnvHex(hash)}; the index says ${bytes} bytes and ${expected}. A part is stale or damaged.`);
    return URL.createObjectURL(new Blob(contents));
}

/** Loads the `build` ('st' or 'mt') engine module from `coreUrl` on `canvas`. */
export async function loadCore({ build, coreUrl, canvas }) {
    const base = new URL(coreUrl, globalThis.location?.href);
    const packUrl = await joinEnginePack(base);
    const glue = new URL(`opengine-core.${build}.js`, base).href;
    const { default: createOpenEngine } = await import(glue);
    const module = await createOpenEngine({
        canvas,
        // The wasm binary, the engine pack and the threaded build's worker script all sit beside
        // the glue, wherever the page itself is served from; a pack served as parts is the
        // joined Blob.
        locateFile: (path) => (path === 'opengine-core.gepak' && packUrl) || new URL(path, base).href,
    });
    const abi = adaptModule(module);
    if (!packUrl)
        return abi;
    // ge_create fetches the pack; once it has returned the joined Blob is no longer needed.
    const create = abi.ge_create;
    abi.ge_create = async (...args) => {
        try {
            return await create(...args);
        } finally {
            URL.revokeObjectURL(packUrl);
        }
    };
    return abi;
}
