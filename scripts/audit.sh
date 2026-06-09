#!/usr/bin/env bash
# Lighthouse audit of https://app.islamicmaps.org/.
#
# Runs the mobile profile by default (the harder bar), or pass --desktop /
# --both. Writes JSON + HTML reports to docs/lighthouse/<profile>.{json,html}
# and prints the four category scores so they're easy to grep / compare.
#
# Usage:
#   ./scripts/audit.sh                       # mobile (default)
#   ./scripts/audit.sh --desktop
#   ./scripts/audit.sh --both
#   ./scripts/audit.sh --url https://app.example.test/    # alternate target
#   ./scripts/audit.sh --runs 5 --median    # 5 runs, take the median per metric
#
# Requires: node + npx (lighthouse@12 is fetched on first run, cached after).

set -euo pipefail

PROFILE="mobile"
URL="https://app.islamicmaps.org/"
RUNS=1
MEDIAN=0
for a in "$@"; do
  case "$a" in
    --mobile)  PROFILE="mobile" ;;
    --desktop) PROFILE="desktop" ;;
    --both)    PROFILE="both" ;;
    --url=*)   URL="${a#--url=}" ;;
    --url)     shift; URL="$1" ;;  # not robust; users mostly pass --url=...
    --runs=*)  RUNS="${a#--runs=}" ;;
    --median)  MEDIAN=1 ;;
    -h|--help)
      sed -n '2,/^$/p' "$0" | sed 's/^# \?//'
      exit 0 ;;
    *) echo "unknown arg: $a" >&2; exit 2 ;;
  esac
done

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/docs/lighthouse"
mkdir -p "$OUT"

run_one() {  # profile  out-prefix
  local prof="$1" out="$2"
  local args=("$URL"
    "--chrome-flags=--headless=new --no-sandbox"
    "--output" "json"
    "--output" "html"
    "--output-path" "$out"
    "--only-categories=performance,accessibility,best-practices,seo"
    "--quiet")
  if [[ "$prof" == "desktop" ]]; then
    args+=("--preset=desktop")
  else
    args+=("--form-factor=mobile")
  fi
  npx -y lighthouse@12 "${args[@]}"
}

read_scores() {  # path-without-extension  ->  prints "perf acc bp seo"
  python3 - "$1" <<'PY'
import json, sys
d = json.load(open(sys.argv[1] + ".report.json"))
cats = d["categories"]
def v(k):
    s = cats.get(k, {}).get("score")
    return f"{int(s*100):3d}" if s is not None else "  —"
print(v("performance"), v("accessibility"), v("best-practices"), v("seo"))
PY
}

read_metrics() {  # path-without-extension  ->  prints "fcp lcp tbt cls si"
  python3 - "$1" <<'PY'
import json, sys
d = json.load(open(sys.argv[1] + ".report.json"))
a = d["audits"]
def v(k): return a.get(k, {}).get("displayValue", "")
print(v("first-contentful-paint"), "|", v("largest-contentful-paint"), "|",
      v("total-blocking-time"), "|", v("cumulative-layout-shift"), "|",
      v("speed-index"))
PY
}

audit_profile() {  # profile
  local prof="$1"
  local out="$OUT/$prof"
  if [[ $RUNS -gt 1 ]]; then
    echo ""
    echo "[$prof] running $RUNS times..."
    local i
    local perfs=()
    for i in $(seq 1 "$RUNS"); do
      run_one "$prof" "${out}-run$i" >/dev/null
      printf "  run%d: " "$i"
      read_scores "${out}-run$i"
    done
    # If --median, pick the run with the median perf score and copy it as the
    # canonical out path; this keeps the report diff-friendly.
    if [[ $MEDIAN -eq 1 ]]; then
      python3 - <<PY
import json, shutil, os
runs = []
for i in range(1, $RUNS + 1):
    p = "${out}-run" + str(i)
    perf = json.load(open(p + ".report.json"))["categories"]["performance"]["score"]
    runs.append((perf, i))
runs.sort()
mid = runs[len(runs)//2][1]
shutil.copy(f"${out}-run{mid}.report.json", "${out}.report.json")
shutil.copy(f"${out}-run{mid}.report.html", "${out}.report.html")
print(f"[$prof] median run = {mid}, perf = {int(runs[len(runs)//2][0]*100)}")
PY
    fi
  else
    run_one "$prof" "$out" >/dev/null
    echo ""
    echo "[$prof]"
  fi
  printf "  perf acc bp seo: "
  read_scores "$out"
  printf "  fcp | lcp | tbt | cls | si: "
  read_metrics "$out"
  echo "  reports: $out.report.{json,html}"
}

case "$PROFILE" in
  both)
    audit_profile mobile
    audit_profile desktop ;;
  *)
    audit_profile "$PROFILE" ;;
esac
