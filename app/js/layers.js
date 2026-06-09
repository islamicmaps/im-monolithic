/**
 * Build deck.gl layers from a story bundle + the current playback state.
 *
 * Visible features render in 2D (GeoJsonLayer) or, when bandwidth/device allow and
 * the feature has a `render3d.model`, in 3D (ScenegraphLayer). Animations from the
 * active step draw the route progressively (PathLayer slice) and/or move a marker
 * along it (ScatterplotLayer). In production TripsLayer is the richer choice; the
 * deterministic path-slice keeps the scaffold simple to reason about.
 */

import { GeoJsonLayer, PathLayer, PolygonLayer, ScatterplotLayer, ScenegraphLayer } from "deck.gl";
import { deref } from "./data.js";

/**
 * Convert a CSS hex color to an `[r,g,b]` array (defaults to a green).
 * @param {string} hex e.g. "#1f7a4d".
 * @returns {number[]}
 */
function hexToRgb(hex) {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex || "");
  if (!m) return [31, 122, 77];
  const n = parseInt(m[1], 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/** Cumulative planar lengths along a LineString (good enough at city/region scale). */
function cumulative(coords) {
  const cum = [0];
  for (let i = 1; i < coords.length; i++) {
    const [x0, y0] = coords[i - 1];
    const [x1, y1] = coords[i];
    cum.push(cum[i - 1] + Math.hypot(x1 - x0, y1 - y0));
  }
  return cum;
}

/**
 * Interpolate the position at fraction `t` (0..1) along a LineString.
 * @param {number[][]} coords [[lng,lat],...].
 * @param {number} t Fraction in [0,1].
 * @returns {number[]} [lng,lat].
 */
export function pointAlong(coords, t) {
  if (coords.length === 1) return coords[0];
  const cum = cumulative(coords);
  const target = Math.max(0, Math.min(1, t)) * cum[cum.length - 1];
  for (let i = 1; i < cum.length; i++) {
    if (cum[i] >= target) {
      const seg = cum[i] - cum[i - 1] || 1;
      const f = (target - cum[i - 1]) / seg;
      const [x0, y0] = coords[i - 1];
      const [x1, y1] = coords[i];
      return [x0 + (x1 - x0) * f, y0 + (y1 - y0) * f];
    }
  }
  return coords[coords.length - 1];
}

/**
 * Return the path up to fraction `t` (progressive draw), including the interpolated head.
 * @param {number[][]} coords [[lng,lat],...].
 * @param {number} t Fraction in [0,1].
 * @returns {number[][]}
 */
export function sliceByFraction(coords, t) {
  if (t >= 1) return coords;
  const cum = cumulative(coords);
  const target = Math.max(0, Math.min(1, t)) * cum[cum.length - 1];
  const out = [coords[0]];
  for (let i = 1; i < cum.length; i++) {
    if (cum[i] < target) out.push(coords[i]);
    else {
      out.push(pointAlong(coords, t));
      break;
    }
  }
  return out;
}

/**
 * Build the deck.gl layer list for the current frame.
 * @param {object} bundle Story bundle (with `_refs`).
 * @param {import("./playback.js").PlaybackState} state Current playback state.
 * @param {{allow3d?:boolean, lod?:string}} [opts] Adaptive rendering options.
 * @returns {object[]} deck.gl layers.
 */
export function buildLayers(bundle, state, opts = {}) {
  const layers = [];
  const { allow3d = true, lod = "medium" } = opts;

  // 1) Visible features (2D baseline, optional 3D).
  for (const ref of state.visibleFeatures) {
    const f = deref(bundle, ref);
    const geom = f && f.geometry && f.geometry.inline;
    if (!geom) continue;

    // 3D model (glTF) takes precedence when both present.
    const model = allow3d && f.render3d && f.render3d.model ? deref(bundle, f.render3d.model) : null;
    if (model && model.model3d) {
      const variant = pickVariant(model.model3d.variants, lod);
      layers.push(
        new ScenegraphLayer({
          id: `model-${f.id}`,
          data: [{ position: model.model3d.anchor || geom.coordinates }],
          scenegraph: variant && variant.url,
          getPosition: (d) => d.position,
          getOrientation: [0, model.model3d.rotation ? model.model3d.rotation[1] : 0, 90],
          sizeScale: model.model3d.scale || 1,
          _lighting: "pbr",
          pickable: true,
        })
      );
      continue;
    }

    // Procedural 3D — extrude a Polygon geometry to render3d.extrude.height_m.
    // Zero asset weight; renders identically to a glTF box for cuboid volumes
    // like the Kaaba. Falls back to the 2D fill if 3D is disabled.
    const ex = f.render3d && f.render3d.extrude;
    if (allow3d && ex && geom.type === "Polygon") {
      const color = hexToRgb(f.render2d && f.render2d.color);
      layers.push(
        new PolygonLayer({
          id: `extrude-${f.id}`,
          data: [{ polygon: geom.coordinates[0], elevation: ex.height_m, base: ex.base_m || 0 }],
          getPolygon: (d) => d.polygon,
          getElevation: (d) => d.elevation,
          getFillColor: [...color, 230],
          getLineColor: [...color, 255],
          extruded: true,
          wireframe: false,
          stroked: false,
          filled: true,
          material: { ambient: 0.4, diffuse: 0.8, shininess: 32, specularColor: [60, 60, 60] },
          pickable: true,
        })
      );
      continue;
    }

    const color = hexToRgb(f.render2d && f.render2d.color);
    layers.push(
      new GeoJsonLayer({
        id: `feat-${f.id}`,
        data: { type: "Feature", geometry: geom, properties: { id: f.id } },
        stroked: true,
        filled: true,
        getFillColor: [...color, 80],
        getLineColor: color,
        lineWidthMinPixels: (f.render2d && f.render2d.width) || 3,
        pointRadiusMinPixels: 6,
        pickable: true,
      })
    );
  }

  // 2) Active-step animations.
  for (const a of state.animations) {
    const f = deref(bundle, a.feature);
    const coords = f && f.geometry && f.geometry.inline && f.geometry.inline.coordinates;
    if (!coords || !Array.isArray(coords[0])) continue;
    const color = hexToRgb(f.render2d && f.render2d.color);

    if (a.kind === "draw_path" || a.kind === "trip") {
      layers.push(
        new PathLayer({
          id: `anim-path-${a.feature}`,
          data: [{ path: sliceByFraction(coords, a.t) }],
          getPath: (d) => d.path,
          getColor: color,
          widthMinPixels: 4,
          capRounded: true,
          jointRounded: true,
        })
      );
    }
    if (a.kind === "trip" || a.kind === "move_marker") {
      layers.push(
        new ScatterplotLayer({
          id: `anim-marker-${a.feature}`,
          data: [{ position: pointAlong(coords, a.t) }],
          getPosition: (d) => d.position,
          getFillColor: [192, 57, 43],
          radiusMinPixels: 7,
          stroked: true,
          getLineColor: [255, 255, 255],
          lineWidthMinPixels: 2,
        })
      );
    }
  }

  return layers;
}

/**
 * Pick a model LOD variant for the preferred quality, falling back gracefully.
 * @param {object[]} variants Model variants.
 * @param {string} lod Preferred quality ("low"|"medium"|"high").
 * @returns {object|null}
 */
export function pickVariant(variants, lod) {
  if (!variants || !variants.length) return null;
  return variants.find((v) => v.quality === lod) || variants[0];
}
