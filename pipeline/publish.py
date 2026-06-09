"""Publish step: sync ``dist/`` to S3 and invalidate CloudFront.

Default strategy uploads the PLAIN artifacts and relies on CloudFront's automatic
gzip/brotli compression at the edge (simplest; no Content-Encoding juggling). The
``.gz``/``.br`` siblings are kept for the alternative "upload pre-compressed" path.

This module prints the commands by default (dry run). Pass ``--execute`` with the
AWS CLI installed and ``IMAPS_BUCKET`` / ``IMAPS_DISTRIBUTION_ID`` set to run them.
"""

from __future__ import annotations

import argparse
import os
import shutil
import subprocess
import sys

from . import config


def build_commands(bucket: str, distribution_id: str, dist=config.DIST_DIR) -> list[str]:
    """Return the ordered shell commands to publish ``dist`` to S3 + CloudFront.

    Args:
        bucket: Target S3 bucket name.
        distribution_id: CloudFront distribution id (for invalidation).
        dist: Local build output directory.

    Returns:
        A list of command strings, in execution order.
    """
    s3 = f"s3://{bucket}"
    base = f'aws s3 sync "{dist}" {s3} --delete --exclude "*.gz" --exclude "*.br"'
    cmds = [
        # 1) Long-lived content (everything except the frequently-changing catalog).
        f'{base} --exclude "catalog.json" --cache-control "public, max-age=86400, stale-while-revalidate=604800"',
        # 2) PMTiles need an explicit content-type.
        f'aws s3 cp "{dist}/geometry" {s3}/geometry --recursive --exclude "*" --include "*.pmtiles" '
        f'--content-type application/vnd.pmtiles --cache-control "public, max-age=86400"',
        # 3) The catalog: short TTL, fetched first.
        f'aws s3 cp "{dist}/catalog.json" {s3}/catalog.json '
        f'--cache-control "public, max-age=300, stale-while-revalidate=86400"',
        # 4) Invalidate only the short-lived paths.
        f'aws cloudfront create-invalidation --distribution-id {distribution_id} '
        f'--paths "/catalog.json" "/search/*"',
    ]
    return cmds


def main(argv: list[str] | None = None) -> int:
    """CLI entry point for the publish step.

    Args:
        argv: Optional argument vector (defaults to ``sys.argv``).

    Returns:
        Process exit code.
    """
    ap = argparse.ArgumentParser(description="Publish dist/ to S3 + CloudFront")
    ap.add_argument("--execute", action="store_true", help="actually run the commands (default: dry run)")
    args = ap.parse_args(argv)

    bucket = os.environ.get("IMAPS_BUCKET", "<IMAPS_BUCKET>")
    dist_id = os.environ.get("IMAPS_DISTRIBUTION_ID", "<IMAPS_DISTRIBUTION_ID>")
    cmds = build_commands(bucket, dist_id)

    print("# Publish plan (dist/ -> S3 -> CloudFront):\n")
    for c in cmds:
        print(c, "\n")

    if not args.execute:
        print("# Dry run. Re-run with --execute (needs AWS CLI + IMAPS_BUCKET + IMAPS_DISTRIBUTION_ID).")
        return 0
    if shutil.which("aws") is None:
        print("ERROR: aws CLI not found on PATH.", file=sys.stderr)
        return 1
    if "<" in bucket or "<" in dist_id:
        print("ERROR: set IMAPS_BUCKET and IMAPS_DISTRIBUTION_ID.", file=sys.stderr)
        return 1
    for c in cmds:
        print(f"$ {c}")
        if subprocess.run(c, shell=True).returncode != 0:
            return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
