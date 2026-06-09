# islamicmaps.org — Content Schema

The keystone of the project: a platform-agnostic, versioned content model that the
web app, future native apps, and agentic-AI content generation all share. Renderer
(MapLibre + deck.gl) and infra (AWS) hang off this; they never dictate it.

Schemas are **JSON Schema (draft 2020-12)** so any validator — and any LLM — can
target them directly. Reuse standards, don't reinvent: GeoJSON (RFC 7946), EDTF
(ISO 8601-2) for dates, Linked Places / World Historical Gazetteer for place IDs,
glTF/GLB for 3D.

## The content graph (how units compose)

Small documents referenced by typed id (`place:`, `feature:`, `event:`, `story:`,
`asset:`, `source:`). The client lazy-loads only what a view needs — the lever for
low/no-bandwidth.

```
  Atoms (often timeless)        Renderable            Composites
  ─────────────────────         ──────────            ──────────
  place    ── geography ──┐
  asset    ── 3D/img/aud ─┤──▶  feature  ──┐
  source   ── citation ───┘   (2D + opt 3D) │──▶  event  ──┐  (atoms + time)
                                            └──────────────┤──▶  story
                                                           │     (playback)
                              event ───────────────────────┘
```

- **place / asset / source** — atomic, usually **atemporal**.
- **feature** — one geometry on the map; always has `render2d`, optionally `render3d`.
- **event** — *composes* places + features + a time extent. This is how individual
  units connect into a happening. (A date is an attribute *of* an event, never the
  atomic unit.)
- **story** — *composes* features + events + **playback**; the headline unit search
  returns and the play button drives.
- **catalog** — the lean, always-loaded, offline-cached manifest + search seed.

`temporal` is **optional everywhere** → timeless content (e.g. the present-day Kaaba
model) simply omits it.

## Playback: two modes

- `temporal` — driven by real dates; shows the **global time slider** with
  play/pause/speed. Steps carry `at_time` (a `DateValue.sort_key` positions them).
  *Example: `story.hijra.json` — animated route via deck.gl TripsLayer.*
- `sequential` — ordered `steps` with **no real dates** (procedural).
  *Example: `story.umrah.json` — ihram → tawaf → sa'i → halq, 3D at real sites.*
- `none` — static map (e.g. a single 3D landmark).

Camera choreography, `show`/`hide` of features, narration (+ per-language audio),
route `animate` (draw_path / move_marker / trip), and scrollytelling sections all
live on the story. Designed for ALL killer features now; the MVP merely renders a
subset — nothing here forecloses a later feature.

## Dates — Hijri + Gregorian + uncertainty

`common.schema.json#/$defs/DateValue`:
- `edtf` — canonical uncertainty string (`"0610?"`, `"062X"`, `"0622/0624"`, `-0001`).
- `gregorian` + `hijri` — dual calendar parts.
- `sort_key` — **required**: canonical proleptic-Gregorian ordinal so the time slider
  orders even uncertain / BCE / Hijri dates. Negative = BCE.
- `certainty` (exact|circa|disputed|range) + localized `display`/`note`.

## i18n + RTL

Every human string is a `LocalizedString` (BCP-47 locale → string). Always include
`en`; `ar` strongly recommended. Direction (RTL for ar/ur/fa) is resolved at render
time from the locale — not stored. Audio/video carry per-language `captions`.

## Sourcing — the "i" panel

`info[]` is an array of extensible `InfoBlock`s (text | heading | image | audio |
video | quran | hadith | citation | external_link), plus structured `source` docs.
Every story carries a `review` status (draft → ai-generated → scholar-reviewed →
verified) and a `certainty` flag. This rigor is the project's credibility moat.

## Authoring format vs delivery format (answers "isn't JSON too big?")

**Author** in readable JSON/GeoJSON (AI-friendly, git-diffable, scholar-reviewable).
A **build step compiles** to lean delivery formats — you never hand-author binary:

| Content              | Authoring        | Delivery (built)                          |
|----------------------|------------------|-------------------------------------------|
| metadata / i18n / "i"| JSON             | **brotli** JSON (text compresses ~85-90%) |
| map geometry (scale) | inline GeoJSON   | **PMTiles / MVT** vector tiles (visible-area + zoom LOD) |
| 3D models            | `asset` metadata | **GLB + Draco + KTX2**, LOD variants      |
| search               | `catalog` + keywords | prebuilt client index (Orama/FlexSearch), Arabic-normalized |

JSON-over-the-wire is small once brotli'd; raw GeoJSON is only wasteful for large
geometry, which is why sizable features use `GeometrySource.tiles` instead of `inline`.

## Search

- **Offline, always** — themes/titles/keywords/metadata via a prebuilt client index
  (Orama or FlexSearch) from `catalog.json`. Arabic normalization: strip harakat,
  unify alef forms (أ إ آ → ا) and ta-marbuta (ة → ه), fold transliterations.
- **Deep/semantic — serverless, online-only** — full-text + embeddings behind the
  same REST/JSON API (OpenSearch Serverless / Typesense). Never blocks low-bandwidth.
- The dropdown is replaced by **search box + faceted theme filters**.

## Build pipeline

```
authoring/*.json  ──validate (JSON Schema)──▶  compile  ──▶  dist/  ──▶  S3 + CloudFront
  (AI-generated)                                 │
                                                 ├─ geometry  → PMTiles
                                                 ├─ metadata  → brotli JSON
                                                 ├─ 3D        → GLB (Draco+KTX2) LODs
                                                 └─ search    → client index
```

## Guidance for agentic-AI content generation

1. Emit **one JSON document per file**, named `<type>.<id>.json`.
2. Validate every file against its schema before committing.
3. Reference other docs by typed id; create the referenced atoms (place/source/asset).
4. Always populate `en`; add `ar` and transliterations to `alt_names`/`keywords`.
5. Cite everything in `sources`/`info`; set `review.stage = "ai-generated"` and an
   honest `certainty`. Flag contested claims in `note`.
6. Provide `sort_key` on every `DateValue`. Keep geometry inline only when small.

## Files

`common` · `place` · `asset` · `source` · `feature` · `event` · `story` · `catalog`
schemas here; worked examples (both MVP items, end-to-end) under `../examples/`.
