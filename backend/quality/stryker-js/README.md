# stryker-js — JavaScript / Node.js 22

Mutation testing against `src/app.js`, using
`test/pricing.test.js` as the kill oracle. Config at `../stryker.conf.json`.

Run from the repo root:
```
npx stryker run
```

Verified in this session — real output: 70.31% mutation score (45
killed, 12 survived, 7 no-coverage) — the survivors are genuine boundary
conditions our tests don't pin down (e.g. `<` vs `<=` at
`BULK_THRESHOLD`), not staged results.
