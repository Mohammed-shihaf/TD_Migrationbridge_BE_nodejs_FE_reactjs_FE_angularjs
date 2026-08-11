# eslint-plugin-sonarjs — JavaScript / Node.js 22

Loaded in `.eslintrc.json`, scanning `src/app.js`'s real Express setup.

Run from the repo root:
```
npx eslint src/
```

Verified in this session — real output: genuinely flagged
`sonarjs/x-powered-by` (real Express header-disclosure smell) under
`plugin:sonarjs/recommended-legacy`; reports clean under the current
`plugin:sonarjs/recommended` config.
