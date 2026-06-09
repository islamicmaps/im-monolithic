"""Tests for the render/AWS-agnostic search core, against the real dist/ and fakes.

    python3 serverless/tests/test_search.py

No boto3 / AWS needed: embed + S3 fetch are injected; the in-memory store is
exercised directly against the documents the indexer would produce.
"""

import json
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parent / "src"))

from search import service, handler, text, indexer, store  # noqa: E402

DIST = HERE.parent.parent / "dist"


def _load_dist():
    catalog = json.loads((DIST / "catalog.json").read_text("utf-8"))
    stories = [json.loads(p.read_text("utf-8"))
               for p in sorted((DIST / "stories").glob("*.json"))]
    return catalog, stories


passed = failed = 0


def ok(name, cond):
    global passed, failed
    if cond:
        passed += 1
        print("  ok  ", name)
    else:
        failed += 1
        print("  FAIL", name)


# --- text extraction against real built content ---
catalog, stories = _load_dist()
docs = {d["id"]: d for d in text.extract_documents(catalog, stories)}
ok("extract: two story docs", set(docs) == {"hijra", "umrah-steps"})
ok("extract: hijra text has key terms", all(w in docs["hijra"]["text"] for w in ["Hijra", "Mecca", "Medina"]))
ok("extract: umrah text has ritual terms", all(w in docs["umrah-steps"]["text"] for w in ["Umrah", "Tawaf", "Kaaba"]))
ok("extract: themes + url carried", docs["hijra"]["themes"] == ["seerah"] and docs["hijra"]["url"].endswith("hijra.json"))
ok("extract: arabic present in text", "الهجرة" in docs["hijra"]["text"])

# --- indexer doc building (pure, fake embedder) ---
fake_vec = lambda t, input_type="x": [0.1, 0.2, 0.3, 0.4]  # noqa: E731
idx_docs = indexer.build_index_docs(catalog, stories, fake_vec)
ok("indexer: embeds every doc", len(idx_docs) == 2 and all(len(d["embedding"]) == 4 for d in idx_docs))
artifact = indexer.build_artifact(catalog, stories, fake_vec, model="fake", dim=4)
ok("indexer: artifact carries model+dim+count",
   artifact["model"] == "fake" and artifact["dim"] == 4 and artifact["doc_count"] == 2)
encoded = indexer.encode_artifact(artifact)
ok("indexer: encoded as gzip", encoded[:2] == b"\x1f\x8b")
roundtrip = store._read_payload(encoded)
ok("indexer: gzip roundtrip preserves docs",
   {d["id"] for d in roundtrip["docs"]} == {"hijra", "umrah-steps"})

# --- store: load + lexical (BM25) + semantic (cosine) over real content ---
# Build an Index with deterministic per-doc vectors so semantic ordering is testable.
docs_for_index = []
for i, d in enumerate(idx_docs):
    v = [0.0, 0.0]
    v[i] = 1.0
    docs_for_index.append({**d, "embedding": v})
idx = store.parse_index({"model": "fake", "dim": 2, "docs": docs_for_index})

lex_hits = store.lexical_search(idx, "tawaf kaaba", k=10)
ok("store lexical: hits umrah first", lex_hits and lex_hits[0]["id"] == "umrah-steps")
ok("store lexical: returns public schema (no embedding/text leaked)",
   "embedding" not in lex_hits[0] and "text" not in lex_hits[0])

lex_hijra = store.lexical_search(idx, "Mecca Medina", k=10)
ok("store lexical: hijra wins for Mecca/Medina", lex_hijra and lex_hijra[0]["id"] == "hijra")

# Arabic normalization (no harakat in doc, none in query, but variants/case fold should work).
lex_ar = store.lexical_search(idx, "الهجرة", k=10)
ok("store lexical: arabic query matches hijra", lex_ar and lex_ar[0]["id"] == "hijra")

# Semantic: query vector aligned to doc 0 should return doc 0 first.
sem0 = store.semantic_search(idx, [1.0, 0.0], k=10)
sem1 = store.semantic_search(idx, [0.0, 1.0], k=10)
ok("store semantic: cosine ranks aligned doc first",
   sem0[0]["id"] == docs_for_index[0]["id"] and sem1[0]["id"] == docs_for_index[1]["id"])

