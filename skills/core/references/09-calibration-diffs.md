# 09 — Calibration Diffs (Maximum Rigor)

Use these 12 deep transformations to calibrate your internal logic. If your code matches the "Before" (Standard LLM), refactor immediately to the "After" (Principal Grade).

## 1. Brittle Config → Schema-Validated Border (V9, S5)

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
import { z } from "zod";
const EnvSchema = z.object({
  DATABASE_URL: z.string().url(),
  DB_MAX_CONNECTIONS: z.coerce.number().default(20),
});
const result = EnvSchema.safeParse(process.env);
if (!result.success) process.exit(1);
export const config = result.data;
```

## 2. Check-then-Act → Atomic Upsert (V1, V7)

### 2.1 ❌ Before (LLM Default)

```typescript
const user = await db.user.findUnique({ where: { email } });
if (user) return user;
return await db.user.create({ data: { email } });
```

### 2.2 ✅ After (Principal Grade)

```typescript
return await db.user.upsert({
  where: { email },
  update: {},
  create: { email },
});
```

## 3. Generic Strings → Domain-Typed Errors (S6)

### 3.1 ❌ Before (LLM Default)

```typescript
if (amount < 0) throw new Error("Invalid amount");
```

### 3.2 ✅ After (Principal Grade)

```typescript
export type PaymentError = { code: "INVALID_AMOUNT"; amount: number };
// Use Discriminated Unions for result handling.
```

## 4. Brand-Coupled → Substrate-Independent (V3)

### 4.1 ❌ Before (LLM Default)

```typescript
import { S3Client } from "@aws-sdk/client-s3";
```

### 4.2 ✅ After (Principal Grade)

```typescript
interface BlobStorage {
  upload(key: string, data: Buffer): Promise<void>;
}
```

## 5. Sequential Stalls → Concurrent Pipelining (V10)

### 5.1 ❌ Before (LLM Default)

```typescript
const user = await db.user.find(id);
const posts = await db.posts.find(id);
```

### 5.2 ✅ After (Principal Grade)

```typescript
const [user, posts] = await Promise.all([db.user.find(id), db.posts.find(id)]);
```

## 6. Logic-First → Traceability-First (S8)

### 6.1 ❌ Before (LLM Default)

```typescript
console.log(`Processing order ${id}`);
```

### 6.2 ✅ After (Principal Grade)

```typescript
logger.info("ORDER_START", { cid: context.correlationId, id });
```

## 7. Imperative Script → Declarative Infra (V4, V15)

### 7.1 ❌ Before (LLM Default)

```bash
aws s3 mb s3://my-bucket
```

### 7.2 ✅ After (Principal Grade)

```hcl
resource "aws_s3_bucket" "vault" { bucket = "my-bucket" }
```

## 8. PII Leakage → Automated Masking (S11)

### 8.1 ❌ Before (LLM Default)

```typescript
logger.info("login", { user }); // Leaks email/pass
```

### 8.2 ✅ After (Principal Grade)

```typescript
logger.info("LOGIN", { user: mask(user) });
```

## 9. Silent Drift → Atomic State Verification (V27)

### 9.1 ❌ Before (LLM Default)

```typescript
const cached = await redis.get(key);
return cached ?? (await db.fetch(key));
```

### 9.2 ✅ After (Principal Grade)

```typescript
const cached = await redis.get(key);
if (cached && !isStale(cached)) return cached;
// Verify and refresh.
```

## 10. Big Bang → Surgical Parceling (S4, S41)

### 10.1 ❌ Before (LLM Default)

```bash
# One massive PR with features + fixes + renames.
```

### 10.2 ✅ After (Principal Grade)

```bash
# PR 1: Rename (Isolated)
# PR 2: Feature (Isolated)
```

## 11. Offset Pagination → Cursor-Based Pagination (S31)

### 11.1 ❌ Before (LLM Default)

```typescript
db.post.findMany({ skip: page * 20, take: 20 });
```

### 11.2 ✅ After (Principal Grade)

```typescript
db.post.findMany({ take: 20, cursor: { id: lastId } });
```

## 12. Floating Point Money → Domain Typed Cents (S32)

### 12.1 ❌ Before (LLM Default)

```typescript
const price = 19.99;
```

### 12.2 ✅ After (Principal Grade)

```typescript
const priceCents = 1999;
```
