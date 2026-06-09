"""Artifact writing with compression.

Every JSON artifact is written three ways: plain (canonical, minified, UTF-8 with
Arabic kept readable), gzip (.gz, universal), and brotli (.br, best ratio). The
plain file is what you normally upload — CloudFront compresses at the edge — but
the pre-compressed siblings let you upload with ``Content-Encoding`` if preferred,
and their sizes prove the over-the-wire cost.
"""

from __future__ import annotations

import gzip
import json
from pathlib import Path

try:
    import brotli  # type: ignore
    HAVE_BROTLI = True
except ImportError:  # pragma: no cover - environment dependent
    HAVE_BROTLI = False


def encode(obj) -> bytes:
    """Serialize ``obj`` to canonical, minified UTF-8 JSON (Arabic left readable).

    Args:
        obj: JSON-serializable value.

    Returns:
        The encoded bytes.
    """
    return json.dumps(obj, ensure_ascii=False, separators=(",", ":"), sort_keys=False).encode("utf-8")


def write_json(obj, path: Path) -> dict[str, int]:
    """Write ``obj`` as plain JSON plus ``.gz`` and (if available) ``.br`` siblings.

    Args:
        obj: JSON-serializable value.
        path: Destination ``.json`` path (parent dirs are created).

    Returns:
        Size dict ``{"raw":, "gz":, "br":}`` in bytes (``br`` == ``gz`` if brotli absent).
    """
    path.parent.mkdir(parents=True, exist_ok=True)
    data = encode(obj)
    path.write_bytes(data)

    gz = gzip.compress(data, compresslevel=9, mtime=0)
    path.with_name(path.name + ".gz").write_bytes(gz)

    if HAVE_BROTLI:
        br = brotli.compress(data, quality=11)
        path.with_name(path.name + ".br").write_bytes(br)
        br_size = len(br)
    else:
        br_size = len(gz)

    return {"raw": len(data), "gz": len(gz), "br": br_size}
