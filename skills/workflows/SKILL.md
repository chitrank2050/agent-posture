---
name: posture-workflows
version: 1.0.0
description: Principal Engineering rigor for CI/CD, GitHub Actions, and Secure Automation.
extends: posture-core
author: chitrank2050
---

# Secure Workflows Addon 🏗️🛡️

> **"A workflow is production code that runs as root. Treat it with extreme caution."**

This addon is triggered for any task involving GitHub Actions, CI/CD pipelines, Release Orchestration (V15), or Security Hardening (V9). It extends the Core Posture with automation rigor.

## When to use

Load this skill when:

- You are creating or modifying `.github/workflows/*.yml`.
- The task involves setting up OIDC, secrets, or identity providers.
- You are configuring release automation (git-cliff, semver, tagging).
- The work requires SLSA or Supply Chain security attestations.
- You are optimizing build speeds, caching, or matrix strategies.

## Operating Rules (R1–R5)

### R1 - Least Privilege & Identity (V9, V16, S25)

Never use long-lived GitHub Secrets if OIDC (OpenID Connect) is available. Every job MUST have an explicit `permissions:` block. Use the narrowest possible scope (e.g., `contents: read` instead of `contents: write` unless tagging/releasing).

### R2 - Runner Hardening & Immutable Actions (V9, V15, S26)

Untrusted egress is a Tier 1 Risk. All workflows MUST include a "Harden Runner" step (e.g., `step-security/harden-runner`) with an `egress-policy: audit`. **Mandatory:** All actions MUST be pinned by a full-length **COMMIT SHA** (e.g., `uses: actions/checkout@8d3c...`). Version tags (e.g., `@v4`) are a **Tier 1 Anti-Pattern**.

### R3 - Supply Chain Integrity (V5, V10, V27)

Automate the logic of truth. Use **SLSA Build Provenance** for all releases. Artifacts MUST be signed. Use `google/osv-scanner-action` (pinned by SHA) for automated vulnerability detection in dependencies. No "Big Bang" releases; use a two-phase Release (Prepare -> Finalize) to allow for human verification of the changelog.

### R4 - Efficiency & Feedback Loops (V10, V14, S1)

CI is a bottleneck. Implement granular `pnpm` or `npm` caching. Use matrix builds or parallel local execution (via background processes) to maximize CPU utility. Fail-fast using `timeout-minutes` (never leave it at default). Ensure every failure has a clear, actionable log annotation.

### R5 - Infrastructure-as-Workflow (V4, V15)

Workflows are declarative infrastructure. Treat `.yml` files with the same linting and validation rigor as TypeScript. Use `workflow-lint` to catch common security and syntax errors before pushing to `main`.

## Self-Verification Gate

Before submitting a workflow change, you must pass this gate:

- [ ] **Identity**: Does every job have a scoped `permissions:` block?
- [ ] **Security**: Are all actions pinned by **SHA**? Is Harden Runner included?
- [ ] **Vulnerability**: Is `osv-scanner` integrated into the pipeline?
- [ ] **Resilience**: Are `timeout-minutes` and `concurrency` groups defined?
- [ ] **V15 Check**: If this is a release workflow, is there a rollback or fail-fast path?
