# 07 - Runtime Coherence (Substrate Awareness)

Your code must respect the execution model of the target runtime. Choosing the wrong primitive for the runtime is a **Tier 1 Anti-Pattern** (V4, V35).

| Runtime Class     | Lifecycle    | State                  | Primitives                         | Constraints                                  |
| :---------------- | :----------- | :--------------------- | :--------------------------------- | :------------------------------------------- |
| **A: Edge**       | < 50ms       | None (Fresh Isolate)   | `Fetch`, `Crypto`, Edge KV.        | No `fs`, No `net`, strict memory bounds.     |
| **B: Serverless** | 100ms - 30s  | Transient (Warm start) | `http`, `pg`, `aws-sdk`.           | No long-lived sockets, No background timers. |
| **C: Persistent** | Indefinite   | Shared In-memory       | `net`, `child_process`, `cluster`. | Manage memory leaks, handle SIGTERM.         |
| **D: Browser**    | User-session | Local (Storage/DOM)    | `Window`, `Worker`, `IndexedDB`.   | Single-threaded, CORS restricted.            |

## Runtime Coherent Primitives

### 1. In-Memory Caching (V14)

- **Edge/Serverless:** Never use an in-process `Map` for cross-request state. Use Redis or Edge KV.
- **Persistent:** In-process `Map` is valid but MUST have a TTL and Max-Size (V14).

### 2. File System (V18)

- **Edge:** Forbidden. Use `ReadableStream`.
- **Serverless:** Use `/tmp` (ephemeral) or S3 (persistent).
- **Persistent:** Local `fs` is valid for logs/buffers, but assume non-persistence across restarts.

### 3. Background Work (V10)

- **Edge/Serverless:** Use a Queue (SQS/Inngest/Upstash) or a Webhook. Never use `setTimeout` or `Promise` without `await` at the end of the invocation.
- **Persistent:** `BullMQ`, `Cron`, or background workers are first-class.

## The Coherence Smell Test

If you are importing `node:fs` in a file with `export const runtime = 'edge'`, you have violated Runtime Coherence. **HALT.**

## The Shared State Rule

Before adding a cache or a global variable, ask: **"Does this runtime sustain shared state?"**

- **Edge/Serverless (A/B):** Local state is an anti-pattern (V27). Reach for Redis/Upstash/Edge KV.
- **Persistent (C):** In-memory is safe but must be bounded (V14).

## Correlation Propagation (S8)

Across all classes, you MUST propagate the `X-Correlation-ID`.

- **Edge/Serverless (A/B):** Pass via headers in `fetch`.
- **Persistent (C):** Pass via `AsyncLocalStorage` or context objects.
- **Browser (D):** Pass via headers in `XHR`/`fetch`.
