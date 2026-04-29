# 02 - PR Anatomy (Surgical Intent)

Every Pull Request is a legal document of engineering intent. No exceptions.

## The Surgical Template

- **Intent (Why):** The conceptual "Why" behind this change. Anchor to a Dossier value (e.g., "Applying V1 to solve race condition").
- **Scope Boundary:** Explicitly state what is NOT in this PR to prevent scope creep.
- **Root Cause (RCA):** For fixes, name the technical failure (e.g., "Missing `await` in handler causes partial state write").
- **Approach & Trade-offs (V8):** Why this path over the alternative? Name the cost (e.g., "Higher memory usage for O(1) lookup").
- **Verification:** Proof of correctness (Unit tests, Integration pass, or manual log trace).
- **Rollback Path (V35):** Step-by-step instructions to revert in < 60 seconds.

## The Three-Commit Rule (S4, S41)

For non-trivial changes, follow this commit sequence to keep diffs readable:

1. **Refactor/Prepare:** Pure structural changes (no behavior change).
2. **Logic/Core:** The actual behavior change or feature.
3. **Tests/Cleanup:** Verification and debt removal.

## Concrete Example (Principal Grade)

> **PR Title:** `fix(billing): use atomic upsert for subscription initialization (V1)`
>
> **Intent:** Prevent duplicate subscription records during high-concurrency registration (detected via Sentry).
> **Root Cause:** A check-then-act race condition in `SubscriptionService.ts:L42`.
> **Approach:** Replaced `findUnique` + `create` with a single Prisma `upsert` (V1).
> **Trade-offs:** Upsert logic is more complex to maintain but guarantees atomicity without manual DB locks.
> **Verification:**
>
> - Added `concurrency_stress_test.ts` (100 parallel calls).
> - 100% success rate on local test suite.
>   **Rollback:** `git revert <hash>`. Database schema is unchanged.
