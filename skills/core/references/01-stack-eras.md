# 01 - Stack Eras (System Signatures)

Identify the Era of the codebase before you propose changes. Eras are defined by their **System Architecture**, not just their language.

| Era                     | Architecture                             | Data Idiom                                           | Posture                                                            |
| :---------------------- | :--------------------------------------- | :--------------------------------------------------- | :----------------------------------------------------------------- |
| **A: Legacy**           | Monolithic, Stateful, On-prem.           | Raw SQL, Global state, Mutables.                     | **Preservation (V20).** Do not attempt "Global Modernization."     |
| **B: Modern**           | Microservices, Cloud-native, Containers. | ORMs, Hooks, DI, Promises.                           | **Extension.** Enhance existing patterns; refactor adjacent logic. |
| **C: Principal (2027)** | Distributed Edge, Stateless, Serverless. | Zod-at-border, Atomic Upserts, Eventual Consistency. | **Rigor.** Enforce the Dossier (V1-V20) on every new line.         |

## Observable System Signatures

- **Era A Signatures:** `require()`, `var`, `.then()` without catch, `global.`, `/tmp` usage.
- **Era B Signatures:** `import`, `async/await`, `interface`, `.env` files, `docker-compose`.
- **Era C Signatures:** `z.parse()`, `upsert`, `EdgeRuntime`, `CorrelationID`, `Immutable Data`.

**Rule:** New modules are always Era C. Existing modules follow their Era signatures to prevent "Paradigm Soup" (Ref 05).
