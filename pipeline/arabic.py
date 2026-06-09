"""Arabic-aware text normalization for the search index.

Search must match across diacritics, spelling variants and transliterations
(e.g. "Madinah" / "Medina" / "المدينة" / "المدينه"). Normalization runs once at
build time so it is deterministic and shared by every client.

Codepoints are written as \\u escapes (not pasted glyphs) so the rules are
unambiguous and encoding-independent.
"""

from __future__ import annotations

import re
import unicodedata

# Arabic diacritics / Quranic annotation marks + tatweel, by codepoint range.
_HARAKAT_RANGES = [
    (0x0610, 0x061A),  # Arabic signs (sallallahu alayhi wassallam, etc.)
    (0x064B, 0x065F),  # tanwin, harakat, sukun, shadda, extra marks
    (0x0670, 0x0670),  # superscript alef
    (0x06D6, 0x06DC),  # small high Quranic marks
    (0x06DF, 0x06E8),  # small high/low marks
    (0x06EA, 0x06ED),  # empty centre / low marks
    (0x0640, 0x0640),  # tatweel (kashida)
]
_HARAKAT = re.compile(
    "[" + "".join(f"\\u{lo:04x}-\\u{hi:04x}" for lo, hi in _HARAKAT_RANGES) + "]"
)

# Orthographic letter-form unifications (variants that should compare equal).
_LETTER_MAP = {
    "أ": "ا", "إ": "ا", "آ": "ا", "ٱ": "ا",  # أ إ آ ٱ -> ا
    "ة": "ه",  # ة (ta marbuta) -> ه
    "ى": "ي",  # ى (alef maqsura) -> ي
    "ؤ": "و",  # ؤ -> و
    "ئ": "ي",  # ئ -> ي
}
_TRANS = str.maketrans(_LETTER_MAP)

# A token: a run of word chars (Latin/digits) or characters in the Arabic block.
_TOKEN_RE = re.compile(r"[\w؀-ۿ]+", re.UNICODE)


def normalize(text: str) -> str:
    """Normalize a string for indexing/matching.

    Arabic: strips harakat/tatweel and unifies alef, ta-marbuta, alef-maqsura and
    hamza-bearing forms. Latin: NFKD-folds accents and lowercases.

    Args:
        text: Raw input text (any script).

    Returns:
        The normalized, case-folded, diacritic-free string.
    """
    if not text:
        return ""
    text = _HARAKAT.sub("", text)
    text = text.translate(_TRANS)
    text = "".join(c for c in unicodedata.normalize("NFKD", text) if not unicodedata.combining(c))
    return text.lower().strip()


def tokenize(text: str) -> list[str]:
    """Normalize then split text into search tokens (length >= 2).

    Args:
        text: Raw input text.

    Returns:
        A list of normalized tokens.
    """
    return [t for t in _TOKEN_RE.findall(normalize(text)) if len(t) >= 2]
