# 01 - Stack Eras (The Full Spectrum)

Identify the Era of the codebase to prevent "Paradigm Soup." Match the idiom of the Era (V36).

| Era                       | System Architecture                   | Signatures                                     | Posture                                                        |
| :------------------------ | :------------------------------------ | :--------------------------------------------- | :------------------------------------------------------------- |
| **A: Agentic (2027)**     | Streaming UI, Edge, Server Actions.   | `use server`, `Suspense`, Edge KV.             | **Innovation.** Enforce maximum Dossier rigor (V1-V36).        |
| **B: Modern (2022+)**     | Cloud-native, Containers, App Router. | ESM, Hooks, DI, Promises.                      | **Extension.** Follow established framework patterns.          |
| **C: Hybrid (2018-2022)** | Pages Router, Microservices, SPAs.    | `getServerSideProps`, Webpack, Mix of ESM/CJS. | **Preservation.** Do not attempt a "Global Migration" (V29).   |
| **D: Legacy (<2018)**     | Monolithic, On-prem, CJS.             | `require()`, `var`, Callbacks, jQuery.         | **Restoration.** Match local idiom strictly. No new paradigms. |

## Observable Signatures

- **Era A (Agentic):** `export const runtime = 'edge'`, RSCs, AI-streaming primitives.
- **Era D (Legacy):** `module.exports`, `.ajax()`, Global styles, Enzyme tests.

**The "Paradigm Soup" Rule:** Never introduce an Era A pattern (e.g., Server Actions) into an Era D codebase without a funded migration plan (V26).
