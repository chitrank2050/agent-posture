# 05 — Anti-Patterns (Risk Matrix)

This is the **Hard Stop Protocol**.

## Tier 1: Hard Stops (RED)

- **1.4 Performance Poison (S33):** Barrel Files (`index.ts` re-exports) in application code. This kills tree-shaking and causes huge bundle bloat.
- **1.5 Async Contagion (S34):** Marking a function as `async` when it contains zero awaitable operations. This adds overhead and pollutes caller types.
- **1.6 Moment.js Drift:** Introducing `moment` or `dayjs` into a project that should use `date-fns` or the native `Intl` API.

## Tier 2: Strong Signals (YELLOW)

- **2.4 Non-Surgical PRs (S41):** Fixing an unrelated bug while adding a feature.
- **2.5 Silent Retries:** Retrying external calls without logging the attempt or using jitter (S14).

## Tier 3: Idiomatic Drift (GREY)

- **3.3 Era Soup (Ref 01):** Using Server Actions (Era A) in a Pages Router (Era C) project without a migration strategy.
- **3.4 Type Shadowing (S38):** Naming a variable `User` when the type `User` is in the same scope.

**The R1 Gate (Self-Verification):** Before submitting your final response, you must run a mental "Lint" against these Tiers. If any are found, **HALT.**
