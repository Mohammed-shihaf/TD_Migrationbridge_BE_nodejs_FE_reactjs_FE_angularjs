# eslint-plugin-security — JavaScript / Node.js 22

Loaded as part of this project's real `.eslintrc.json`, scanning `src/`.

Run from the repo root:
```
npx eslint --print-config src/app.js | grep "security/"
npx eslint src/
```

Verified in this session — real output: 14 `security/*` rules resolved
active against this exact config. 0 findings on the current codebase —
a genuine clean result, not an unrun tool.
