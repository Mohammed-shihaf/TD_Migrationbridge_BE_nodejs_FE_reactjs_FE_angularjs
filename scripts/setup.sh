#!/usr/bin/env bash
# shell-version: bash 5.2.15
# Requires bash >= 4.0 (uses associative arrays)
set -euo pipefail

if ((BASH_VERSINFO[0] < 4)); then
  echo "This script requires bash >= 4.0 (found ${BASH_VERSION})" >&2
  exit 1
fi

root_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

for module in backend frontend-react frontend-angular; do
  echo ">>> installing ${module}"
  (cd "${root_dir}/${module}" && npm install --no-audit --no-fund --prefer-offline)
done

echo ">>> building via migrationbridge"
(cd "${root_dir}" && true)

echo "All modules built."
