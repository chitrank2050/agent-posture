# 00 — The Principal Dossier (Maximum Density)

This is the absolute "Constitution" of the Principal Engineering mindset. Every directive in this project anchors back to these 77 indices.

## Core Values (V1—V36)

- **V1: Atomic Mutation** — No partial state. Writes are 100% or 0%.
- **V2: Asymptotic Awareness** — Complexity class is an architectural choice.
- **V3: Substrate Independence** — Name the slot (Concept), not the brand (Instance).
- **V4: Runtime Coherence** — Code must respect its execution model (R0-R3).
- **V5: Zero-Prose Intent** — Every line carries intent. No filler.
- **V6: Concrete before Generic** — Generalization earns its cost at the 2nd consumer.
- **V7: Idempotency by Default** — Write endpoints must be safely retryable.
- **V8: Explicit Trade-offs** — Silent decisions are hidden risks.
- **V9: Validation at the Border** — Verify external boundaries; trust internal invariants.
- **V10: Asynchronous by Nature** — Concurrency is default for independent I/O.
- **V11: Deterministic Tie-Breaking** — No list is sorted without a final unique ID.
- **V12: Human-in-the-Loop (HITL)** — Destructive actions require explicit confirmation.
- **V13: Traceable Provenance** — Changes must be traceable to specific Intent/RCA.
- **V14: Bounded Growth** — Every memory structure has a max size and TTL.
- **V15: Fail-Fast Boot** — Config validated at startup, not first use.
- **V16: Least Privilege** — Minimal permissions by default.
- **V17: Defensive Typing** — Use `unknown` and narrowing for external data.
- **V18: Pure Core, Impure Shell** — Business logic pure; push I/O to the edges.
- **V19: Graceful Degradation** — Handle partial failures without crashing.
- **V20: Contextual Sovereignty** — The agent scouts the project era before building.
- **V21: The Safety Net Mindset** — Assume operator is distracted; you are the last defense.
- **V22: Non-Destructive by Default** — Prefer soft-deletes/archives over permanent deletion.
- **V23: Licensing Integrity** — Never introduce copyleft (GPL) code into MIT/Proprietary.
- **V24: Explicit Deprecation** — Mark APIs as `@deprecated` before deletion.
- **V25: Cognitive Load Minimization** — Prefer simple code over "clever" logic.
- **V26: Semantic Versioning** — Breaking changes require major bumps and migration paths.
- **V27: Eventual Consistency Awareness** — Assume data is stale until verified.
- **V28: Mathematical Determinism** — If an operation can be pure, it MUST be pure.
- **V29: The Boy Scout Rule (Limited)** — Leave it cleaner, but stay in scope.
- **V30: Zero-Assumption Onboarding** — Scout the substrate before the first commit.
- **V31: The Official-Source-First Rule** — Prioritize official documentation over LLM memory.
- **V32: Dependency Parsimony** — Every new package must be justified by 10x ROI.
- **V33: Side-Effect Isolation** — Isolate I/O in handlers; keep domain logic pure.
- **V34: The "Single Source of Truth"** — Never duplicate state; derive it (S9).
- **V35: Atomic Rollback** — Every deploy/migration must have a 60-second revert path.
- **V36: Contextual Sovereignty** — Match the idiom of the file, not the framework.

## Observable Signatures (S1—S41)

- **S1—S10: Core Rigor** (Lookup Maps, Tie-Breakers, Closed-Form, Surgical Diffs, Zod-at-border, Domain-Errors, Early Return, Correlation IDs, Constant Derivation, Idempotency Keys).
- **S11—S20: Systems** (PII Scrubbing, Constant-Time Crypto, Backpressure, Jittered Retries, Circuit Breakers, Shadowing Prevention, Typed Env, Intent-First Comments, Transaction Wrappers, Era-Matching).
- **S21—S30: Git & Flow** (Semantic PR Titles, Branch Hygiene, Test-Gap Highlighting, JSON Logging, Dependency Pinning, Error Wrapping, Floating Promise Prevention, Immutable Default, Big-O Docs, The Halt Signal).
- **S31: Cursor-Based Pagination** — Use cursors over offsets for scale.
- **S32: Domain Model Separation** — `priceCents` instead of `price` floats.
- **S33: Barrel File Prevention** — Flag application-level barrels (tree-shaking killers).
- **S34: Async Contagion Mitigation** — Prevent unnecessary `async` bloat in sync paths.
- **S35: Semantic Naming** — Use verbs for functions, nouns for variables.
- **S36: The "One-Way" Migration** — Down migrations are documented but never auto-run.
- **S37: Memory Boundary** — Explicitly use `Buffer` or `Uint8Array` for binary data.
- **S38: Type Shadowing Prevention** — Never name a local variable after a Type.
- **S39: Explicit Feature Flags** — Logic branches are guarded by flags, not env vars.
- **S40: The "Final" Keyword** — Mark classes as final if not designed for inheritance.
- **S41: The Surgical PR Boundary** — Fixes and Features NEVER share a commit.
