"""islamicmaps.org deep/semantic search — serverless, online-only.

Complements the client's offline lexical index: this path adds full-text + vector
(semantic) search over the same content, behind the platform-agnostic REST API.
Backend = a gzipped JSON index in S3, downloaded into Lambda memory once per
container; lexical = BM25, semantic = cosine k-NN. AWS SDK imports are lazy so
the pure logic (extraction, BM25 / cosine, RRF merge, response shaping) imports
and tests without boto3 installed.
"""

__version__ = "0.2.0"
