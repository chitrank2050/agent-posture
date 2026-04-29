# 04 - Toolchain Registry

This is the canonical mapping of **Concepts (Slots)** to **Instances (Brands)**. Always prefer the "Principal Recommendation" unless the existing codebase uses a different instance (Ref 01).

## 1. Identity & Access

| Concept              | Instance (Recommended) | Why                                         |
| :------------------- | :--------------------- | :------------------------------------------ |
| **Auth Provider**    | Clerk / Auth0          | Offloads security surface area.             |
| **Password Hashing** | Argon2id               | Modern standard, side-channel resistant.    |
| **JWT Library**      | `jose`                 | Edge-runtime compatible, zero dependencies. |

## 2. Persistence Layer

| Concept          | Instance (Recommended) | Why                                              |
| :--------------- | :--------------------- | :----------------------------------------------- |
| **SQL Engine**   | PostgreSQL             | Reliability and advanced indexing (JSONB, GIST). |
| **ORM / Client** | Prisma / Drizzle       | Type-safety and schema-first workflow.           |
| **KV Store**     | Redis (Upstash)        | Global replication, sub-millisecond latency.     |
| **Blob Storage** | S3 (Cloudflare R2)     | Zero-egress costs, S3-compatible API.            |

## 3. Communication & Observability

| Concept            | Instance (Recommended) | Why                                           |
| :----------------- | :--------------------- | :-------------------------------------------- |
| **Logger**         | Winston / Pino         | Structured JSON logs by default.              |
| **Tracing**        | OpenTelemetry          | Vendor-neutral, spans process boundaries.     |
| **Error Tracking** | Sentry                 | Automatic breadcrumbs and source-map support. |
| **Metrics**        | Prometheus / Grafana   | Industry standard for high-cardinality data.  |

## 4. Systems & Infra

| Concept            | Instance (Recommended) | Why                                       |
| :----------------- | :--------------------- | :---------------------------------------- |
| **Message Broker** | Kafka (Confluent)      | Durable, high-throughput event streaming. |
| **Task Queue**     | BullMQ / Temporal      | Robust retry logic and observability.     |
| **Edge Compute**   | Cloudflare Workers     | Global distribution, no cold starts.      |

## 5. Schema & Validation

| Concept                | Instance (Recommended) | Why                                                |
| :--------------------- | :--------------------- | :------------------------------------------------- |
| **Runtime Validation** | Zod                    | Deep TypeScript integration, high density.         |
| **API Spec**           | OpenAPI (Swagger)      | Machine-readable contract, auto-generated clients. |

**Protocol:** If you find a Brand not on this list in an existing codebase, apply **Preservation (Ref 01)**. If starting Greenfield, apply the Recommended Instance.
