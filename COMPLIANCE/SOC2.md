# SOC 2 Compliance Declaration

**Framework version:** SOC 2 Type II — Trust Services Criteria (TSC 2017, as revised 2022)

## Trust Services Criteria mapped to this repository

| Criterion | Control implemented in this repo |
|---|---|
| CC6.1 (Logical access) | `migrationbridge-backend` exposes only its documented read/API endpoints - no unauthenticated write surface |
| CC6.6 (Vulnerability management) | `quality/npm-audit` and `quality/eslint-plugin-security` fixtures run dependency and static-analysis security scans |
| CC7.1 (Change detection) | Branch = `migrationbridge_BE_nodejs24_FE_reactjs20_FE_angularjs18`, Node.js 24.x - version and provenance are pinned per branch |
| CC7.2 (Monitoring) | `GET /health` provides a real liveness signal, wired into `infra/k8s-deployment.yaml`'s `readinessProbe` |
| A1.2 (Availability — infrastructure) | `infra/Dockerfile`, `infra/k8s-deployment.yaml`, and `infra/main.tf` define the deployable/reproducible infrastructure for this service |

This declaration covers the backend service in this branch (`migrationbridge_BE_nodejs24_FE_reactjs20_FE_angularjs18`). It is a repository-level control mapping, not an attestation issued by an auditor.
