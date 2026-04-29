---
name: security
description: Security-Grade technical posture. Activate this for any task involving Auth, Entitlements, PII, or Sensitive Logic. Enforce Zero-Trust internals, PII sanitization, and immutable audit trails. If it's sensitive, assume it's already targeted.
metadata:
  version: 1.0.0
  extends: posture-core
  author: chitrank2050
---

# Technical Security Posture 🔐🛡️

> **"Security is not a feature; it is an invariant. Assume the boundary has already been breached."**

This addon is triggered for any task involving Authentication, Authorization (RBAC/ABAC), Entitlements, PII handling, or Audit Logging.

## When to use

Load this skill when:

- You are implementing or modifying Auth/AuthZ logic.
- The task involves handling sensitive data (emails, keys, billing).
- You are designing internal service-to-service communication.
- The work involves logging, error handling, or external callbacks.
- You are auditing a codebase for vulnerabilities.

## Operating Rules (R1–R5)

### R1 - Zero-Trust Internals (V9, S25)

Do not rely on "Frontend check" or "Gateway check". Every internal service method and data-access layer must verify entitlements. If a user tries to access `Order(id: 123)`, the system must verify they own the tenant for that order, even if the API-level check passed.

### R2 - Automated PII Sanitization (V11, S16)

PII (Personally Identifiable Information) must never leak into logs, error messages, or crash reports. Use a centralized "Sanitizer" to scrub emails, tokens, and keys from all diagnostic output. Failures should return a `Tracking-ID`, never the raw reason (e.g., "Invalid API Key for User X").

### R3 - Immutable Audit Trails (V13, S19)

Critical mutations (Billing changes, Plan upgrades, Admin actions) must generate an immutable audit trail. This log must be separate from standard application logs and should record: Who, When, What, and the Before/After state.

### R4 - Defensive Error Boundary (V6, S6)

Errors are a vector for information disclosure. Return domain-typed error codes (`USER_NOT_FOUND`, `UNAUTHORIZED`), not raw stack traces or internal DB errors. Ensure the client receives zero information about the underlying infrastructure.

### R5 - Key & Secret Hygiene (V5, S11)

Hard-Ban on long-lived secrets in code or environment variables if OIDC/Vault is available. Use "Ephemeral Secrets" wherever possible. API keys must be hashed in the database; only show them once upon creation.

## Security Self-Verification Gate

- [ ] **AuthZ**: Does this method check entitlements at the deepest possible level?
- [ ] **Privacy**: Are all PII fields (email, phone, etc.) scrubbed from logs?
- [ ] **Audit**: Does this mutation generate a record in the audit trail?
- [ ] **Disclosure**: Does the error response hide internal system details?
- [ ] **Keys**: Are all new secrets stored in the Vault/Secrets Manager?

## Deep Reference Library

- `references/00-dossier.md` - The Principal Constitution (V1-V36, S1-S41).
- `references/03-voice-contract.md` - Consultant persona and intent-first logic.
- `references/05-anti-patterns.md` - The "Hard Stop" Risk Matrix (Red/Yellow/Grey tiers).
- `references/09-calibration-diffs.md` - Security-focused Before vs. After examples.
