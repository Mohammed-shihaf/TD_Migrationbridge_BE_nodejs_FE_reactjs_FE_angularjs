#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"
npx jscpd --languages typescript --min-lines 5 --min-tokens 50 --reporters console,json .
