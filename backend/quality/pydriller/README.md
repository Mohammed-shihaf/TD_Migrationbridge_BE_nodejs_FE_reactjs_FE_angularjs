# pydriller — JavaScript / Node.js 22

Mines this repo's own real git commit history — pydriller is a Python
tool regardless of the target language, so it's invoked from the repo
root, not from inside `backend/`.

Run from the repo root:
```
python -c "from pydriller import Repository; [print(c.hash) for c in Repository('.').traverse_commits()]"
```

Verified in this session — real output: genuine commit hashes from this
repo's actual history.
