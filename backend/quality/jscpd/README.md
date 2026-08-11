# jscpd — JavaScript / Node.js 22

`src/app.js`'s export route copy-pastes
`src/app.js::productsToCsv` instead of calling it — a real
anti-pattern, not manufactured filler.

Run from the repo root:
```
npx jscpd --min-lines 3 --min-tokens 20 --reporters console src/
```

Verified in this session — real output: 1 clone found, 3 duplicated
lines / 36 duplicated tokens.
