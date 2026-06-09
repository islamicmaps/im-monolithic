"""API Gateway (HTTP API v2) Lambda entry point for `/v1/search` and `/v1/health`.

Parses the request, validates, delegates to :func:`service.search`, and returns a
CORS-enabled JSON response. `search_fn` is injectable for testing without AWS.
"""

from __future__ import annotations

import base64
import json

from . import config, service


def _resp(status: int, body=None) -> dict:
    """Build an HTTP API response with CORS headers.

    Args:
        status: HTTP status code.
        body: JSON-serializable body, or None for an empty body.

    Returns:
        An API Gateway proxy response dict.
    """
    return {
        "statusCode": status,
        "headers": {
            "content-type": "application/json; charset=utf-8",
            "access-control-allow-origin": config.ALLOWED_ORIGIN,
            "access-control-allow-headers": "content-type",
            "access-control-allow-methods": "GET,POST,OPTIONS",
        },
        "body": "" if body is None else json.dumps(body, ensure_ascii=False),
    }


def parse_event(event: dict) -> dict:
    """Extract method, path and search params from an HTTP API v2 event.

    Args:
        event: The Lambda event.

    Returns:
        ``{method, path, params:{q, mode, k, themes, locale}}``.
    """
    http = (event.get("requestContext") or {}).get("http") or {}
    method = http.get("method") or event.get("httpMethod") or "GET"
    path = http.get("path") or event.get("rawPath") or "/"
    qs = event.get("queryStringParameters") or {}

    body = {}
    raw = event.get("body")
    if raw:
        if event.get("isBase64Encoded"):
            raw = base64.b64decode(raw).decode("utf-8")
        try:
            body = json.loads(raw)
        except (ValueError, TypeError):
            body = {}

    themes = body.get("themes")
    if themes is None and qs.get("themes"):
        themes = [t for t in qs["themes"].split(",") if t]

    return {
        "method": method,
        "path": path,
        "params": {
            "q": (body.get("q") or qs.get("q") or "").strip(),
            "mode": body.get("mode") or qs.get("mode") or "hybrid",
            "k": int(body.get("k") or qs.get("k") or config.DEFAULT_K),
            "themes": themes or [],
            "locale": body.get("locale") or qs.get("locale"),
        },
    }


def lambda_handler(event, context=None, *, search_fn=None):
    """Lambda entry point.

    Args:
        event: HTTP API v2 event.
        context: Lambda context (unused).
        search_fn: Injected search function (defaults to :func:`service.search`).

    Returns:
        An API Gateway proxy response.
    """
    search_fn = search_fn or service.search
    try:
        req = parse_event(event)
        if req["method"] == "OPTIONS":
            return _resp(204)
        if req["path"].endswith("/health"):
            return _resp(200, {"status": "ok"})
        p = req["params"]
        if not p["q"]:
            raise ValueError("missing required parameter 'q'")
        if p["mode"] not in ("lexical", "semantic", "hybrid"):
            raise ValueError("mode must be lexical|semantic|hybrid")
        result = search_fn(p["q"], mode=p["mode"], k=p["k"], themes=p["themes"], locale=p["locale"])
        return _resp(200, result)
    except ValueError as e:
        return _resp(400, {"error": str(e)})
    except Exception as e:  # pragma: no cover - defensive
        return _resp(500, {"error": "internal", "detail": str(e)})