# Filters: theme intersection + locale match.
filt_hits = store.lexical_search(idx, "Mecca Medina", k=10, themes=["seerah"])
ok("store filter: theme keeps hijra", {h["id"] for h in filt_hits} == {"hijra"})
filt_none = store.lexical_search(idx, "Mecca Medina", k=10, themes=["does-not-exist"])
ok("store filter: unknown theme empties result", filt_none == [])

# load_index from a local file written by the indexer (round-trip).
tmp = HERE / "_test-index.json.gz"
tmp.write_bytes(encoded)
loaded = store.load_index(local=str(tmp))
ok("store load_index: local file path", len(loaded.docs) == 2)
tmp.unlink()


# --- search orchestration (service layer) with injected embed + index ---
calls = {"embed": 0}


def fake_embed(t, input_type="search_query"):
    calls["embed"] += 1
    # Bias the query embedding toward whichever doc's text contains the query.
    return [1.0, 0.0] if "mecca" in t.lower() or "medina" in t.lower() else [0.0, 1.0]


res_hyb = service.search("tawaf", mode="hybrid", k=10, embed_fn=fake_embed, index=idx)
ok("search hybrid: mode + count", res_hyb["mode"] == "hybrid" and res_hyb["count"] >= 1)
ok("search hybrid: embeds the query", calls["embed"] == 1)
ok("search hybrid: returns both stories",
   {h["id"] for h in res_hyb["hits"]} == {"hijra", "umrah-steps"})

res_lex = service.search("medina", mode="lexical", embed_fn=fake_embed, index=idx)
ok("search lexical: no embedding call", calls["embed"] == 1)  # unchanged
ok("search lexical: hijra wins", res_lex["hits"][0]["id"] == "hijra")

res_sem = service.search("mecca migration", mode="semantic", embed_fn=fake_embed, index=idx)
ok("search semantic: embeds query", calls["embed"] == 2)
ok("search semantic: aligned doc first", res_sem["hits"][0]["id"] == "hijra")

# RRF merge (pure).
merged = service.rrf_merge([[{"id": "a"}, {"id": "b"}], [{"id": "b"}, {"id": "c"}]], 10)
ok("rrf: shared id ranks first", merged[0]["id"] == "b")
ok("rrf: union of ids", {h["id"] for h in merged} == {"a", "b", "c"})


# --- handler (HTTP API event parsing + responses, fake search) ---
def fake_search(q, **kw):
    return {"query": q, "mode": kw.get("mode"), "count": 1, "hits": [{"id": "hijra"}]}


ev_post = {"requestContext": {"http": {"method": "POST", "path": "/v1/search"}},
           "body": json.dumps({"q": "medina", "mode": "semantic"})}
r = handler.lambda_handler(ev_post, search_fn=fake_search)
body = json.loads(r["body"])
ok("handler: 200 on valid query", r["statusCode"] == 200 and body["hits"][0]["id"] == "hijra")
ok("handler: CORS header present", "access-control-allow-origin" in r["headers"])
ok("handler: passes mode through", body["mode"] == "semantic")

r_missing = handler.lambda_handler(
    {"requestContext": {"http": {"method": "POST", "path": "/v1/search"}}, "body": "{}"},
    search_fn=fake_search,
)
ok("handler: 400 when q missing", r_missing["statusCode"] == 400)

r_badmode = handler.lambda_handler(
    {"requestContext": {"http": {"method": "POST", "path": "/v1/search"}},
     "body": json.dumps({"q": "x", "mode": "nope"})},
    search_fn=fake_search,
)
ok("handler: 400 on bad mode", r_badmode["statusCode"] == 400)

r_health = handler.lambda_handler(
    {"requestContext": {"http": {"method": "GET", "path": "/v1/health"}}},
    search_fn=fake_search,
)
ok("handler: health 200",
   r_health["statusCode"] == 200 and json.loads(r_health["body"]) == {"status": "ok"})

r_opt = handler.lambda_handler(
    {"requestContext": {"http": {"method": "OPTIONS", "path": "/v1/search"}}},
    search_fn=fake_search,
)
ok("handler: OPTIONS preflight 204", r_opt["statusCode"] == 204)

parsed = handler.parse_event({
    "requestContext": {"http": {"method": "POST", "path": "/v1/search"}},
    "queryStringParameters": {"themes": "seerah,hajj"},
    "body": json.dumps({"q": "x"}),
})
ok("parse_event: themes csv -> list", parsed["params"]["themes"] == ["seerah", "hajj"])

print(f"\n{passed} passed, {failed} failed")
sys.exit(1 if failed else 0)
