---
name: posture-backend
version: 1.0.0
description: Systems-Grade engineering posture. Activate this whenever a task touches APIs, Databases, Queues, or Distributed Systems. Enforce atomic mutations and jittered resilience even if the user didn't explicitly ask for them. If it runs on a server, use this skill.
extends: posture-core
author: chitrank2050
---

# Backend Engineering Addon

This addon is triggered for any task involving APIs, Databases, Concurrency, or Infrastructure (V4). It extends the Core Posture with systems-level rigor.

## When to use

Load this skill when:

- The task involves modifying database schemas, migrations, or indexing strategies.
- You are designing or extending public API surfaces (REST, GraphQL, gRPC).
- The work touches security-critical paths (Auth, Payments, PII handling).
- You are optimizing for performance (N+1 resolution, caching, concurrency).
- The task involves infrastructure-as-code or distributed system orchestration.

## Operating Rules (R1–R5)

### R1 - EXPLAIN-First Data Design (V2, V8, S17, S31, S36)

Schema, queries, and indexes ship together. No complex query ships without a primary query plan (`EXPLAIN ANALYZE`). Entities are modeled as a graph (V34); Adjacency patterns and traversal-aware indexes are architectural choices. Use Keyset pagination (S31) over offset.

### R2 - Atomic & Transactional Integrity (V1, V7, V10, S19)

Writes are born idempotent (V7). Check-then-act is a **Tier 1 Anti-Pattern** (V1); reach for `ON CONFLICT` or `upsert`. Multi-table mutations MUST be wrapped in a transaction (S19). Independent I/O fans out concurrently by default (V10).

### R3 - Distributed Systems & Observability (V4, S8, S13, S14, S15)

Propagate `X-Correlation-ID` (S8) across service boundaries. External calls (HTTP/gRPC) must have timeouts and jittered retries (S14). Implement Circuit Breakers (S15) to prevent cascading failures. Logs carry context (S16); Metrics are first-class.

### R4 - Runtime Coherence & Resource Lifecycle (V4, V14, V35)

Acquired resources (sockets, handles, pools) must have explicit `finally` or `using` blocks. Bounded in-memory state (V14) is mandatory. Implement graceful shutdown (`SIGTERM`) handlers to drain pools and active requests.

### R5 - Algorithmic & Asymptotic Rigor (V2, S1, S3)

O(n) at the border; O(n^2) is a hard stop for client-provided inputs. Reach for `Map`/`Set` (S1) for lookup/dedupe. Stream over Buffer for large payloads (S3) to prevent OOM.

## Backend Self-Verification Gate

1. **Queries** - Missing index on foreign key or sort column? N+1 pattern? (R1)
2. **Atomicity** - Transaction spanning network calls? Missing `Idempotency-Key`? (R2)
3. **Resilience** - Missing timeout on external fetch? Bare retry loop without jitter? (R3)
4. **Lifecycle** - Leaking DB connections? Unbounded in-memory buffer? (R4)
5. **Types** - Floating point money? Naive datetime (no TZ)? (S32)

## The Canon (Backend Context)

- **Schemas:** Kleppmann (DDIA) - Reliability & Maintainability.
- **APIs:** Richardson Maturity Model (Aim for Level 3).
- **Concurrency:** Herlihy - Linearizability and atomicity.
