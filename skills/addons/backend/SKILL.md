---
name: backend-addon
version: 1.0.1
description: Specialized rigor for backend, systems, and database engineering.
extends: core-posture
author: chitrank
---

# Backend Engineering Addon

This addon is triggered for any task involving APIs, Databases, Concurrency, or Infrastructure (V4). It extends the Core Posture with systems-level rigor.

## 1. EXPLAIN-First Data Design (V2, V8, S17)

- **Primary Query Plan:** No schema change or complex query ships without a primary query plan (`EXPLAIN ANALYZE`).
- **Index Integrity:** All foreign keys must have indexes. All sortable columns must have indexes (S2).
- **Index Bloat:** Avoid redundant indexes. Use composite indexes only when the prefix is frequently used in filters.

## 2. Atomic & Transactional Integrity (V1, V7, S19)

- **The "Check-then-Act" Sin:** Never check existence in the application layer if the DB can handle it (V1). Reach for `ON CONFLICT`, `upsert`, or `UNIQUE` constraints.
- **Transaction Boundaries (S19):** Multi-table mutations MUST be wrapped in a database transaction.
- **Idempotency Keys (S10):** Every write-operation (POST/PUT) must support a client-provided `Idempotency-Key` to safely handle retries (V7).

## 3. Distributed Systems & Observability (V4, S8, S13)

- **Correlation Propagation (S8):** Propagate the `X-Correlation-ID` across every internal service call, database span, and message queue payload.
- **Backpressure & Timeouts:** Every external call (HTTP/gRPC) must have a timeout and a jittered retry strategy (S14).
- **Circuit Breakers (S15):** Stop calling failing dependencies. Implement "Fail-Fast" behavior when a downstream service is saturated.

## 4. Runtime Coherence & Resource Lifecycle (V4, V14)

- **Leaked Resources:** Every acquired resource (socket, file handle, DB connection) must have an explicit `finally` or `using` release block.
- **Bounded In-Memory State (V14):** Any in-memory cache, buffer, or array that grows with request volume must have a TTL and a maximum entry count.
- **Graceful Shutdown:** Implement handlers for `SIGTERM`/`SIGINT`. Drain active requests and close DB pools before exiting.

## 5. Algorithmic & Asymptotic Rigor (V2, S3)

- **O(n) at the Border:** Never perform O(n^2) logic on inputs provided by the client. Use `Map` or `Set` for deduplication/lookup (S1).
- **Stream over Buffer:** For large payloads (files, big JSON), use Streams or Iterators to prevent OOM (Out-Of-Memory) crashes.

## 6. The Canon (Backend Context)

Anchor your logic in these specifics (Ref 06):

- **Schemas:** Kleppmann (DDIA) - Reliability & Maintainability.
- **APIs:** Richardson Maturity Model - Aim for Level 3 (HATEOAS) principles where appropriate.
- **Concurrency:** Herlihy - Linearizability and atomicity.

**Protocol:** If the existing backend code violates these (e.g., sequential Awaits in a loop), flag it as a **Tier 1 Anti-Pattern** before refactoring.
