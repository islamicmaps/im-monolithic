/**
 * App configuration: where data lives, basemap sources, and defaults.
 *
 * `DATA_BASE` points at the pipeline output (`dist/`). In the browser it is
 * resolved relative to the page; in Node (tests) it falls back to a string the
 * caller overrides.
 */

/** @type {string} Base URL for built content artifacts (catalog, bundles, index). */
export const DATA_BASE =
  typeof document !== "undefined"
    ? new URL("../dist/", document.baseURI).href
    : "../dist/";

/** @type {string} Default UI locale. */
export const DEFAULT_LOCALE = "en";

/**
 * Online search API base URL. Empty string disables the online path so the app
 * falls back cleanly to the offline index. Resolved at runtime so the same build
 * works across environments:
 *   - production (`app.islamicmaps.org`): the deployed API Gateway URL
 *   - localhost / file://: empty (offline-only)
 *   - any other host: empty unless overridden by `window.IMAPS_SEARCH_API`
 *
 * @type {string}
 */
export const SEARCH_API = (() => {
  if (typeof window !== "undefined" && typeof window.IMAPS_SEARCH_API === "string") {
    return window.IMAPS_SEARCH_API;
  }
  if (typeof location !== "undefined" && location.host === "app.islamicmaps.org") {
    return "https://klc37q0kng.execute-api.us-east-1.amazonaws.com";
  }
  return "";
})();

/**
 * Basemap configuration.
 * - `vectorStyle`: pre-baked Protomaps "light" style consuming a self-hosted
 *   PMTiles file via the pmtiles:// protocol. `null` falls back to the
 *   MapLibre demo style (used by Node tests / local dev with no S3).
 * - `satellite`: free EOX Sentinel-2 cloudless raster (opt-in; heavy → off
 *   by default).
 */
export const BASEMAP = {
  vectorStyle: "./vendor/basemap-style.json",
  vectorStyleFallback: "https://demotiles.maplibre.org/style.json",
  satellite: {
    tiles: [
      "https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2020_3857/default/GoogleMapsCompatible/{z}/{y}/{x}.jpg",
    ],
    tileSize: 256,
    attribution: "Sentinel-2 cloudless — https://s2maps.eu by EOX (CC BY-NC-SA 4.0)",
    maxzoom: 14,
  },
};

/** @type {{center:[number,number], zoom:number, pitch:number}} Initial camera. */
export const DEFAULT_VIEW = { center: [40, 24], zoom: 2.5, pitch: 0 };

/**
 * Quality tiers vs. effective connection type, used to pick 2D vs 3D and model LOD.
 * Consumed by the renderer's adaptive logic.
 */
export const QUALITY = {
  // effectiveType -> allow 3D models?
  allow3d: { "slow-2g": false, "2g": false, "3g": false, "4g": true, undefined: true },
  // effectiveType -> preferred model LOD
  lod: { "slow-2g": "low", "2g": "low", "3g": "medium", "4g": "high", undefined: "medium" },
};
