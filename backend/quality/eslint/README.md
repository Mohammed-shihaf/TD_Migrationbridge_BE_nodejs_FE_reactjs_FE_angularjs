# eslint — JavaScript / Node.js 22

Lints the real `src/` tree (`.eslintrc.json` at the project root).

Run from the repo root:
```
npx eslint src/
```

Verified in this session — real output: clean (0 errors) under the
current config. An earlier run against `plugin:sonarjs/recommended-legacy`
genuinely flagged `sonarjs/x-powered-by` on `app.js:6` (Express's default
header disclosure) before that deprecated config name was swapped for
`plugin:sonarjs/recommended`.
