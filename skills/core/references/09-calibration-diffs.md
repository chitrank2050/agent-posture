# 09 - Calibration Diffs (High Rigor)

Use these 10 deep transformations to calibrate your internal logic. If your code matches the "Before" (Standard LLM), refactor immediately to the "After" (Principal Grade).

## 1. Brittle Config → Schema-Validated Border (V9, S5)

Standard LLMs scatter `process.env` calls, leading to runtime "undefined" crashes deep in the stack. Principal Grade validates the border at boot.

### 1.1 ❌ Before (LLM Default)

```typescript
// db.ts
import { Pool } from "pg";
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: process.env.MAX_CONNS ? parseInt(process.env.MAX_CONNS) : 10,
});
```

### 1.2 ✅ After (Principal Grade)

```typescript
// 1. Define the Border Schema
import { z } from "zod";
const EnvSchema = z.object({
  DATABASE_URL: z.string().url(),
  DB_MAX_CONNECTIONS: z.coerce.number().default(20),
  NODE_ENV: z.enum(["development", "production", "test"]),
});

// 2. Validate at Boot (Fail-Fast)
const result = EnvSchema.safeParse(process.env);
if (!result.success) {
  console.error("❌ Invalid Environment:", result.error.format());
  process.exit(1);
}
export const config = result.data;

// 3. Usage is Typed and Safe
const pool = new Pool({
  connectionString: config.DATABASE_URL,
  max: config.DB_MAX_CONNECTIONS,
});
```

---

## 2. Check-then-Act → Atomic Upsert (V1, V7)

Standard LLMs create race conditions by checking existence before inserting. Principal Grade uses database-level atomicity.

### 2.1 ❌ Before (LLM Default)

```typescript
async function getOrCreateUser(email: string) {
  const user = await db.user.findUnique({ where: { email } });
  if (user) return user;

  return await db.user.create({ data: { email } });
  // ⚡ RACE: Two requests can reach here simultaneously,
  // the second one crashes with "Unique constraint failed".
}
```

### 2.2 ✅ After (Principal Grade)

```typescript
async function getOrCreateUser(email: string) {
  // Atomic Upsert: The DB handles the race condition.
  return await db.user.upsert({
    where: { email },
    update: {}, // No-op if it exists
    create: { email, createdAt: new Date() },
  });
}
```

---

## 3. Generic Strings → Domain-Typed Errors (S6)

Standard LLMs throw generic Errors with strings. Principal Grade uses Discriminated Unions to make error handling a first-class citizen.

### 3.1 ❌ Before (LLM Default)

```typescript
async function processPayment(amount: number) {
  if (amount < 0) throw new Error("Invalid amount");
  if (balance < amount) throw new Error("Insufficient funds");
  // ...
}
```

### 3.2 ✅ After (Principal Grade)

```typescript
// 1. Define Error Space
export type PaymentError =
  | { code: "INVALID_AMOUNT"; amount: number }
  | { code: "INSUFFICIENT_FUNDS"; required: number; actual: number }
  | { code: "PROVIDER_DOWN"; retryable: boolean };

// 2. Result Pattern
export type PaymentResult =
  | { success: true; txId: string }
  | { success: false; error: PaymentError };

async function processPayment(amount: number): Promise<PaymentResult> {
  if (amount < 0)
    return { success: false, error: { code: "INVALID_AMOUNT", amount } };
  // ...
}
```

---

## 4. Brand-Coupled → Substrate-Independent (V3)

Standard LLMs couple logic to specific vendors. Principal Grade names the "Slot" (Concept) before the "Instance" (Brand).

### 4.1 ❌ Before (LLM Default)

```typescript
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
const s3 = new S3Client({});

async function uploadAvatar(file: Buffer) {
  await s3.send(new PutObjectCommand({ Bucket: "avatars", Body: file }));
}
```

### 4.2 ✅ After (Principal Grade)

```typescript
// 1. Define the "Blob Storage" Slot (Interface)
interface BlobStorage {
  upload(key: string, data: Buffer): Promise<void>;
}

// 2. Implement the Instance (S3 Implementation)
class S3Storage implements BlobStorage {
  async upload(key: string, data: Buffer) {
    /* S3 logic */
  }
}

// 3. Logic uses the Slot, not the Brand
async function uploadAvatar(storage: BlobStorage, file: Buffer) {
  await storage.upload("avatars/user-1.png", file);
}
```

---

## 5. Sequential Stalls → Concurrent Pipelining (V10)

Standard LLMs `await` every independent I/O call sequentially. Principal Grade pipelines independent work.

### 5.1 ❌ Before (LLM Default)

