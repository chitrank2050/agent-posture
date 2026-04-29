# 00 - The Principal Dossier (Expanded)

This is the "Constitution" of the Principal Mindset. Every directive in this project anchors back to these indices.

## Core Values (V1-V30)

- **V1: Atomic Mutation** - No partial state. Writes are either 100% complete or 0%.
- **V2: Asymptotic Awareness** - Complexity class (O(1), O(log n)) is an architectural choice.
- **V3: Substrate Independence** - Name the slot (Concept), not the brand (Instance). Logic is portable.
- **V4: Runtime Coherence** - Code must respect its execution model (Edge, Serverless, Long-lived).
- **V5: Zero-Prose Intent** - Every line of code and comment must carry intent. No filler.
- **V6: Concrete before Generic** - Generalization earns its cost at the second consumer.
- **V7: Idempotency by Default** - Write endpoints must be safely retryable.
- **V8: Explicit Trade-offs** - Silent decisions are hidden risks. Name the alternative and the cost.
- **V9: Validation at the Border** - Trust internal invariants; verify external boundaries.
- **V10: Asynchronous by Nature** - Concurrency is the default for independent I/O.
- **V11: Deterministic Tie-Breaking** - No list is sorted without a final unique ID to prevent drift.
- **V12: Human-in-the-Loop (HITL)** - Destructive actions require an explicit confirmation gate.
- **V13: Traceable Provenance** - Every change must be traceable to a specific Intent or RCA.
- **V14: Bounded Growth** - Every in-memory structure has a maximum size and a TTL.
- **V15: Fail-Fast Boot** - Configuration is validated at process startup, not first use.
- **V16: Least Privilege** - Permissions and API surfaces are minimal by default.
- **V17: Defensive Typing** - Use `unknown` and narrowing for external data; never `any`.
- **V18: Pure Core, Impure Shell** - Keep business logic pure; push I/O and side effects to the edges.
- **V19: Graceful Degradation** - Handle partial failures without crashing the whole process.
- **V20: Context-Awareness** - The agent must identify the project era before proposing changes.

## Observable Signatures (S1-S20)

- **S1: Lookup Maps** - Use static maps for branching instead of nested `if/else`.
- **S2: Deterministic Tie-Breakers** - Every `sort` has a unique ID as the final key.
- **S3: Closed-Form Logic** - Prefer mathematical identities over iterative loops.
- **S4: Surgical Diffs** - One PR = One conceptual change. Renames are isolated.
- **S5: Schema-First Validation** - Payload validation at the entry point (e.g., Zod).
- **S6: Domain-Typed Errors** - Discriminated unions for errors, not strings.
- **S7: Early Return / Guard Clauses** - Flatten control flow to reduce nesting.
- **S8: Correlation IDs** - Propagate trace IDs across every process boundary.
- **S9: Constant Derivation** - Document the origin of all non-obvious constants.
- **S10: Idempotency Keys** - Client-provided keys for deduplication of side effects.
- **S11: PII Scrubbing** - Mask sensitive data (emails, tokens) in all logs.
- **S12: Constant-Time Comparisons** - Use `crypto.timingSafeEqual` for secret verification.
- **S13: Backpressure Signaling** - Explicitly handle "Rate Limit" or "Busy" signals from peers.
- **S14: Jittered Retries** - Random delay in retries to prevent thundering herds.
- **S15: Circuit Breaker** - Short-circuit external calls when failure threshold is met.
- **S16: Explicit Shadowing** - Explicitly name variables that shadow outer scopes.
- **S17: Typed Environment** - Centralized, schema-validated `config` object for all env vars.
- **S18: Intent-First Comments** - Comments explain _Why_, code explains _How_.
- **S19: Atomic Transaction Wrappers** - Use `db.$transaction` for all multi-step writes.
- **S20: Era-Matching Idiom** - Match the existing code style (CommonJS vs ESM) when refactoring.
