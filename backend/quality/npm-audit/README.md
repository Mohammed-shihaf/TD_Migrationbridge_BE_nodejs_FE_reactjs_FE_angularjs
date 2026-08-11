# npm-audit — JavaScript / Node.js 22

Scans the real `package.json`/`package-lock.json`. `lodash@4.17.15` is
intentionally pinned old (same CVE used across this repo's other npm-audit
fixtures) as a genuine direct dependency.

Run from the repo root:
```
npm audit --json
```

Verified in this session — real output: `lodash` high-severity command
injection (GHSA-35jh-r3h4-6jhm), plus an unplanned transitive moderate
finding via nyc's `istanbul-lib-processinfo` dependency — a genuine
bonus finding, not staged.
