/**
 * Build self-contained ESM bundles of the three runtime deps so the live app
 * has zero third-party CDN dependencies. Output goes to ../app/vendor/.
 *
 * - maplibre-gl     -> single self-contained bundle + CSS copy
 * - deck.gl         -> tree-shaken to only the layers main.js/layers.js import
 * - @deck.gl/mapbox -> tree-shaken to only MapboxOverlay (uses @deck.gl/core
 *                       — bundled here too so the runtime sees one core)
 */
import * as esbuild from "esbuild";
import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const ROOT = resolve(import.meta.dirname);
const OUT = resolve(ROOT, "../app/vendor");
await mkdir(OUT, { recursive: true });

const COMMON = {
  bundle: true,
  format: "esm",
  target: ["es2022"],
  platform: "browser",
  minify: true,
  sourcemap: false,
  legalComments: "none",
  // Mark only Node-only modules as external; nothing else.
  external: [],
  banner: { js: "/* islamicmaps.org — bundled vendor (build-time) */" },
  logLevel: "info",
};

// 1) maplibre-gl — package.json `main` is the prebuilt UMD/ESM bundle, but
//    esbuild can rebuild from sources for cleaner ESM. We bundle from the
//    package entry so no AMD / global-side-effects survive.
console.log("\n=== maplibre-gl ===");
await esbuild.build({
  ...COMMON,
  stdin: {
    contents: `export * from "maplibre-gl"; export {default} from "maplibre-gl";`,
    resolveDir: ROOT,
  },
  outfile: resolve(OUT, "maplibre-gl.mjs"),
});
await copyFile(
  resolve(ROOT, "node_modules/maplibre-gl/dist/maplibre-gl.css"),
  resolve(OUT, "maplibre-gl.css")
);

// 2) Combined deck.gl bundle — MapboxOverlay AND the Layer types in ONE file.
//    Bundling them separately produces TWO copies of @deck.gl/core, which
//    causes shader-link errors at runtime: layers built against core-copy-B
//    can't link against shader hooks registered on core-copy-A's Deck
//    instance (DECKGL_FILTER_COLOR / DECKGL_FILTER_GL_POSITION undefined).
//    The importmap points both `deck.gl` and `@deck.gl/mapbox` at this file.
console.log("\n=== deck.gl + @deck.gl/mapbox (combined, single core) ===");
await esbuild.build({
  ...COMMON,
  stdin: {
    contents: `
      export { MapboxOverlay } from "@deck.gl/mapbox";
      export { GeoJsonLayer, PathLayer, PolygonLayer, ScatterplotLayer } from "@deck.gl/layers";
      export { ScenegraphLayer } from "@deck.gl/mesh-layers";
    `,
    resolveDir: ROOT,
  },
  outfile: resolve(OUT, "deck.gl.mjs"),
});

// 4) pmtiles — protocol handler so MapLibre can consume `pmtiles://...` URLs.
//    Tiny (~30 KB).
console.log("\n=== pmtiles (Protocol only) ===");
await esbuild.build({
  ...COMMON,
  stdin: {
    contents: `export { Protocol } from "pmtiles";`,
    resolveDir: ROOT,
  },
  outfile: resolve(OUT, "pmtiles.mjs"),
});

// 5) Pre-baked Protomaps "light" style JSON, ready for MapLibre's setStyle.
//    Pre-baking means the runtime doesn't need protomaps-themes-base; the
//    style is just static JSON.
console.log("\n=== protomaps-themes-base (pre-baked style JSON) ===");
const themes = await import(
  resolve(ROOT, "node_modules/protomaps-themes-base/dist/esm/index.js")
);
const SOURCE_LAYER = "protomaps";
// The vector source `url` is left as a placeholder — at runtime, map.js
// substitutes the absolute, same-origin URL (the pmtiles:// protocol can't
// resolve relative paths from inside the MapLibre worker).
//
// `layersWithCustomTheme(source, namedTheme(themeName), lang)` substitutes
// the named-theme colors into the layer specs (returns concrete hex values).
// The plain `layers(...)` overload returns CSS variable references that
// MapLibre rejects as invalid (`null` paint values).
function buildStyle(themeName, lang) {
  const palette = themes.namedTheme(themeName);
  // `layersWithCustomTheme` already includes BOTH base + label layers — do
  // NOT also concat `labelsWithCustomTheme` (causes duplicate-id errors that
  // MapLibre 5 rejects, leaving the source unloaded).
  const layers = themes.layersWithCustomTheme(SOURCE_LAYER, palette, lang);
  return {
    version: 8,
    glyphs:
      "https://protomaps.github.io/basemaps-assets/fonts/{fontstack}/{range}.pbf",
    sprite:
      "https://protomaps.github.io/basemaps-assets/sprites/v4/light",
    sources: {
      [SOURCE_LAYER]: {
        type: "vector",
        // map.js rewrites this to `pmtiles://<origin>/dist/basemap/hijaz.pmtiles`.
        url: "pmtiles://__ORIGIN__/dist/basemap/hijaz.pmtiles",
        attribution:
          '<a href="https://protomaps.com" target="_blank">© Protomaps</a> © <a href="https://openstreetmap.org" target="_blank">OpenStreetMap</a>',
      },
    },
    layers,
  };
}
const lightStyle = buildStyle("light", "en");
await writeFile(
  resolve(OUT, "basemap-style.json"),
  JSON.stringify(lightStyle, null, 0) + "\n"
);

// Pretty-print sizes
async function size(p) {
  const buf = await readFile(p);
  return `${(buf.length / 1024).toFixed(1)} KB`;
}
// Remove the now-obsolete deck.gl-mapbox.mjs from prior builds, if present —
// it's been merged into the combined deck.gl.mjs above.
import { unlink } from "node:fs/promises";
try {
  await unlink(resolve(OUT, "deck.gl-mapbox.mjs"));
  console.log("removed obsolete deck.gl-mapbox.mjs (merged into deck.gl.mjs)");
} catch {}

console.log("\n=== output sizes ===");
for (const f of [
  "maplibre-gl.mjs",
  "maplibre-gl.css",
  "deck.gl.mjs",
  "pmtiles.mjs",
  "basemap-style.json",
]) {
  console.log(`  ${f.padEnd(24)} ${await size(resolve(OUT, f))}`);
}

// Tag the build artifacts so the importmap can be regenerated deterministically.
await writeFile(
  resolve(OUT, "VERSIONS.json"),
  JSON.stringify(
    {
      builtAt: process.env.BUILT_AT || "(no timestamp)", // stamped by deploy.sh
      maplibreGl: "5.24.0",
      deckGl: "9.3.3",
      deckGlMapbox: "9.3.3",
      pmtiles: "4.4.1",
      protomapsThemesBase: "4.5.0",
    },
    null,
    2
  ) + "\n"
);
console.log("\nDone. -> app/vendor/");
