"""Geometry compilation: features -> GeoJSON, and (if GDAL supports it) PMTiles.

Per project policy we use GDAL (ogr2ogr), not rasterio/tippecanoe. Small MVP
geometry is also inlined into story bundles; PMTiles matters once geometry grows,
where vector tiles let the client fetch only the visible area at the right zoom.
"""

from __future__ import annotations

import subprocess
from pathlib import Path


def collect_features(docs) -> dict:
    """Collect features that carry inline geometry into one GeoJSON FeatureCollection.

    Args:
        docs: ``(path, document)`` tuples.

    Returns:
        A GeoJSON ``FeatureCollection`` dict.
    """
    features = []
    for _, doc in docs:
        if doc.get("type") != "feature":
            continue
        inline = (doc.get("geometry") or {}).get("inline")
        if not inline:
            continue
        features.append({
            "type": "Feature",
            "id": doc["id"],
            "properties": {
                "id": doc["id"],
                "label_en": (doc.get("label") or {}).get("en"),
                "themes": doc.get("themes", []),
            },
            "geometry": inline,
        })
    return {"type": "FeatureCollection", "features": features}


def has_pmtiles_driver() -> bool:
    """Return True if the local GDAL build exposes the PMTiles vector driver."""
    try:
        out = subprocess.run(["ogrinfo", "--formats"], capture_output=True, text=True, timeout=30)
        return "PMTiles" in out.stdout
    except Exception:
        return False


def to_pmtiles(geojson_path: Path, out_path: Path) -> tuple[bool, str]:
    """Convert a GeoJSON file to vector PMTiles via ``ogr2ogr`` (best effort).

    Args:
        geojson_path: Source ``.geojson``.
        out_path: Destination ``.pmtiles``.

    Returns:
        ``(ok, message)``.
    """
    if not has_pmtiles_driver():
        return False, "GDAL PMTiles driver not available (install GDAL >= 3.8 or tippecanoe); GeoJSON emitted instead"
    out_path.unlink(missing_ok=True)
    try:
        res = subprocess.run(
            ["ogr2ogr", "-f", "PMTiles", str(out_path), str(geojson_path)],
            capture_output=True, text=True, timeout=120,
        )
        if res.returncode == 0 and out_path.exists():
            return True, "ok"
        return False, (res.stderr or res.stdout or "ogr2ogr failed").strip().splitlines()[-1]
    except Exception as exc:  # pragma: no cover
        return False, str(exc)
