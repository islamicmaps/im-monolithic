"""Indexer: read built content from `dist/`, embed it, and publish a single
gzipped JSON artifact to S3 (or write it locally for dev/tests).

The Lambda then downloads that artifact once per container and serves search
from memory (see :mod:`store`).

    INDEX_BUCKET=islamicmaps-search-index INDEX_KEY=search-index.json.gz \\
      EMBED_MODEL=cohere.embed-multilingual-v3 EMBED_DIM=1024 \\
      python3 -m search.indexer --dist ../../dist

Document extraction and the embedded-doc construction are pure (tested with a
fake embedder); the AWS calls are lazy.
"""

from __future__ import annotations

import argparse
import gzip
import io
import json
import sys
from pathlib import Path

from . import config, service
from .text import extract_documents


def load_dist(dist: Path) -> tuple[dict, list[dict]]:
    """Load the catalog and all story bundles from a `dist/` directory.

    Args:
        dist: Path to the build output.

    Returns:
        ``(catalog, story_bundles)``.
    """
    catalog = json.loads((dist / "catalog.json").read_text("utf-8"))
    stories = [json.loads(p.read_text("utf-8"))
               for p in sorted((dist / "stories").glob("*.json"))]
    return catalog, stories


def build_index_docs(catalog: dict, stories: list[dict], embed_fn) -> list[dict]:
    """Build embedded documents ready for indexing.

    Args:
        catalog: Catalog manifest.
        stories: Story bundles.
        embed_fn: Embedder ``(text, input_type) -> vector`` (injected for testing).

    Returns:
        List of documents (each includes an `embedding`).
    """
    docs = []
    for d in extract_documents(catalog, stories):
        vec = embed_fn(d["text"], input_type="search_document")
        docs.append({**d, "embedding": vec})
    return docs


def build_artifact(catalog: dict, stories: list[dict], embed_fn,
                   model: str | None = None, dim: int | None = None) -> dict:
    """Build the full index payload (model + dim + docs).

    Args:
        catalog: Catalog manifest.
        stories: Story bundles.
        embed_fn: Embedder.
        model: Embedding model id (defaults to ``config.EMBED_MODEL``).
        dim: Embedding dimensionality (defaults to ``config.EMBED_DIM``).

    Returns:
        The artifact dict ready to JSON-encode.
    """
    docs = build_index_docs(catalog, stories, embed_fn)
    return {
        "model": model or config.EMBED_MODEL,
        "dim": dim or config.EMBED_DIM,
        "doc_count": len(docs),
        "docs": docs,
    }


def encode_artifact(payload: dict) -> bytes:
    """Serialize the artifact to gzipped JSON bytes."""
    raw = json.dumps(payload, ensure_ascii=False).encode("utf-8")
    buf = io.BytesIO()
    with gzip.GzipFile(fileobj=buf, mode="wb", mtime=0) as gz:
        gz.write(raw)
    return buf.getvalue()


def write_local(path: Path, body: bytes) -> int:
    """Write the artifact to a local file. Returns bytes written."""
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_bytes(body)
    return len(body)


def write_s3(bucket: str, key: str, body: bytes, s3_client=None) -> int:
    """Upload the artifact to S3. Returns bytes written."""
    if s3_client is None:
        import boto3
        s3_client = boto3.client("s3", region_name=config.AWS_REGION)
    s3_client.put_object(
        Bucket=bucket, Key=key, Body=body,
        ContentType="application/json",
        ContentEncoding="gzip",
        CacheControl="no-cache",
    )
    return len(body)


def main(argv=None) -> int:
    """CLI entry: embed `dist/` content and publish the index artifact.

    Args:
        argv: Optional argv.

    Returns:
        Process exit code.
    """
    ap = argparse.ArgumentParser(
        description="Embed dist/ content and publish the search index artifact"
    )
    ap.add_argument("--dist", type=Path, default=Path("../../dist"))
    ap.add_argument("--bucket", default=config.INDEX_BUCKET,
                    help="S3 bucket (defaults to $INDEX_BUCKET)")
    ap.add_argument("--key", default=config.INDEX_KEY,
                    help="S3 key (defaults to $INDEX_KEY)")
    ap.add_argument("--out", type=Path,
                    help="Also (or only) write the artifact to this local path")
    ap.add_argument("--local-only", action="store_true",
                    help="Skip S3 upload; requires --out")
    args = ap.parse_args(argv)

    if args.local_only and not args.out:
        print("ERROR: --local-only requires --out PATH", file=sys.stderr)
        return 1
    if not args.local_only and not args.bucket:
        print("ERROR: set --bucket or $INDEX_BUCKET (or use --local-only --out PATH).",
              file=sys.stderr)
        return 1

    catalog, stories = load_dist(args.dist)
    payload = build_artifact(catalog, stories, service.embed)
    body = encode_artifact(payload)

    written: list[str] = []
    if args.out:
        n = write_local(args.out, body)
        written.append(f"local {args.out} ({n} bytes)")
    if not args.local_only:
        n = write_s3(args.bucket, args.key, body)
        written.append(f"s3://{args.bucket}/{args.key} ({n} bytes)")

    print(f"Indexed {payload['doc_count']} document(s) → " + ", ".join(written))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
