"""Extract searchable documents from built content (the pipeline's `dist/`).

One document per story for now (chunking can be added later): all localized text
(title/subtitle/description), catalog keywords, step narration, info prose, and the
labels/names of referenced features/places — concatenated across locales so the
multilingual embedding model sees every language. Pure; no AWS, no I/O.
"""

from __future__ import annotations


def _values(localized) -> list[str]:
    """Return all locale values of a LocalizedString (or [] )."""
    if isinstance(localized, dict):
        return [str(v) for v in localized.values() if v]
    return []


def _truncate(s: str, n: int = 200) -> str:
    """Trim `s` to ~`n` chars on a word boundary."""
    s = " ".join(s.split())
    return s if len(s) <= n else s[: s.rfind(" ", 0, n)].rstrip() + "…"


def extract_documents(catalog: dict, stories: list[dict]) -> list[dict]:
    """Build one searchable document per story.

    Args:
        catalog: The catalog manifest (supplies url/keywords/themes/languages).
        stories: Story bundles (each with `playback`, `info`, `_refs`).

    Returns:
        List of dicts: ``{id, type, title, subtitle, themes, url, languages, text, snippet}``.
    """
    by_id = {s["id"]: s for s in catalog.get("stories", [])}
    docs: list[dict] = []

    for story in stories:
        sid = story.get("id")
        cat = by_id.get(sid, {})
        parts: list[str] = []
        parts += _values(story.get("title"))
        parts += _values(story.get("subtitle"))
        parts += _values(story.get("description"))
        parts += [str(k) for k in cat.get("keywords", [])]

        for step in (story.get("playback") or {}).get("steps", []):
            parts += _values(step.get("title"))
            parts += _values(step.get("narration"))

        for block in story.get("info", []):
            parts += _values(block.get("title"))
            parts += _values(block.get("body"))

        for ref, doc in (story.get("_refs") or {}).items():
            parts += _values(doc.get("label"))
            parts += _values(doc.get("names"))
            parts += _values(doc.get("title"))
            for block in doc.get("info", []):
                parts += _values(block.get("body"))

        desc = (story.get("description") or story.get("subtitle") or {})
        snippet = _truncate(desc.get("en") or next(iter(desc.values()), "") if isinstance(desc, dict) else "")

        docs.append({
            "id": sid,
            "type": "story",
            "title": story.get("title"),
            "subtitle": story.get("subtitle"),
            "themes": cat.get("themes") or story.get("themes") or [],
            "url": cat.get("url") or f"/stories/{sid}.json",
            "languages": cat.get("languages") or story.get("languages") or [],
            "text": " ".join(dict.fromkeys(p for p in parts if p)),  # dedupe, keep order
            "snippet": snippet,
        })
    return docs
