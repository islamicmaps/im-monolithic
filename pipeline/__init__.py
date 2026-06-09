"""islamicmaps.org content build pipeline.

Turns AI-authored, schema-validated JSON content into lean, CDN-ready delivery
artifacts (self-contained story bundles, an offline search index, GeoJSON/PMTiles
geometry and a 3D-model manifest), each emitted plain + gzip + brotli.

Run as a module from the repo root:

    python3 -m pipeline.build              # validate + compile -> dist/
    python3 -m pipeline.build --validate-only
    python3 -m pipeline.publish            # print (dry-run) S3 + CloudFront commands
"""

__version__ = "0.1.0"
