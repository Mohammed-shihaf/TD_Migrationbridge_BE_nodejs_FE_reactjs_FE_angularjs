#!/usr/bin/env bash
# Requires bash >= 4.0 (uses associative arrays)
set -euo pipefail

if ((BASH_VERSINFO[0] < 4)); then
  echo "This script requires bash >= 4.0 (found ${BASH_VERSION})" >&2
  exit 1
fi

declare -A MODULES=(
  [backend]="npm install && npm run build"
  [frontend-react]="npm install && npm run build"
  [frontend-angular]="npm install && npx ng build"
)

root_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

for module in "${!MODULES[@]}"; do
  echo ">>> setting up ${module}"
  (cd "${root_dir}/${module}" && eval "${MODULES[$module]}")
done

echo "All modules built."
