# 01 - Stack Eras (Posture & Signatures)

Identify the Era of the codebase to prevent "Paradigm Soup." Match the idiom of the Era (V36).

| Era                       | System Architecture                   | Signatures                                     | Posture                                                        |
| :------------------------ | :------------------------------------ | :--------------------------------------------- | :------------------------------------------------------------- |
| **A: Agentic (2027)**     | Streaming UI, Edge, Server Actions.   | `use server`, `Suspense`, Edge KV, `llms.txt`. | **Innovation.** Enforce maximum Dossier rigor (V1-V36).        |
| **B: Modern (2022+)**     | Cloud-native, Containers, App Router. | ESM (`import`), Hooks, DI, Promises, Prisma.   | **Extension.** Follow established framework patterns.          |
| **C: Hybrid (2018-2022)** | Pages Router, Microservices, SPAs.    | `getServerSideProps`, Webpack, Mix of ESM/CJS. | **Preservation.** Do not attempt a "Global Migration" (V29).   |
| **D: Legacy (<2018)**     | Monolithic, On-prem, CJS.             | `require()`, `var`, Callbacks, jQuery, Enzyme. | **Restoration.** Match local idiom strictly. No new paradigms. |

## Observable Signatures (Detection)

- **Era A (Agentic):** `export const runtime = 'edge'`, RSCs, AI-streaming primitives, `.cursorrules` with high density.
- **Era B (Modern):** `package.json` with `type: module`, TypeScript strict mode, Vitest/Jest.
- **Era C (Hybrid):** Mixed `require` and `import`, `next.config.js` with complex Webpack overrides.
- **Era D (Legacy):** `module.exports`, `.ajax()`, Global styles, `bower.json`, `gulpfile.js`.

## The "Paradigm Soup" Rule

Never introduce an Era A pattern (e.g., Server Actions) into an Era D codebase without a funded migration plan (V26). If the codebase is "Hybrid," stick to the pattern of the _nearest sibling file_.