```typescript
const user = await db.user.findUnique({ where: { id } }); // 100ms
const posts = await db.post.findMany({ where: { userId: id } }); // 100ms
const profile = await db.profile.findUnique({ where: { id } }); // 100ms
// Total: 300ms
```

### 5.2 ✅ After (Principal Grade)

```typescript
// Pipeline independent I/O
const [user, posts, profile] = await Promise.all([
  db.user.findUnique({ where: { id } }),
  db.post.findMany({ where: { userId: id } }),
  db.profile.findUnique({ where: { id } }),
]);
// Total: ~110ms (Bottlenecked by the slowest query)
```

---

## 6. Logic-First → Traceability-First (S8)

Standard LLMs write logic without observability. Principal Grade makes correlation and tracing a non-negotiable part of the implementation.

### 6.1 ❌ Before (LLM Default)

```typescript
async function handleOrder(order: Order) {
  console.log(`Processing order ${order.id}`);
  await db.order.save(order);
  console.log(`Order ${order.id} saved`);
}
```

### 6.2 ✅ After (Principal Grade)

```typescript
async function handleOrder(order: Order, context: { correlationId: string }) {
  const logger = baseLogger.child({
    cid: context.correlationId,
    orderId: order.id,
  });

  logger.info("ORDER_PROCESSING_START");
  try {
    await db.order.save(order);
    logger.info("ORDER_PROCESSING_SUCCESS");
  } catch (err) {
    logger.error("ORDER_PROCESSING_FAILED", { error: err });
    throw err;
  }
}
```

---

## 7. Infra-as-Code (IaC) Drift → Immutable Declaration (V4, V15)

Standard LLMs write imperative scripts. Principal Grade writes declarative, drift-resistant definitions.

### 7.1 ❌ Before (LLM Default)

```bash
# setup.sh
aws s3 mb s3://my-bucket
aws s3api put-bucket-versioning --bucket my-bucket --versioning-configuration Status=Enabled
```

### 7.2 ✅ After (Principal Grade)

```hcl
# main.tf
resource "aws_s3_bucket" "vault" {
  bucket = "my-principal-vault"

  lifecycle {
    prevent_destroy = true # V22: Non-destructive by default
  }
}

resource "aws_s3_bucket_versioning" "vault" {
  bucket = aws_s3_bucket.vault.id
  versioning_configuration {
    status = "Enabled"
  }
}
```

---

## 8. PII Leakage → Automated Masking (S11)

Standard LLMs log raw objects. Principal Grade implements a "Scrubbing" layer.

### 8.1 ❌ Before (LLM Default)

```typescript
async function login(user: User) {
  logger.info("User login attempt", { user });
  // ⚡ LEAK: Logs passwords, emails, and tokens in plain text.
}
```

### 8.2 ✅ After (Principal Grade)

```typescript
function mask(obj: any): any {
  const SENSITIVE_KEYS = ["email", "password", "token", "secret"];
  return JSON.parse(
    JSON.stringify(obj, (key, value) =>
      SENSITIVE_KEYS.includes(key.toLowerCase()) ? "***MASKED***" : value,
    ),
  );
}

async function login(user: User) {
  logger.info("USER_LOGIN_ATTEMPT", { user: mask(user) });
}
```

---

## 9. Silent Drift → Atomic State Verification (V27)

Standard LLMs assume the cache/local state is correct. Principal Grade verifies.

### 9.1 ❌ Before (LLM Default)

```typescript
async function getBalance(userId: string) {
  const cached = await redis.get(`bal:${userId}`);
  return cached ?? (await db.user.getBalance(userId));
}
```

### 9.2 ✅ After (Principal Grade)

```typescript
async function getBalance(userId: string) {
  // V27: Awareness of Eventual Consistency
  const cached = await redis.get(`bal:${userId}`);
  if (cached && !isStale(cached)) return cached;

  const actual = await db.user.getBalance(userId);
  await redis.set(`bal:${userId}`, actual, { EX: 60 });
  return actual;
}
```

---

## 10. The "Big Bang" Refactor → Surgical Parceling (S4)

Standard LLMs try to fix everything at once. Principal Grade parcels changes.

### 10.1 ❌ Before (LLM Default)

```bash
# One massive PR
Modified: 14 files
Changes:
- Renamed User to Member
- Added 'status' field to DB
- Updated Auth logic
- Fixed 4 unrelated lints
```

### 10.2 ✅ After (Principal Grade)

```bash
# PR 1: Schema Migration (feat)
# PR 2: Rename User to Member (refactor - isolated)
# PR 3: Auth logic update (feat)
```
