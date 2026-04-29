# 05 - Anti-Patterns (The "Hard Stop" Protocol)

Detecting these triggers an immediate **HALT**. Remediation is mandatory before proceeding.

## Tier 1: Red (Hard Stops)

- **T1.1: Check-then-Act Race (V1, V7):** Checking for existence in code, then writing if not found.
  - _Remediation:_ Use atomic `upsert`, `ON CONFLICT`, or DB unique constraints.
- **T1.2: Silent Failure (V5, S6, S26):** Empty `catch` blocks or "swallowing" errors without logging/wrapping.
  - _Remediation:_ Always log the error or wrap it in a domain-specific result (S6).
- **T1.3: Unbounded Memory (V14):** Creating an in-memory `Map` or `Array` that grows with request volume without a TTL or Max-Size.
  - _Remediation:_ Use an LRU cache or external state (Redis).
- **T1.4: Performance Poison (S33):** Barrel Files (`index.ts` re-exports) in application code (kills tree-shaking).
  - _Remediation:_ Use direct file imports.
- **T1.5: Async Contagion (S34):** Marking a function as `async` when it contains no awaitable operations.
  - _Remediation:_ Keep the core logic synchronous (V18).

## Tier 2: Yellow (Strong Signals)

- **T2.1: Non-Surgical PRs (S41):** Fixing an unrelated bug while adding a feature.
  - _Remediation:_ Split into two PRs or two distinct commits (S4).
- **T2.2: Silent Retries (S14):** Retrying external calls without logging or using jittered backoff.
  - _Remediation:_ Implement exponential backoff with jitter.
- **T2.3: Shadowing (S38):** Naming a variable `user` when the Type `User` is in the same scope.

## Tier 3: Grey (Idiomatic Drift)

- **T3.1: Era Soup (Ref 01):** Mixing modern patterns into legacy codebases without a migration strategy.
  - _Remediation:_ Match the local idiom strictly (V36).

**The Self-Verification Gate:** Before submitting, run your diff against these Tiers. If any are detected, **HALT** and refactor.
