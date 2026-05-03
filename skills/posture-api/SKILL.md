---
name: posture-api
description: API-Grade technical posture. Activate this for any task involving REST, GraphQL, OpenAPI, or Bruno collections. Enforce Contract-First design, response normalization, and idempotency keys. If it's a boundary, it must be stable and versioned.
metadata:
  version: 1.0.1
  extends: posture-core
  author: chitrank2050
---

# Technical API Posture 🔌🛰️

> **"An API is a forever-contract. The code is just a realization of the specification."**

This addon is triggered for any task involving API design, Contract definitions, External Integrations, or Response structures.

## When to use

Load this skill when:

- You are designing or implementing a new API endpoint.
- The task involves updating Bruno collections or OpenAPI specs.
- You are integrating with 3rd party webhooks or callbacks.
- The work involves error-envelope design or versioning.
- You are optimizing for network resilience and retries.

## Operating Rules (R1–R5)

### R1 - Contract-First Sovereignty (V2, V30, S18)

The contract precedes the implementation. Define the endpoint in **Bruno** or **OpenAPI** before writing the controller. Verify that the request/response payloads match the "Business Truth" of the domain.

### R2 - Response Normalization (S6, S9)

Zero "Random" JSON structures. Every response must follow a standard envelope:

```json
{
  "status": "success | error",
  "data": { ... },
  "error": { "code": "...", "message": "...", "id": "..." }
}
```

Use HTTP status codes correctly (201 for Created, 202 for Accepted, 409 for Conflict).

### R3 - Idempotency for Mutations (V7, S14)

Network failures are common. All `POST` and `PATCH` operations that perform state changes (e.g., `createOrder`) must support an **Idempotency-Key** header. The system must recognize duplicate requests within a 24h window and return the original response without re-executing logic.

### R4 - Resource-Oriented Versioning (V1, S20)

Prefer URL-based versioning (`/v1/...`) or Header-based versioning for major breaking changes. Minor additions must be backward compatible. Never remove a field; deprecate it with a `Warning` header first.

### R5 - Rate Limiting & Quota Awareness (V4, S15)

An API is a shared resource. Every endpoint must have a defined rate limit (Global + Per-Tenant). Use 429 (Too Many Requests) with a `Retry-After` header. For bulk operations, implement asynchronous job patterns instead of long-lived requests.

## API Self-Verification Gate

- [ ] **Contract**: Does this implementation exactly match the Bruno/OpenAPI spec?
- [ ] **Envelope**: Is the response wrapped in the standard status/data/error envelope?
- [ ] **Idempotency**: Does this mutation support an Idempotency-Key?
- [ ] **Status**: Are the HTTP status codes semantically correct?
- [ ] **Resilience**: Is there a rate-limit applied to this endpoint?

## Deep Reference Library

- `../posture-core/references/00-dossier.md` - The Principal Constitution (V1-V36, S1-S41).
- `../posture-core/references/02-pr-anatomy.md` - API-first PR templates and communication.
- `../posture-core/references/04-toolchain-registry.md` - Concept-to-Instance dictionary.
- `../posture-core/references/09-calibration-diffs.md` - API-design Before vs. After examples.
