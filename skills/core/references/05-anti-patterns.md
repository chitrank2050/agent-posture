# 05 - Anti-Patterns (Risk Matrix)

This is the **Hard Stop Protocol**. If any of these are encountered or about to be produced, you must halt and surface the conflict to the operator.

## Tier 1: Hard Stops (RED)

_Immediate rejection. No justification allowed._

### 1.1 Atomic Integrity Violation (V1)

- **Check-then-Act Races:** Using a "find" then "create" instead of an atomic `upsert` or `ON CONFLICT`.
- **Partial State Commits:** Executing multi-table mutations without a database transaction.
- **Floating Point Currency:** Using `number` or `float` for money/currency instead of `BigInt` or `Cents`.

### 1.2 Security & Exposure

- **The `any` Leak:** Using `any` as a type at a boundary (API/Service) instead of `unknown` + validation.
- **Silent Credentials:** Hardcoding any key, even for local dev, that isn't pulled from `process.env`.
- **Naked SQL:** Concatenating strings into a SQL query instead of using parameterized bindings or an ORM.

### 1.3 Asymptotic Failure (V2)

- **N+1 Logic:** Executing a database query or an API call inside a loop.
- **O(n^2) Brute Force:** Using nested loops for search/deduplication where a Map/Set O(1) exists.

---

## Tier 2: Strong Signals (YELLOW)

_Requires explicit justification and a "Reference 02" Trade-off note._

### 2.1 Posture & Communication (V5, V8)

- **Helpful Prose:** Narrating what the code does instead of why it changed.
- **Marketing Voice:** Using "Sure, I can help" or "I have updated...".
- **Bundled PRs (S4):** Mixing a variable rename with a feature implementation in one commit.

### 2.2 Architectural Drift

- **Premature Abstraction (V6):** Creating an interface/factory for a single implementation that is not an external boundary.
- **Brand Coupling (V3):** Using vendor-specific types/names in core business logic (e.g., `s3Result` instead of `blobResult`).
- **Naked Retries:** Implementing a retry loop without exponential backoff and jitter.

### 2.3 Runtime Coherence (V4)

- **Global Mutables:** Using a global variable for state that isn't a constant or a singleton-guarded pool.
- **Unbounded Growth:** Using an in-memory cache or array that grows with every request without a TTL or Max-Size.

---

## Tier 3: Idiomatic Drift (GREY)

_Mismatch with the project's Era (Ref 01)._

### 3.1 Era Incompatibility

- **Modern in Legacy:** Using ESM `import` in a CommonJS file.
- **Functional in OOP:** Mixing arrow functions and `const` definitions inside a class-based legacy module.
- **Duplicate Divergence:** Refactoring two similar functions into one when they serve different business domains (Logic Coupling).

### 3.2 Toolchain Drift

- **Shadow Dependencies:** Using `node-fetch` when the global `fetch` is available in the runtime.
- **Version Mismatch:** Using a pattern from an older version of a library (e.g., Prisma 4 patterns in a Prisma 7 project).

---

## Protocol: The "Halt"

1. **Identify**: Name the Anti-Pattern and its Tier.
2. **Anchor**: Link to the Dossier Index (e.g., V1, V2).
3. **Resolve**: Propose the "Principal Pattern" from **Reference 09**.
4. **Wait**: Do not apply the fix if it involves a Tier 1 violation in existing code; ask for "Refactoring Permission" first.
