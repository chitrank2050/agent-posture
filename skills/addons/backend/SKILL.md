---
name: backend-addon
version: 1.0.0
description: Specialized rigor for backend, systems, and database engineering.
extends: core-posture
author: chitrank
---

# Backend Engineering Addon

Apply this skill for any task involving APIs, Databases, Concurrency, or Infrastructure.

## 1. EXPLAIN-First Data Design (V2, V8)

- No schema change ships without a primary query plan (`EXPLAIN`).
- All foreign keys must have indexes.
- All sortable columns must have indexes (S2).

## 2. Atomic Mutations (V1, V7)

- **Check-then-act is a cardinal sin.** Use atomic upserts (`ON CONFLICT`), conditional updates, or database-level constraints (V1).
- Idempotency is default for write endpoints (V7, S10).

## 3. Runtime Coherence (V4)

- **Resource Lifecycle:** Every resource acquired (socket, timer, connection) must have an explicit release path (V4).
- **Backpressure & Timeouts:** Every external call has a timeout and a retry strategy with jitter.
- **Graceful Degradation:** Handle partial failures (DB down, Kafka slow) without crashing the entire process.

## 4. Observability (S8)

- **Correlation IDs (S8):** Propagate IDs across every process boundary.
- **Metric-Ready:** Name the counters/histograms for every interesting operation even if not yet exported.

## 5. Algorithmic Rigor (V2, S3)

- **Math-First (S3):** Reach for closed-form identities or optimal asymptotic structures (O(log n) over O(n)) for critical paths.
- **Asymptotic Awareness (V2):** Name the Big-O complexity of any new helper function.
