# TD_Migrationbridge_BE_nodejs_FE_reactjs_FE_angularjs

Framework Migration Bridge project type. Each branch = one real
Node.js backend doing route-based traffic splitting between a legacy
Angular app and a new React app, at a specific version combo.

## Branch naming

`migrationbridge_BE_nodejs<v>_FE_reactjs<v>_FE_angularjs<v>`

## Structure (per branch)

- `backend/` — real Express app that is the actual migration
  mechanism: `/legacy/*` is routed to the Angular app's static build,
  `/app/*` is routed to the React app's static build, and both apps
  share one API (`/api/widgets`). `/` reports live migration status.
  Carries the full 13 JavaScript tool-trigger fixtures (`quality/`).
- `frontend-react/` — the **new app**, built with `vite build
  --base=/app/` so its own asset paths are pre-scoped to the `/app/`
  mount point the backend serves it under. Fetches `/api/widgets`.
- `frontend-angular/` — the **legacy app**, `<base href="/legacy/">`
  and `outputHashing: "none"` set so its asset paths are pre-scoped to
  the `/legacy/` mount point. Fetches `/api/widgets`. Carries the full
  21 TypeScript tool-trigger fixtures (`quality/`).

Both frontends' production builds are copied into `backend/app-static/`
and `backend/legacy-static/` respectively — the backend then serves
each one under its own path. Verified live: `GET /legacy/` returns the
Angular bundle (title "Legacy App (Angular)"), `GET /app/` returns the
React bundle (title "Migration Bridge — New App (React)"), and both
bundles genuinely reference `/api/widgets` in their compiled JS.

Every module is independently `npm install`-able and builds for real —
that's the verification bar, not full test-suite depth per branch.

## Why route-splitting, not iframe or Web Components

This project type models an in-progress framework migration, not a
composed UI. A real incremental migration moves route-by-route from an
old framework to a new one behind a single origin, with both stacks
live simultaneously — that's exactly what `backend/src/app.js` does:
one Express app, two static mounts, one shared API. No client-side
composition (iframe, custom elements) is needed or appropriate here —
the split happens at the server's routing layer, which is what
distinguishes this architecture from the Micro-Frontend Platform
project type (which composes both frontends together on one page).

## Version caveat

Angular versions here (16/17/18/19) are Angular's own real major
versions. The 21 TypeScript tool fixtures were adapted from this
session's existing TypeScript-version-labeled fixture set (a different,
pre-existing labeling scheme tied to TypeScript's own version, not
Angular's) — same version-label substitution approach used throughout
this session where a real donor at the exact target version didn't
exist. Each `quality/<tool>/trigger.yaml` documents its donor.
