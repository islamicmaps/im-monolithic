# Deep / semantic search API (serverless, online-only)

The one piece that needs a server. It complements the client's **offline** lexical
index with **full-text + semantic (vector)** search over the same content, behind a
platform-agnostic REST API that web and native share. The offline path keeps working
with no network; this augments it when online.

```
client ──POST /v1/search──▶ API Gateway (HTTP API) ──▶ Lambda ──┬─▶ Bedrock (embed query)
                                                                └─▶ S3 (download prebuilt
                                                                     index, kept warm in
                                                                     Lambda memory)
                                                                          ▲
                                                          one-time per container:
                                                          GET s3://bucket/search-index.json.gz
```

**Vector store: S3 + in-memory-vector Lambda.** OpenSearch Serverless was rejected
on idle-cost grounds (OCU minimum ~ hundreds USD/month). Here the index is a single
gzipped JSON file in S3; the Lambda downloads it once per container and serves
brute-force BM25 lexical + cosine k-NN semantic from process memory. Roughly **$0
at rest**, pay per request. Migration triggers (recorded for later): corpus
> ~500k docs, sustained > ~10k QPS, or features needing OpenSearch BM25-side
scoring (none currently planned).

## API contract

`POST /v1/search`
```json
{ "q": "prophet migration", "mode": "hybrid", "k": 10, "themes": ["seerah"], "locale": "en" }
```
`mode`: `lexical` | `semantic` | `hybrid` (default). Response (same hit schema the
offline client uses, so results merge by `id`):
```json
{ "query": "prophet migration", "mode": "hybrid", "count": 1,
  "hits": [ { "id": "hijra", "type": "story", "score": 0.81,
              "title": {"en":"The Hijra: Mecca to Medina"},
              "snippet": "…", "themes": ["seerah"], "url": "/stories/hijra.json" } ] }
```
`GET /v1/health` → `{"status":"ok"}`.

## Layout

- `infra/template.yaml` — SAM/CloudFormation: HTTP API + Lambda + S3 bucket
  (private, SSE-S3, versioned) + IAM (Bedrock InvokeModel + s3:GetObject on the bucket).
- `src/search/`
  - `handler.py` — HTTP API entry: parse, validate, CORS, 200/400/health/preflight.
  - `service.py` — query embedding (Bedrock, lazy), in-memory dispatch, hybrid RRF.
  - `store.py` — load gzipped JSON index from S3 (or local), BM25 lexical, cosine
    k-NN, theme/locale filters, container-cached.
  - `text.py` — extract searchable docs from `dist/` (multilingual incl. Arabic).
  - `indexer.py` — CI: embed dist/ content, gzip, upload to S3 (or `--out` local).
  - `config.py` — env config (`INDEX_BUCKET`, `INDEX_KEY`, `EMBED_MODEL`, …).
- `tests/test_search.py` — 34 assertions for the pure core (no AWS needed).

## Index artifact

A single gzipped JSON object at `s3://$INDEX_BUCKET/$INDEX_KEY`:

```json
{
  "model": "cohere.embed-multilingual-v3",
  "dim": 1024,
  "doc_count": 2,
  "docs": [
    {
      "id": "hijra", "type": "story",
      "title": {"en": "…", "ar": "…"}, "subtitle": {"en": "…"},
      "snippet": "…", "themes": ["seerah"], "languages": ["en", "ar"],
      "url": "/stories/hijra.json",
      "text": "concatenated multilingual text the embedding was built from",
      "embedding": [0.012, -0.034, …]
    }
  ]
}
```

For the launch corpus (a handful of stories) this is < 1 MB gzipped. Even at
10k docs × 1024-dim float32 (≈ 40 MB raw) it loads in well under a second
and all of search runs in single-digit ms.

## What's verified locally vs. needs AWS

Tested here (Python, against real `dist/` + injected fakes): document extraction
(multilingual incl. Arabic), indexer artifact build + gzip roundtrip, in-memory
BM25 + cosine k-NN, theme/locale filters, hybrid RRF, response shaping, the HTTP
handler (200/400/health/preflight/CORS). The Bedrock embed call (lazily imported)
and the S3 fetch (also lazy) need a deploy to exercise.

## Deploy

```bash
cd serverless
sam build -t infra/template.yaml
sam deploy --guided                     # uses samconfig.toml defaults

# one-time: enable the embedding model in Bedrock (console) for your region
```

Then publish the index. Take `IndexBucket` from the stack outputs:

```bash
# from serverless/src
INDEX_BUCKET=<output> INDEX_KEY=search-index.json.gz \
EMBED_MODEL=cohere.embed-multilingual-v3 EMBED_DIM=1024 \
PYTHONPATH=. python3 -m search.indexer --dist ../../dist
```

Re-run the indexer after each `pipeline.build` (it's the CI "embed + publish
search index" step from the architecture diagram).

For local dev / smoke tests without AWS:

```bash
PYTHONPATH=src python3 -m search.indexer --dist ../dist \
  --local-only --out /tmp/search-index.json.gz
INDEX_LOCAL=/tmp/search-index.json.gz python3 -c \
  "from search import service; print(service.search('hijra', mode='lexical'))"
```

## Test

```bash
python3 serverless/tests/test_search.py    # 34 assertions, no AWS
```

## Embedding model

Default `cohere.embed-multilingual-v3` (1024-dim) — strong for Arabic + en/ur/id/tr.
Swap via the `EmbedModel`/`EmbedDim` params (e.g. `amazon.titan-embed-text-v2:0`).
Keep `input_type=search_document` at index time and `search_query` at query time
(handled automatically).

## Cost — quick read

Per the architecture: ~$0 at rest, pay per request. At 1M searches/month:
API Gateway ≈ $1, Lambda invocations + compute (1 GB, ~150 ms) a few dollars,
query embeddings on Bedrock a few dollars, S3 GET (one per cold start) cents.
**No always-on minimum.** The OpenSearch SAM template stays out of the repo;
revisit if corpus / query load justifies it.

## Security

CORS `AllowedOrigin` defaults to `*` — set it to `https://islamicmaps.org` in prod.
The S3 bucket blocks all public access and is encrypted (SSE-S3) + versioned.
IAM is least-privilege: Bedrock `InvokeModel` + `s3:GetObject` on the index
bucket only.
