# opengine-web

Live examples and builds of `@openengine/web`: a WebGPU renderer (clustered lighting, cascaded shadows, a physical sky) and an entity-component world behind a small JavaScript API, running in the browser.

- **The examples**: https://game-crafters-guild.github.io/opengine-web/. They need WebGPU: use a current Chrome or Edge.
- **Early access (alpha)**: the engine and its API change between releases; this site serves `@openengine/web` 2026.10.0-alpha.3, built from engine commit 9c9524c867.
- **The package**: `package/` holds the library as a page imports it:
  - `opengine.mjs`, its declarations and `types/`;
  - the engine module in two builds, `opengine-core.st` (single-threaded) and `opengine-core.mt` (threaded);
  - the engine pack, served as parts with an index, because GitHub refuses files over 100 MB;
  - the README and `llms.txt`.

  `package/README.md` is the guide.
- **What this repository is**: the built package and the example pages, published ahead of the engine's source. It holds:
  - compiled WebAssembly and the library's JavaScript;
  - the engine's cooked shaders, and the shader sources the engine module composes materials against.

  It holds no engine C++ source. The engine's source follows in its own public repository.

## Licenses

- The library and the engine module: MIT, `package/LICENSE`. The module and the engine pack also carry third-party code and content, whose licenses are in `package/THIRD_PARTY_NOTICES.md`.
- `coi-serviceworker.js`, in `package/` beside the engine module: MIT, by Guido Zuidhof, `package/coi-serviceworker.LICENSE`.
- Example content: every model the pages load is listed with its source and license in `package/examples/ASSET_PROVENANCE.md`.
  - The Khronos glTF Sample Assets models (CC0 1.0) are loaded by URL from their source.
  - The two helmets in `models/` (CC0 1.0) are single-file copies made for this site; how they were made is recorded in the same file.
  - Most models the page lists are CC0 1.0. The attribution-licensed ones (CC BY 4.0, and the Damaged Helmet also CC BY-NC 4.0, non-commercial) show their credits on the page while they are on screen; the credits are recorded in `package/examples/ASSET_PROVENANCE.md`.
