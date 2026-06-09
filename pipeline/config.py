"""Pipeline configuration: paths, schema mapping, and publish/cache rules."""

from __future__ import annotations

import re
from pathlib import Path

#: Repository root (this file lives in <root>/pipeline/).
ROOT = Path(__file__).resolve().parents[1]

#: Default input/output locations (overridable via CLI flags).
SCHEMA_DIR = ROOT / "schema"
SRC_DIR = ROOT / "examples"      # MVP authoring set; point --src at a larger tree as content grows
DIST_DIR = ROOT / "dist"

#: Regex matching a typed cross-document reference, e.g. "asset:kaaba-3d".
REF_RE = re.compile(r"^(place|feature|event|story|asset|source):[a-z0-9][a-z0-9-]*$")

#: Document `type` -> JSON Schema filename.
TYPE_SCHEMA = {
    "place": "place.schema.json",
    "asset": "asset.schema.json",
    "source": "source.schema.json",
    "feature": "feature.schema.json",
    "event": "event.schema.json",
    "story": "story.schema.json",
}

#: Schema for the catalog manifest (it has no `type` field).
CATALOG_SCHEMA = "catalog.schema.json"


def schema_for_doc(doc: dict, filename: str) -> str | None:
    """Return the JSON Schema filename a content document should validate against.

    Resolution order: an explicit top-level ``type`` field, otherwise the catalog
    shape (``version`` + ``stories``).

    Args:
        doc: Parsed JSON document.
        filename: Source filename, used only for error messages.

    Returns:
        The schema filename, or ``None`` if the document type cannot be determined.
    """
    t = doc.get("type")
    if isinstance(t, str) and t in TYPE_SCHEMA:
        return TYPE_SCHEMA[t]
    if "stories" in doc and "version" in doc:
        return CATALOG_SCHEMA
    return None


#: Publish rules: per-path-glob Cache-Control. Hashed assets cache forever; the
#: catalog (the only file that changes often and is fetched first) caches briefly.
CACHE_RULES = [
    ("catalog.json", "public, max-age=300, stale-while-revalidate=86400"),
    ("stories/*", "public, max-age=3600, stale-while-revalidate=604800"),
    ("search/*", "public, max-age=3600"),
    ("geometry/*", "public, max-age=86400"),
    ("*", "public, max-age=86400"),
]
