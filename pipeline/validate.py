"""Validation: JSON Schema conformance + cross-document referential integrity."""

from __future__ import annotations

from dataclasses import dataclass, field
from pathlib import Path

from . import config, loader


@dataclass
class Report:
    """Outcome of a validation pass.

    Attributes:
        errors: Hard failures (schema violations, unknown doc types, dangling refs
            when ``--strict``). Non-empty => the build must fail.
        warnings: Soft issues (dangling refs for not-yet-produced media, etc.).
        dangling: Sorted list of references with no matching document.
        doc_count: Number of documents validated.
    """

    errors: list[str] = field(default_factory=list)
    warnings: list[str] = field(default_factory=list)
    dangling: list[str] = field(default_factory=list)
    doc_count: int = 0

    @property
    def ok(self) -> bool:
        """True when there are no hard errors."""
        return not self.errors


def validate(docs, schemas, *, strict: bool = False) -> Report:
    """Validate documents against their schemas and check referential integrity.

    Args:
        docs: ``(path, document)`` tuples from :func:`loader.load_docs`.
        schemas: Loaded schemas from :func:`loader.load_schemas`.
        strict: When True, dangling references are errors rather than warnings.

    Returns:
        A :class:`Report`.
    """
    rep = Report(doc_count=len(docs))
    id_index = loader.build_id_index(docs)
    known = set(id_index)

    # 1) Schema conformance.
    for path, doc in docs:
        name = config.schema_for_doc(doc, path.name)
        if name is None:
            rep.errors.append(f"{path.name}: cannot determine document type (no 'type'/catalog shape)")
            continue
        v = loader.validator_for(name, schemas)
        for err in sorted(v.iter_errors(doc), key=lambda e: list(e.path)):
            loc = "/".join(str(p) for p in err.path) or "(root)"
            rep.errors.append(f"{path.name} [{name}] at {loc}: {err.message}")

    # 2) Referential integrity: every typed ref must resolve to a known document.
    seen: set[str] = set()
    for path, doc in docs:
        for ref in loader.iter_refs(doc):
            if ref not in known:
                seen.add(ref)
    rep.dangling = sorted(seen)
    for ref in rep.dangling:
        msg = f"dangling reference: {ref} (no matching document)"
        (rep.errors if strict else rep.warnings).append(msg)

    # 3) Catalog <-> story consistency: each catalog story id needs a story document.
    story_ids = {doc["id"] for _, doc in docs if doc.get("type") == "story"}
    for _, doc in docs:
        if "stories" in doc and "version" in doc:  # the catalog
            for entry in doc.get("stories", []):
                sid = entry.get("id")
                if sid and sid not in story_ids:
                    rep.warnings.append(f"catalog lists story '{sid}' but no story document exists")

    return rep
