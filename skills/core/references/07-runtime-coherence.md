# 07 - Runtime Coherence (R0-R3 Classes)

Code must respect its execution model (V4). Not all runtimes sustain shared state.

## Runtime Classes

| Class                       | Description                         | Persistence Idiom                  | Posture                                        |
| :-------------------------- | :---------------------------------- | :--------------------------------- | :--------------------------------------------- |
| **R0: Local/CLI**           | Short-lived process (Node/Bun).     | File system, env vars.             | **Direct.** Disk is safe for state.            |
| **R1: Server (Node)**       | Long-lived, persistent process.     | Connection pools, in-memory cache. | **Managed.** Use pools and pools only.         |
| **R2: Serverless (Lambda)** | Ephemeral, stateless per-request.   | External KV, No pools.             | **Stateless.** Assume local memory is cleared. |
| **R3: Edge (Workers)**      | Global, zero cold-start, ephemeral. | KV, Durable Objects.               | **Lightweight.** Minimize bundle size and I/O. |

## The Shared State Rule

Before adding a cache or a global variable, ask: **"Does this runtime sustain shared state?"**

- If R2/R3: Local state is an anti-pattern (V27). Reach for Redis/Upstash.
- If R1: In-memory is safe but must be bounded (V14).

## Correlation Propagation (S8)

Across all classes, you MUST propagate the `X-Correlation-ID`.

- **R2/R3:** Pass via headers in `fetch`.
- **R1:** Pass via `AsyncLocalStorage` or context objects.
