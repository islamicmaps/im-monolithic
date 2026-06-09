"""Environment-driven configuration for the search Lambda + indexer."""

from __future__ import annotations

import os

#: S3 bucket holding the prebuilt search index artifact (one JSON file with all
#: documents + their embeddings). Injected by the SAM stack.
INDEX_BUCKET = os.environ.get("INDEX_BUCKET", "")
#: S3 key for the index artifact. Gzipped JSON (server-side decoded by the loader).
INDEX_KEY = os.environ.get("INDEX_KEY", "search-index.json.gz")
#: Optional local path to the index file (used by tests / offline indexer runs).
INDEX_LOCAL = os.environ.get("INDEX_LOCAL", "")
#: AWS region.
AWS_REGION = os.environ.get("AWS_REGION", "us-east-1")

#: Bedrock embedding model. Default is multilingual (good for Arabic + en/ur/id/tr).
EMBED_MODEL = os.environ.get("EMBED_MODEL", "cohere.embed-multilingual-v3")
#: Embedding dimensionality (must match the model + the index).
EMBED_DIM = int(os.environ.get("EMBED_DIM", "1024"))

#: Default number of hits to return.
DEFAULT_K = int(os.environ.get("DEFAULT_K", "10"))
#: CORS allow-origin (set to your site in production).
ALLOWED_ORIGIN = os.environ.get("ALLOWED_ORIGIN", "*")
