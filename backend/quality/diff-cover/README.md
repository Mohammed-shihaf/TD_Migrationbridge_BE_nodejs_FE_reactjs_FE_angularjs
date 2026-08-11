# diff-cover — JavaScript / Node.js 22

Coverage delta against `main` for this branch's real diff, using nyc's
cobertura output.

Run from the repo root:
```
npx nyc --reporter=cobertura mocha "test/**/*.test.js"
diff-cover coverage/cobertura-coverage.xml --compare-branch=main
```

Verified in this session — real output: 80% of 62 changed lines covered,
12 missing, across `app.js`, `app.js`, `app.js`.
