"""Build the prebuilt, offline, Arabic-normalized search index from the catalog.

The index is a compact inverted index (token -> story positions) plus a slim docs
array for rendering hits. It is shipped as a static file and loaded once; search
then runs entirely client-side, with no server and no per-query bandwidth. The
client must normalize the query with the SAME rules as :mod:`pipeline.arabic`.
"""

from __future__ import annotations

from . import arabic

# Fields copied verbatim into each search hit (enough to render a result card).
_DOC_FIELDS = ("id", "title", "subtitle", "category", "themes", "thumb", "url", "bbox", "temporal_range", "languages")


def build_index(catalog: dict) -> dict:
    """Build the search index from a catalog document.

    Indexed text per story: titles/subtitles (all locales), keywords, category, and
    theme ids + their localized labels.

    Args:
        catalog: The catalog document (``themes`` + ``stories``).

    Returns:
        ``{"version", "normalization", "docs": [...], "index": {token: [doc_idx,...]}}``.
    """
    theme_labels = {t["id"]: t.get("label", {}) for t in catalog.get("themes", [])}
    docs: list[dict] = []
    postings: dict[str, set[int]] = {}

    for i, story in enumerate(catalog.get("stories", [])):
        docs.append({k: story.get(k) for k in _DOC_FIELDS})

        texts: list[str] = []
        for field in ("title", "subtitle"):
            texts += list((story.get(field) or {}).values())
        texts += [str(k) for k in (story.get("keywords") or [])]
        texts.append(story.get("category", ""))
        for theme in story.get("themes", []) or []:
            texts.append(theme)
            texts += list(theme_labels.get(theme, {}).values())

        tokens: set[str] = set()
        for t in texts:
            tokens.update(arabic.tokenize(str(t)))
        for tok in tokens:
            postings.setdefault(tok, set()).add(i)

    index = {tok: sorted(idxs) for tok, idxs in sorted(postings.items())}
    return {
        "version": catalog.get("version"),
        "normalization": "strip-harakat+unify-alef-ta_marbuta-alef_maqsura-hamza; NFKD-fold; lowercase",
        "docs": docs,
        "index": index,
    }
