"""Story bundling: resolve a story's transitive references into one payload.

The content model is normalized (small docs linked by id). For delivery we inline
every document a story transitively references into a single self-contained bundle,
so the client makes ONE request per story instead of many round trips — the right
trade-off on slow/metered connections.
"""

from __future__ import annotations

from . import loader


def bundle_story(story: dict, id_index: dict[str, dict]) -> tuple[dict, list[str]]:
    """Resolve all documents a story transitively references into a ``_refs`` map.

    Args:
        story: The story document.
        id_index: ``"type:id"`` -> document, from :func:`loader.build_id_index`.

    Returns:
        ``(bundle, dangling)`` where ``bundle`` is the story plus a ``_refs`` dict of
        ``"type:id"`` -> document, and ``dangling`` lists refs that did not resolve.
    """
    refs: dict[str, dict] = {}
    dangling: list[str] = []
    seen: set[str] = set()
    queue: list[str] = list(loader.iter_refs(story))

    while queue:
        ref = queue.pop()
        if ref in seen:
            continue
        seen.add(ref)
        doc = id_index.get(ref)
        if doc is None:
            dangling.append(ref)
            continue
        refs[ref] = doc
        queue.extend(loader.iter_refs(doc))

    bundle = dict(story)
    bundle["_refs"] = dict(sorted(refs.items()))
    return bundle, sorted(dangling)
