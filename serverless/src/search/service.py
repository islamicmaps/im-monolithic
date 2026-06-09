"""Search orchestration: query embedding (Bedrock), in-memory store dispatch,
hybrid RRF merge, response shaping.

Backend = S3-prebuilt index loaded into Lambda memory (see :mod:`store`).
The pure helpers (`rrf_merge`, `search` with injected callables) are unit-tested
without AWS; `embed` lazily imports boto3 so the module loads without it.
"""

from __future__ import annotations

import json

from . import config, store


# ----------------------------- pure helpers --------------------------------

def rrf_merge(lists: list[list[dict]], limit: int, k_const: int = 60) -> list[dict]:
    """Reciprocal Rank Fusion of several ranked hit lists (for hybrid search).

    Args:
        lists: Ranked hit lists (each in the public hit schema).
        limit: Max results to return.
        k_const: RRF constant (smoothing).

    Returns:
        A single de-duplicated (by id) list, ranked by fused score.
    """
    scores: dict[str, float] = {}
    chosen: dict[str, dict] = {}
    for hits in lists:
        for rank, hit in enumerate(hits):
            hid = hit.get("id")
            if hid is None:
                continue
            scores[hid] = scores.get(hid, 0.0) + 1.0 / (k_const + rank)
            chosen.setdefault(hid, hit)
    ranked = sorted(scores.items(), key=lambda kv: kv[1], reverse=True)
    return [{**chosen[hid], "score": round(score, 6)} for hid, score in ranked[:limit]]


# ----------------------------- AWS-backed embed ----------------------------
#
# Lazy boto3 import so the pure core stays testable without AWS deps. In the
# Lambda runtime (SnapStart enabled), the first cold start eagerly creates
# the Bedrock client and that client is included in the snapshot, so SnapStart-
# restored containers skip the ~200-400 ms boto3 + auth-resolver startup tax.

_bedrock_client = None


def _bedrock():
    """Return a process-cached Bedrock Runtime client (lazy boto3 import)."""
    global _bedrock_client
    if _bedrock_client is None:
        import boto3
        _bedrock_client = boto3.client("bedrock-runtime", region_name=config.AWS_REGION)
    return _bedrock_client


def embed(text: str, input_type: str = "search_query", client=None) -> list[float]:
    """Embed `text` with the configured Bedrock model.

    Supports Cohere (`texts`/`input_type`) and Titan (`inputText`) response shapes.

    Args:
        text: Text to embed.
        input_type: "search_query" or "search_document" (Cohere only).
        client: Optional Bedrock client (for reuse/testing).

    Returns:
        The embedding vector.
    """
    client = client or _bedrock()
    model = config.EMBED_MODEL
    if model.startswith("cohere."):
        body = {"texts": [text], "input_type": input_type, "truncate": "END"}
    else:
        body = {"inputText": text}
    resp = client.invoke_model(modelId=model, body=json.dumps(body))
    payload = json.loads(resp["body"].read())
    return payload["embeddings"][0] if "embeddings" in payload else payload["embedding"]


# ----------------------------- search dispatch ----------------------------

def search(q, mode="hybrid", k=None, themes=None, locale=None,
           *, embed_fn=None, index=None) -> dict:
    """Execute a search.

    Args:
        q: Query string.
        mode: "lexical" | "semantic" | "hybrid".
        k: Max hits (defaults to ``config.DEFAULT_K``).
        themes: Optional theme-id filter.
        locale: Optional locale filter.
        embed_fn: Injected embedder (defaults to :func:`embed`).
        index: Injected :class:`store.Index` (defaults to ``store.get_index()``).

    Returns:
        ``{query, mode, count, hits}`` — same hit schema the offline client uses.
    """
    k = k or config.DEFAULT_K
    embed_fn = embed_fn or embed
    idx = index if index is not None else store.get_index()

    if mode == "lexical":
        hits = store.lexical_search(idx, q, k, themes=themes, locale=locale)
    elif mode == "semantic":
        vec = embed_fn(q, input_type="search_query")
        hits = store.semantic_search(idx, vec, k, themes=themes, locale=locale)
    else:
        mode = "hybrid"
        lex = store.lexical_search(idx, q, k, themes=themes, locale=locale)
        vec = embed_fn(q, input_type="search_query")
        sem = store.semantic_search(idx, vec, k, themes=themes, locale=locale)
        hits = rrf_merge([lex, sem], k)

    return {"query": q, "mode": mode, "count": len(hits), "hits": hits}
