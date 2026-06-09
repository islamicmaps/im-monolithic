"""3D model manifest.

We don't store model binaries in the content repo (only metadata + CDN URLs), so
this step validates each ``model3d`` asset's LOD variants and 2D fallback and emits
a manifest. When local source meshes and the gltf-transform CLI are available, the
same step is where Draco/KTX2 optimization and LOD generation would run.
"""

from __future__ import annotations

import shutil


def gltf_transform_available() -> bool:
    """Return True if the gltf-transform CLI is on PATH."""
    return shutil.which("gltf-transform") is not None


def build_manifest(docs) -> dict:
    """Summarize all ``model3d`` assets and their LOD variants.

    Args:
        docs: ``(path, document)`` tuples.

    Returns:
        ``{"count", "tool_available", "models": [...]}``.
    """
    models = []
    for _, doc in docs:
        if doc.get("type") != "asset" or doc.get("media") != "model3d":
            continue
        m = doc.get("model3d", {})
        variants = m.get("variants", [])
        models.append({
            "id": doc["id"],
            "fallback_2d": m.get("fallback_2d"),
            "variants": [
                {
                    "quality": v.get("quality"),
                    "url": v.get("url"),
                    "byte_size": v.get("byte_size"),
                    "poly_count": v.get("poly_count"),
                    "draco": v.get("draco", False),
                    "ktx2": v.get("ktx2", False),
                }
                for v in variants
            ],
        })
    return {
        "count": len(models),
        "tool_available": gltf_transform_available(),
        "note": "Metadata-only build. Provide local source meshes + gltf-transform to optimize binaries.",
        "models": models,
    }
