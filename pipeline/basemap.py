"""Copy a pre-built Protomaps PMTiles basemap into ``dist/basemap/``.

The basemap file is large (tens to hundreds of MB) and is built out-of-band
from a Protomaps planet build via ``pmtiles extract --bbox ... --maxzoom ...``.
We do NOT regenerate it on every pipeline.build (would require downloading
~100 GB from build.protomaps.com); instead we expect a pre-built file at one
of a few well-known locations and copy it into the dist tree for deploy.

Search order, first hit wins:
  1. The path in the ``IMAPS_BASEMAP_PMTILES`` env var, if set.
  2. ``~/.cache/imaps/basemap-hijaz.pmtiles`` (the recommended cache spot).
  3. ``/tmp/pmtiles-work/hijaz-z14.pmtiles`` (the path the dev script uses).

If none exist, the step is a no-op with a printed warning — the client
falls back to the MapLibre demo style.
"""

from __future__ import annotations

import os
import shutil
from pathlib import Path


CANDIDATE_PATHS = [
    "~/.cache/imaps/basemap-hijaz.pmtiles",
    "/tmp/pmtiles-work/hijaz-z14.pmtiles",
]


def find_source() -> Path | None:
    """Return the first existing basemap source file, or None if none found."""
    env = os.environ.get("IMAPS_BASEMAP_PMTILES")
    if env:
        p = Path(env).expanduser()
        if p.is_file():
            return p
    for c in CANDIDATE_PATHS:
        p = Path(c).expanduser()
        if p.is_file():
            return p
    return None


def copy_to_dist(dist: Path, name: str = "hijaz.pmtiles") -> tuple[bool, str]:
    """Copy the basemap PMTiles into ``dist/basemap/<name>``.

    Args:
        dist: Build output directory (e.g. ``dist/``).
        name: File name within ``dist/basemap/``.

    Returns:
        ``(ok, message)`` — ok=False with a reason when no source was found.
    """
    src = find_source()
    if src is None:
        return False, ("no basemap source — set IMAPS_BASEMAP_PMTILES or place "
                       "the file at ~/.cache/imaps/basemap-hijaz.pmtiles")
    out = dist / "basemap" / name
    out.parent.mkdir(parents=True, exist_ok=True)
    if out.exists() and out.stat().st_size == src.stat().st_size:
        return True, f"unchanged ({out})"
    shutil.copy2(src, out)
    return True, f"{src} -> {out} ({out.stat().st_size // (1024*1024)} MB)"
