---
name: posture-testing
version: 1.0.0
description: Quality-Grade technical posture. Activate this for any task involving Vitest, Playwright, E2E, or Coverage. Enforce Integration-First logic, Production-Parity environments, and mandatory edge-case coverage. If it's not tested, it's broken by design.
extends: posture-core
author: chitrank2050
---

# Technical Testing Posture 🧪🏗️

> **"Tests are not documentation; they are the executable guardrails of the architecture."**

This addon is triggered for any task involving Unit, Integration, or E2E tests, CI verification, or Coverage auditing.

## When to use

Load this skill when:

- You are writing new tests (Vitest, Playwright).
- The task involves fixing a bug (Test-First required).
- You are optimizing the CI test pipeline.
- You are auditing test coverage for a mission-critical module.
- The work involves mocking, spying, or environment orchestration.

## Operating Rules (R1–R5)

### R1 - Integration-First Philosophy (V1, S1, S5)

Unit tests are for logic; Integration tests are for reality. Prioritize testing the boundaries between modules (e.g., Service -> DB, Controller -> Service). A passing unit test for a broken SQL query is a failure of posture.

### R2 - Production-Parity (V20, S20)

Integration and E2E tests MUST run against real infrastructure clones (e.g., Docker-based PostgreSQL, Redis) instead of mocks. Mocks are for 3rd-party APIs only. If the DB behavior differs between test and prod, the test is invalid.

### R3 - Mandatory Edge-Case Coverage (V7, S6, S14)

The "Happy Path" is the baseline. 80% of test logic should focus on the "Unfiltered Reality": network timeouts, database deadlocks, validation failures, and unauthorized attempts. If a function can throw, there must be a test for it.

### R4 - Test-First Restoration (V8, S21)

Every bug fix MUST start with a failing test that reproduces the issue. This prevents regressions and establishes the "Ground Truth" of the fix. Never submit a fix without its reproductive test.

### R5 - Flake-Zero Resilience (V4, S1)

A flaky test is worse than no test. Avoid `sleep()` or arbitrary timeouts; use polling and "Eventually" assertions. Tests must be isolated and capable of running in parallel without side effects on shared state.

## Testing Self-Verification Gate

- [ ] **Boundary**: Does this test a real integration (e.g., DB call) or just a mock?
- [ ] **Parity**: Is the test running against a production-mirror environment?
- [ ] **Edges**: Are there tests for at least 3 failure scenarios (timeout, validation, 403)?
- [ ] **Reproduction**: If this is a fix, is there a test that failed before the code change?
- [ ] **Resilience**: Are there any non-deterministic `sleep` calls?

## Deep Reference Library

- `references/00-dossier.md` - The Principal Constitution (V1-V36, S1-S41).
- `references/06-the-canon.md` - The Intellectual Compass (Testing theory).
- `references/08-principal-mindset.md` - Confidence-based rule precedence.
- `references/09-calibration-diffs.md` - 12 high-density Before vs. After examples.
