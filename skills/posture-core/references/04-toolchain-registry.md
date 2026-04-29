# 04 - Toolchain Registry (With Anti-Patterns)

Mapping of **Concepts (Slots)** to **Instances (Brands)**. Always prefer the "Principal Recommendation."

## 1. Persistence Layer

| Concept          | Instance (Recommended) | **Config Anti-Patterns (RED)**                                                    |
| :--------------- | :--------------------- | :-------------------------------------------------------------------------------- |
| **SQL Engine**   | PostgreSQL             | Using `SERIAL` (use `IDENTITY`). Using `TEXT` for everything without constraints. |
| **ORM / Client** | Prisma / Drizzle       | Using `$queryRaw` without parameter binding. Sequential awaits in loops.          |
| **KV Store**     | Redis (Upstash)        | Storing large blobs (>1MB). Not setting a TTL by default (V14).                   |
| **Blob Storage** | S3 (Cloudflare R2)     | Hardcoding bucket names. Public access by default.                                |

## 2. Identity & Access

| Concept           | Instance (Recommended) | **Config Anti-Patterns (RED)**                                            |
| :---------------- | :--------------------- | :------------------------------------------------------------------------ |
| **Auth Provider** | Clerk / Auth0          | Storing passwords in plain text. Rolling your own JWT verification logic. |
| **JWT Library**   | `jose`                 | Using weak algorithms (e.g., HS256 with short keys).                      |

## 3. Communication & Observability

| Concept            | Instance (Recommended) | **Config Anti-Patterns (RED)**                                |
| :----------------- | :--------------------- | :------------------------------------------------------------ |
| **Logger**         | Winston / Pino         | Logging raw `Error` objects (loses stack). Logging PII (S11). |
| **Tracing**        | OpenTelemetry          | Mixing trace libraries in a single process.                   |
| **Error Tracking** | Sentry                 | Leaving "Debug" mode on in production.                        |

## 4. Systems & Infra

| Concept            | Instance (Recommended) | **Config Anti-Patterns (RED)**                                   |
| :----------------- | :--------------------- | :--------------------------------------------------------------- |
| **Message Broker** | Kafka (Confluent)      | No-retry producers. Consumer groups with no offset commit logic. |
| **Task Queue**     | BullMQ / Temporal      | Large payloads in Redis (use Blob storage). Infinite retries.    |

## 5. Schema & Validation

| Concept                | Instance (Recommended) | **Config Anti-Patterns (RED)**                    |
| :--------------------- | :--------------------- | :------------------------------------------------ |
| **Runtime Validation** | Zod                    | Using `.passthrough()` at public boundaries (S5). |
| **API Spec**           | OpenAPI                | Stale specs that don't match the Zod schema.      |

**Protocol:** If you find a Brand or an Anti-pattern not on this list, apply **Tier 1 Halt (Ref 05)** before proceeding.
