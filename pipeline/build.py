"""Build CLI: validate authored content and compile CDN-ready artifacts into dist/.

    python3 -m pipeline.build [--src DIR] [--dist DIR] [--strict] [--validate-only] [--clean]
"""

from __future__ import annotations

import argparse
import datetime as _dt
import shutil
import sys
from pathlib import Path

from . import basemap, compress, config, geometry, loader, models, search_index
from .bundle import bundle_story
from .validate import validate


def _human(n: int) -> str:
    """Format a byte count as ``B`` / ``KB`` / ``MB``."""
    if n < 1024:
        return f"{n} B"
    if n < 1024 * 1024:
        return f"{n / 1024:.1f} KB"
    return f"{n / 1024 / 1024:.2f} MB"


def _find_catalog(docs):
    """Return the single catalog document, or None if absent."""
    for _, doc in docs:
        if "stories" in doc and "version" in doc:
            return doc
    return None


def main(argv: list[str] | None = None) -> int:
    """Run the build pipeline.

    Args:
        argv: Optional argument vector (defaults to ``sys.argv``).

    Returns:
        Process exit code (0 ok; 2 validation failure; 1 build error).
    """
    ap = argparse.ArgumentParser(description="islamicmaps.org content build pipeline")
    ap.add_argument("--src", type=Path, default=config.SRC_DIR, help="authored content dir")
    ap.add_argument("--schema", type=Path, default=config.SCHEMA_DIR, help="JSON Schema dir")
    ap.add_argument("--dist", type=Path, default=config.DIST_DIR, help="build output dir")
    ap.add_argument("--strict", action="store_true", help="treat dangling refs as errors")
    ap.add_argument("--validate-only", action="store_true", help="validate then stop")
    ap.add_argument("--clean", action="store_true", help="wipe dist/ before building")
    args = ap.parse_args(argv)

    schemas = loader.load_schemas(args.schema)
    docs = loader.load_docs(args.src)
    print(f"Loaded {len(docs)} document(s) from {args.src} against {len(schemas)} schema(s).")

    # ---- Validate ----
    rep = validate(docs, schemas, strict=args.strict)
    if rep.errors:
        print(f"\nVALIDATION FAILED — {len(rep.errors)} error(s):", file=sys.stderr)
        for e in rep.errors:
            print(f"  - {e}", file=sys.stderr)
        return 2
    print("Validation: schemas OK, referential integrity OK"
          + (f" ({len(rep.dangling)} dangling ref(s) — see warnings)" if rep.dangling else ""))
    for w in rep.warnings:
        print(f"  ! {w}")
    if args.validate_only:
        return 0

    # ---- Compile ----
    if args.clean and args.dist.exists():
        shutil.rmtree(args.dist)
    id_index = loader.build_id_index(docs)
    sizes: list[dict] = []

    def emit(obj, rel: str):
        s = compress.write_json(obj, args.dist / rel)
        sizes.append({"artifact": rel, **s})
        return s

    # Catalog (lean manifest, loaded first).
    catalog = _find_catalog(docs)
    if catalog is None:
        print("ERROR: no catalog document found (need version + stories).", file=sys.stderr)
        return 1
    emit(catalog, "catalog.json")

    # Self-contained story bundles.
    n_stories = 0
    for _, doc in docs:
        if doc.get("type") == "story":
            bundle, _dangling = bundle_story(doc, id_index)
            emit(bundle, f"stories/{doc['id']}.json")
            n_stories += 1

    # Offline search index.
    emit(search_index.build_index(catalog), "search/index.json")

    # Geometry: GeoJSON always; PMTiles if GDAL supports it.
    fc = geometry.collect_features(docs)
    emit(fc, "geometry/features.geojson")
    pm_ok, pm_msg = geometry.to_pmtiles(
        args.dist / "geometry/features.geojson", args.dist / "geometry/features.pmtiles"
    )

    # 3D model manifest.
    model_manifest = models.build_manifest(docs)
    emit(model_manifest, "models-manifest.json")

    # Basemap: copy a pre-built Protomaps PMTiles into dist/basemap/. Optional.
    bm_ok, bm_msg = basemap.copy_to_dist(args.dist)

    # ---- Build manifest + summary ----
    totals = {k: sum(s[k] for s in sizes) for k in ("raw", "gz", "br")}
    tools = {
        "brotli": compress.HAVE_BROTLI,
        "gdal_pmtiles": geometry.has_pmtiles_driver(),
        "gltf_transform": model_manifest["tool_available"],
        "aws_cli": shutil.which("aws") is not None,
    }
    manifest = {
        "generated": _dt.datetime.now(_dt.timezone.utc).isoformat(timespec="seconds"),
        "catalog_version": catalog.get("version"),
        "counts": {"documents": len(docs), "stories": n_stories, "features": len(fc["features"]),
                   "models": model_manifest["count"]},
        "tools": tools,
        "geometry_pmtiles": {"ok": pm_ok, "message": pm_msg},
        "dangling_refs": rep.dangling,
        "artifacts": sizes,
        "totals": totals,
    }
    compress.write_json(manifest, args.dist / "build-manifest.json")

    w = max(len(s["artifact"]) for s in sizes)
    print(f"\nBuilt {len(sizes)} artifact(s) -> {args.dist}\n")
    print(f"  {'artifact'.ljust(w)}   {'raw':>9}  {'gzip':>9}  {'brotli':>9}")
    print(f"  {'-' * w}   {'-'*9}  {'-'*9}  {'-'*9}")
    for s in sizes:
        print(f"  {s['artifact'].ljust(w)}   {_human(s['raw']):>9}  {_human(s['gz']):>9}  {_human(s['br']):>9}")
    print(f"  {'-' * w}   {'-'*9}  {'-'*9}  {'-'*9}")
    print(f"  {'TOTAL'.ljust(w)}   {_human(totals['raw']):>9}  {_human(totals['gz']):>9}  {_human(totals['br']):>9}")
    ratio = (1 - totals["br"] / totals["raw"]) * 100 if totals["raw"] else 0
    print(f"\n  over-the-wire (brotli): {_human(totals['br'])}  ({ratio:.0f}% smaller than raw)")
    print(f"  geometry PMTiles: {'OK' if pm_ok else 'skipped — ' + pm_msg}")
    print(f"  basemap PMTiles:  {'OK — ' + bm_msg if bm_ok else 'skipped — ' + bm_msg}")
    print(f"  tools: " + ", ".join(f"{k}={'yes' if v else 'no'}" for k, v in tools.items()))
    if not compress.HAVE_BROTLI:
        print("  note: brotli unavailable — 'brotli' column shows gzip sizes.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
