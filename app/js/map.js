/**
 * MapLibre GL map setup and basemap switching.
 *
 * Vector is the default (light, low-bandwidth). Satellite is an opt-in raster
 * overlay (free EOX Sentinel-2 cloudless) toggled by layer visibility — no
 * `setStyle`, so the deck.gl overlay stays attached.
 */

import maplibregl from "maplibre-gl";
import { Protocol } from "pmtiles";
import { BASEMAP, DEFAULT_VIEW } from "./config.js";

// Register the pmtiles:// protocol once. MapLibre dispatches range requests
// to the PMTiles archive over normal HTTP — no tile server required.
let _pmtilesRegistered = false;
function ensurePmtilesProtocol() {
  if (_pmtilesRegistered) return;
  const protocol = new Protocol();
  maplibregl.addProtocol("pmtiles", protocol.tile);
  _pmtilesRegistered = true;
}

/**
 * Fetch the pre-baked Protomaps style and rewrite the placeholder source URL
 * to an absolute same-origin URL. The protomaps://__ORIGIN__/path form is
 * needed because the pmtiles:// protocol cannot resolve relative URLs from
 * inside MapLibre's worker context.
 * @param {string} styleUrl URL of the style JSON.
 * @returns {Promise<object|null>} Patched style, or null on failure.
 */
async function loadAndPatchStyle(styleUrl) {
  try {
    const res = await fetch(styleUrl);
    if (!res.ok) return null;
    const style = await res.json();
    const origin = location.origin;
    for (const src of Object.values(style.sources || {})) {
      if (typeof src.url === "string") {
        src.url = src.url.replace("__ORIGIN__", origin);
      }
    }
    return style;
  } catch {
    return null;
  }
}

/**
 * Create the MapLibre map and attach the (initially hidden) satellite raster layer.
 * @param {HTMLElement|string} container Map container element or id.
 * @returns {Promise<import("maplibre-gl").Map>} Resolves once the style is loaded.
 */
export async function createMap(container) {
  ensurePmtilesProtocol();
  // Try to load the PMTiles-backed style first; fall back to the demo style
  // if anything goes wrong (offline dev, missing file, fetch failure).
  const initialStyle =
    (await loadAndPatchStyle(BASEMAP.vectorStyle)) ||
    BASEMAP.vectorStyleFallback;

  const map = new maplibregl.Map({
    container,
    style: initialStyle,
    center: DEFAULT_VIEW.center,
    zoom: DEFAULT_VIEW.zoom,
    pitch: DEFAULT_VIEW.pitch,
    attributionControl: { compact: true },
    hash: false,
  });

  // Late fallback: if the patched style failed at the source level (e.g.
  // PMTiles HEAD request is blocked), drop to the demo style so the rest of
  // the app remains usable.
  if (BASEMAP.vectorStyleFallback) {
    map.on("error", (e) => {
      const msg = String(e?.error?.message || "");
      if (msg.includes("pmtiles") || msg.includes("hijaz.pmtiles")) {
        console.warn("PMTiles basemap unavailable, falling back to demo style:", msg);
        map.setStyle(BASEMAP.vectorStyleFallback);
      }
    });
  }
  map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), "bottom-right");

  return new Promise((resolve) => {
    map.on("load", () => {
      if (!map.getSource("satellite")) {
        map.addSource("satellite", {
          type: "raster",
          tiles: BASEMAP.satellite.tiles,
          tileSize: BASEMAP.satellite.tileSize,
          maxzoom: BASEMAP.satellite.maxzoom,
          attribution: BASEMAP.satellite.attribution,
        });
        map.addLayer({
          id: "satellite",
          type: "raster",
          source: "satellite",
          layout: { visibility: "none" },
        });
      }
      resolve(map);
    });
  });
}

/**
 * Toggle the basemap between the vector style and the satellite overlay.
 * @param {import("maplibre-gl").Map} map The map.
 * @param {"vector"|"satellite"} kind Which basemap to show.
 */
export function setBasemap(map, kind) {
  if (!map.getLayer("satellite")) return;
  map.setLayoutProperty("satellite", "visibility", kind === "satellite" ? "visible" : "none");
}

/**
 * Fly the camera to a story or step view.
 * @param {import("maplibre-gl").Map} map The map.
 * @param {{center?:number[], zoom?:number, pitch?:number, bearing?:number, duration_ms?:number}} cam Camera pose.
 */
export function flyTo(map, cam) {
  if (!cam || !cam.center) return;
  map.flyTo({
    center: cam.center,
    zoom: cam.zoom ?? map.getZoom(),
    pitch: cam.pitch ?? 0,
    bearing: cam.bearing ?? 0,
    duration: cam.duration_ms ?? 2000,
    essential: true,
  });
}
