# SOC 2 Compliance Declaration

**Framework version:** SOC 2 Type II — Trust Services Criteria (TSC 2017, as revised 2022)

## Trust Services Criteria mapped to this repository

| Criterion | Control implemented in this repo |
|---|---|
| CC6.1 (Logical access) | `backend` exposes only `/health`, `/build-info`, `/legacy/*`, `/app/*` — no unauthenticated write endpoints |
| CC6.6 (Vulnerability management) | `quality/npm-audit` and `quality/eslint-plugin-security` fixtures run dependency and static-analysis security scans |
| CC7.1 (Change detection) | Every branch commit carries a webpack `DefinePlugin`-injected `__BUILD_TIME__` / `__GIT_BRANCH__`, queryable at `GET /build-info`, so a deployed artifact's provenance is always verifiable |
| CC7.2 (Monitoring) | `GET /health` provides a real liveness signal, wired into `infra/k8s-deployment.yaml`'s `readinessProbe` |
| A1.2 (Availability — infrastructure) | `infra/Dockerfile`, `infra/k8s-deployment.yaml`, and `infra/main.tf` define the deployable/reproducible infrastructure for this service |

This declaration covers the backend service in this branch (`migrationbridge_BE_nodejs20_FE_reactjs22_FE_angularjs18`). It is a repository-level control mapping, not an attestation issued by an auditor.
