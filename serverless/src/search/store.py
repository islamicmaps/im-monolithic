"""In-memory document + vector store, backed by a single JSON artifact in S3.

The Lambda loads `search-index.json(.gz)` once per container and keeps it in
process memory. Search is a brute-force scan: BM25-lite for lexical, cosine
similarity for semantic. The corpus is small (catalog-scale, < 100k docs), so
this is sub-millisecond even at 1024-dim embeddings.

Document shape (one entry per row in `docs`):
    {id, type, title, subtitle, snippet, themes, languages, url, text, embedding}

Pure helpers (`_tokenize`, `_filter_docs`, `lexical_search`, `semantic_search`)
have no AWS dependency; `load_index` lazily imports boto3 only when needed.
"""

from __future__ import annotations

import gzip
import io
import json
import math
import re
import unicodedata
from pathlib import Path

from . import config


# ---------------------------- normalization -------------------------------
# Mirrors pipeline/arabic.py so query tokens match index tokens. Kept inline
# to avoid importing the build pipeline into the Lambda.

_HARAKAT_RANGES = [
    (0x0610, 0x061A), (0x064B, 0x065F), (0x0670, 0x0670),
    (0x06D6, 0x06DC), (0x06DF, 0x06E8), (0x06EA, 0x06ED),
    (0x0640, 0x0640),
]
_HARAKAT = re.compile(
    "[" + "".join(f"\\u{lo:04x}-\\u{hi:04x}" for lo, hi in _HARAKAT_RANGES) + "]"
)
_LETTER_MAP = {"أ": "ا", "إ": "ا", "آ": "ا", "ٱ": "ا",
               "ة": "ه", "ى": "ي", "ؤ": "و", "ئ": "ي"}
_TRANS = str.maketrans(_LETTER_MAP)
_TOKEN_RE = re.compile(r"[\w؀-ۿ]+", re.UNICODE)


def _normalize(text: str) -> str:
    if not text:
        return ""
    text = _HARAKAT.sub("", text)
    text = text.translate(_TRANS)
    text = "".join(c for c in unicodedata.normalize("NFKD", text)
                   if not unicodedata.combining(c))
    return text.lower().strip()


def _tokenize(text: str) -> list[str]:
    """Normalize and split into search tokens (length >= 2)."""
    return [t for t in _TOKEN_RE.findall(_normalize(text)) if len(t) >= 2]


# ---------------------------- index loading -------------------------------

class Index:
    """Loaded index: list of documents + lazy precomputed lexical/vector tables."""

    def __init__(self, docs: list[dict], dim: int | None = None, model: str | None = None):
        self.docs = docs
        self.dim = dim
        self.model = model
        self._lex_built = False
        self._vec_built = False
        # populated lazily:
        self._tokens: list[list[str]] = []      # per-doc token list
        self._tf: list[dict[str, int]] = []     # per-doc term frequency
        self._df: dict[str, int] = {}           # document frequency per term
        self._dl: list[int] = []                # per-doc length
        self._avgdl: float = 0.0
        self._vec_norm: list[list[float]] = []  # per-doc unit-norm embedding

    def _build_lexical(self) -> None:
        if self._lex_built:
            return
        n = len(self.docs)
        self._tokens = [[] for _ in range(n)]
        self._tf = [{} for _ in range(n)]
        self._df = {}
        self._dl = [0] * n
        for i, d in enumerate(self.docs):
            text = " ".join(filter(None, [
                d.get("text") or "",
                _join_localized(d.get("title")),
                _join_localized(d.get("subtitle")),
                d.get("snippet") or "",
            ]))
            toks = _tokenize(text)
            self._tokens[i] = toks
            self._dl[i] = len(toks)
            tf: dict[str, int] = {}
            for t in toks:
                tf[t] = tf.get(t, 0) + 1
            self._tf[i] = tf
            for term in tf:
                self._df[term] = self._df.get(term, 0) + 1
        self._avgdl = (sum(self._dl) / n) if n else 0.0
        self._lex_built = True

    def _build_vectors(self) -> None:
        if self._vec_built:
            return
        out: list[list[float]] = []
        for d in self.docs:
            v = d.get("embedding") or []
            n = math.sqrt(sum(x * x for x in v)) or 1.0
            out.append([x / n for x in v])
        self._vec_norm = out
        self._vec_built = True


def _join_localized(localized) -> str:
    if isinstance(localized, dict):
        return " ".join(str(v) for v in localized.values() if v)
    return ""


def parse_index(payload: dict) -> Index:
    """Build an :class:`Index` from a parsed JSON payload.

    Args:
        payload: ``{model, dim, docs: [...]}``.

    Returns:
        An :class:`Index` ready for searching.
    """
    return Index(
        docs=list(payload.get("docs", [])),
        dim=payload.get("dim"),
        model=payload.get("model"),
    )


def _read_payload(raw: bytes) -> dict:
    """Decode `raw` bytes (gzip-or-plain) into a JSON payload."""
    if raw[:2] == b"\x1f\x8b":
        raw = gzip.decompress(raw)
    return json.loads(raw.decode("utf-8"))


