---
name: data
description: Data-Grade technical posture. Activate this for any task involving Databases, Prisma, Migrations, or Data Modeling. Enforce schema integrity, multi-tenant isolation, and deterministic seeding. If it's in the DB, it must be immutable and isolated.
metadata:
  version: 1.0.0
  extends: posture-core
  author: chitrank2050
---

# Technical Data Posture 🗄️🛡️

> **"Code is transient; data is forever. Treat the schema as the project's permanent constitution."**

This addon is triggered for any task involving Database Schemas, Prisma, Migrations, Multi-tenancy, or Seeding. It extends the Core Posture with data-layer rigor.

## When to use

Load this skill when:

- You are modifying `schema.prisma` or SQL DDL files.
- The task involves creating or reviewing database migrations.
- You are implementing multi-tenant data isolation (Row Level Security).
- The work involves data seeding, large-scale mutations, or indexing.
- You are optimizing query performance (N+1, EXPLAIN ANALYZE).

## Operating Rules (R1–R5)

### R0 - The Production Lock (V1, V9, Ref 05)

**Production data is an immutable monument.** You MUST assume any database operation is running against production. **Hard-Ban:** Never execute `DROP`, `TRUNCATE`, or `DELETE` (without `WHERE`) in any context without an explicit, multi-step **Safe-Mutation-Protocol**. Always perform a `Dry Run` or `Count` before executing a real mutation. If a command could potentially delete data, you MUST **HALT** and explain the risk.

### R1 - Migration Sovereignty (V1, V7, S30)

Production data is sacred. **Hard-Ban:** Never use `db push` or untracked schema changes. Every mutation must ship as a named, version-controlled migration. For large tables, migrations must be "Zero-Downtime" (e.g., add column, then backfill, then drop old).

### R2 - The "Tenant-First" Invariant (V34, S19)

Multi-tenant isolation is a core safety invariant. Every queryable entity MUST have a `tenantId`. Enforce isolation at the infrastructure layer using Prisma middleware or extensions to automatically inject `tenantId` into every `find`, `update`, and `delete` operation.

### R3 - Deterministic Seeding & Parity (V20, S20)

Developer environments must be clones of reality. Use deterministic seed scripts that populate all necessary relations. Avoid "Magic IDs"; use stable references or lookup-based seeding to ensure environment parity.

### R4 - Index-Aware Modeling (V2, S31)

No entity ships without an indexing strategy. Foreign keys, sort columns, and filterable fields MUST have indexes. Use **Keyset Pagination** (cursor-based) for all collection endpoints to prevent OOM and performance degradation on large datasets.

### R5 - Atomic Boundaries (V7, S19)

Multi-entity state changes MUST be wrapped in a database transaction. Reach for `onConflict` and `upsert` to handle race conditions. Business logic that spans multiple DB calls must be audited for "Partial Failure" risks.

## Data Self-Verification Gate

- [ ] **Isolation**: Is `tenantId` enforced for this mutation?
- [ ] **Safety**: Is this a named migration? Does it avoid breaking changes to existing data?
- [ ] **Performance**: Are all foreign keys and filter columns indexed?
- [ ] **Atomicity**: Is this multi-step change wrapped in a transaction?
- [ ] **Parity**: Has the seed script been updated for new required fields?

## Deep Reference Library

- `references/00-dossier.md` - The Principal Constitution (V1-V36, S1-S41).
- `references/05-anti-patterns.md` - The "Hard Stop" Risk Matrix (Red/Yellow/Grey tiers).
- `references/07-runtime-coherence.md` - Edge, Serverless, and Persistent Server primitives.
- `references/09-calibration-diffs.md` - 12 high-density Before vs. After examples.
