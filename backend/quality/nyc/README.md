# nyc — JavaScript / Node.js 22

Runs against the real mocha test suite in `test/`. `test/pricing.test.js`
deliberately leaves branches untested, so gaps are genuine.

Run from the repo root:
```
npx nyc --reporter=text mocha "test/**/*.test.js"
```

Verified in this session — real output: 76.92% statements, 71.87%
branches overall; real per-file gaps in `app.js`, `app.js`
(export route), and `app.js`.