def load_index(*, bucket: str | None = None, key: str | None = None,
               local: str | None = None, s3_client=None) -> Index:
    """Load the index from S3 (default) or a local file (tests / dev).

    Args:
        bucket: S3 bucket name (defaults to ``config.INDEX_BUCKET``).
        key: S3 key (defaults to ``config.INDEX_KEY``).
        local: Local file path; if set, S3 is bypassed.
        s3_client: Optional boto3 S3 client (for reuse / testing).

    Returns:
        Loaded :class:`Index`.

    Raises:
        RuntimeError: if no source is configured.
    """
    local = local or config.INDEX_LOCAL
    if local:
        raw = Path(local).read_bytes()
        return parse_index(_read_payload(raw))
    bucket = bucket or config.INDEX_BUCKET
    key = key or config.INDEX_KEY
    if not bucket:
        raise RuntimeError("INDEX_BUCKET (or INDEX_LOCAL) must be configured")
    if s3_client is None:
        import boto3
        s3_client = boto3.client("s3", region_name=config.AWS_REGION)
    obj = s3_client.get_object(Bucket=bucket, Key=key)
    raw = obj["Body"].read()
    return parse_index(_read_payload(raw))


# ---------------------------- container cache -----------------------------
# One Index per Lambda execution context; warmed lazily on first request.

_cached: Index | None = None


def get_index(loader=None) -> Index:
    """Return the process-cached :class:`Index`, loading it on first call.

    Args:
        loader: Optional callable returning an :class:`Index` (for testing).

    Returns:
        The cached index.
    """
    global _cached
    if _cached is None:
        _cached = (loader or load_index)()
    return _cached


def reset_cache() -> None:
    """Drop the cached index (used by tests and after re-indexing)."""
    global _cached
    _cached = None


# ---------------------------- filters + search ----------------------------

def _matches_filters(doc: dict, themes=None, locale=None) -> bool:
    if themes:
        wanted = set(themes)
        if not wanted.intersection(doc.get("themes") or []):
            return False
    if locale:
        if locale not in (doc.get("languages") or []):
            return False
    return True


def _filter_docs(docs: list[dict], themes=None, locale=None) -> list[int]:
    """Return the list of doc indices passing the filter."""
    return [i for i, d in enumerate(docs) if _matches_filters(d, themes, locale)]


def _bm25(idx: Index, allowed: list[int], q_tokens: list[str],
          k1: float = 1.5, b: float = 0.75) -> list[tuple[int, float]]:
    """Score `allowed` docs for `q_tokens` using BM25. Returns (doc_idx, score)."""
    if not q_tokens or not allowed:
        return []
    n = len(idx.docs) or 1
    scored: list[tuple[int, float]] = []
    for i in allowed:
        tf = idx._tf[i]
        dl = idx._dl[i]
        score = 0.0
        for term in q_tokens:
            f = tf.get(term, 0)
            if not f:
                continue
            df = idx._df.get(term, 0)
            idf = math.log(1.0 + (n - df + 0.5) / (df + 0.5))
            denom = f + k1 * (1 - b + b * (dl / (idx._avgdl or 1.0)))
            score += idf * (f * (k1 + 1)) / (denom or 1.0)
        if score > 0:
            scored.append((i, score))
    scored.sort(key=lambda kv: kv[1], reverse=True)
    return scored


def lexical_search(idx: Index, q: str, k: int, themes=None, locale=None) -> list[dict]:
    """Lexical (BM25) search over the in-memory index.

    Args:
        idx: Loaded :class:`Index`.
        q: Query string.
        k: Max hits.
        themes: Optional theme-id filter.
        locale: Optional locale filter.

    Returns:
        Hit dicts in the public schema.
    """
    idx._build_lexical()
    allowed = _filter_docs(idx.docs, themes, locale)
    q_tokens = _tokenize(q)
    scored = _bm25(idx, allowed, q_tokens)[:k]
    return [_format_hit(idx.docs[i], score) for i, score in scored]


def semantic_search(idx: Index, vector: list[float], k: int,
                    themes=None, locale=None) -> list[dict]:
    """Cosine k-NN over the in-memory index.

    Args:
        idx: Loaded :class:`Index`.
        vector: Query embedding.
        k: Max hits.
        themes: Optional theme-id filter.
        locale: Optional locale filter.

    Returns:
        Hit dicts in the public schema.
    """
    idx._build_vectors()
    if not vector:
        return []
    norm = math.sqrt(sum(x * x for x in vector)) or 1.0
    qv = [x / norm for x in vector]
    allowed = _filter_docs(idx.docs, themes, locale)
    scored = []
    for i in allowed:
        dv = idx._vec_norm[i]
        if not dv:
            continue
        s = sum(a * b for a, b in zip(qv, dv))
        scored.append((i, s))
    scored.sort(key=lambda kv: kv[1], reverse=True)
    return [_format_hit(idx.docs[i], score) for i, score in scored[:k]]


def _format_hit(doc: dict, score: float) -> dict:
    """Project a stored doc onto the public hit schema (drops `text`/`embedding`)."""
    return {
        "id": doc.get("id"),
        "type": doc.get("type", "story"),
        "score": round(float(score), 6),
        "title": doc.get("title"),
        "subtitle": doc.get("subtitle"),
        "snippet": doc.get("snippet"),
        "themes": doc.get("themes", []),
        "url": doc.get("url"),
    }
