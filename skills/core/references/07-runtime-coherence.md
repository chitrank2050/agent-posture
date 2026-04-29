# 07 - Runtime Coherence

Code must respect its execution model (V4).

## 1. Long-Lived (Server)

- Use connection pools.
- Handle graceful shutdown (SIGTERM).
- In-memory cache is safe but must be bounded (LRU).

## 2. Ephemeral (Serverless/Lambda)

- No in-process connection pools (exhaustion risk).
- No long-lived in-memory state.
- Optimize for cold-start (minimal imports).

## 3. Distributed (Edge/Multi-Region)

- Assume eventual consistency unless explicitly transactional.
- Propagate Correlation IDs (S8) across boundaries.
- Retry with Jitter on all cross-region calls.
