"""Loading of schemas and content documents, plus reference helpers."""

from __future__ import annotations

import json
import warnings
from pathlib import Path
from typing import Iterator

from jsonschema import Draft202012Validator, RefResolver

from . import config


def load_schemas(schema_dir: Path = config.SCHEMA_DIR) -> dict[str, dict]:
    """Load every ``*.schema.json`` in ``schema_dir`` keyed by filename.

    Args:
        schema_dir: Directory containing the JSON Schema files.

    Returns:
        Mapping of schema filename -> parsed schema.
    """
    return {p.name: json.loads(p.read_text("utf-8")) for p in sorted(schema_dir.glob("*.schema.json"))}


def _store(schemas: dict[str, dict]) -> dict[str, dict]:
    """Build an offline ``$ref`` resolution store keyed by both ``$id`` and filename.

    Keying by the absolute ``$id`` (and the relative filename used in refs) means
    cross-file ``$ref``s resolve locally and never hit the network.
    """
    store: dict[str, dict] = {}
    for name, schema in schemas.items():
        store[name] = schema
        if "$id" in schema:
            store[schema["$id"]] = schema
    return store


def validator_for(schema_name: str, schemas: dict[str, dict]) -> Draft202012Validator:
    """Return a validator for ``schema_name`` with offline cross-file ref resolution.

    Args:
        schema_name: Schema filename, e.g. ``"story.schema.json"``.
        schemas: All loaded schemas (for resolving ``$ref``).

    Returns:
        A configured ``Draft202012Validator``.
    """
    schema = schemas[schema_name]
    with warnings.catch_warnings():
        warnings.simplefilter("ignore")  # RefResolver is deprecated but stable for a build tool
        resolver = RefResolver(base_uri=schema.get("$id", ""), referrer=schema, store=_store(schemas))
        return Draft202012Validator(schema, resolver=resolver)


def load_docs(src_dir: Path = config.SRC_DIR) -> list[tuple[Path, dict]]:
    """Load all content ``*.json`` documents from ``src_dir`` (non-recursive).

    Args:
        src_dir: Directory of authored content documents.

    Returns:
        List of ``(path, document)`` tuples, sorted by filename.
    """
    return [(p, json.loads(p.read_text("utf-8"))) for p in sorted(src_dir.glob("*.json"))]


def build_id_index(docs: list[tuple[Path, dict]]) -> dict[str, dict]:
    """Index documents that have a ``type`` + ``id`` by their ``"type:id"`` key.

    Args:
        docs: ``(path, document)`` tuples from :func:`load_docs`.

    Returns:
        Mapping of ``"type:id"`` -> document (the catalog, lacking type+id, is omitted).
    """
    index: dict[str, dict] = {}
    for _, doc in docs:
        if "type" in doc and "id" in doc:
            index[f"{doc['type']}:{doc['id']}"] = doc
    return index


def iter_refs(obj) -> Iterator[str]:
    """Recursively yield every typed reference string (e.g. ``"asset:kaaba-3d"``) in ``obj``.

    Args:
        obj: Any JSON value (dict/list/scalar).

    Yields:
        Each string that matches the reference pattern.
    """
    if isinstance(obj, str):
        if config.REF_RE.match(obj):
            yield obj
    elif isinstance(obj, dict):
        for v in obj.values():
            yield from iter_refs(v)
    elif isinstance(obj, list):
        for v in obj:
            yield from iter_refs(v)
