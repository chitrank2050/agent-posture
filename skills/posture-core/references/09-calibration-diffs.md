# 09 - Calibration Diffs (Principal Grade)

Use these deep transformations to calibrate your internal logic. If your code matches the "Before" (Standard LLM), refactor immediately to the "After" (Principal Grade).

## 1. Brittle Config → Schema-Validated Border (V9, S5, S17)

### 1.1 ❌ Before (LLM Default)

```typescript
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: process.env.MAX_CONNS ? parseInt(process.env.MAX_CONNS) : 10,
});
```

### 1.2 ✅ After (Principal Grade)

```typescript
import { z } from 'zod';

const EnvSchema = z.object({
  DATABASE_URL: z.string().url(),
  DB_MAX_CONNECTIONS: z.coerce.number().int().positive().default(20),
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
});

// Validate at the edge of the system (S17)
const result = EnvSchema.safeParse(process.env);
if (!result.success) {
  console.error('❌ Invalid environment variables:', result.error.format());
  process.exit(1); // Fail-Fast (V15)
}
export const config = result.data;
```

## 2. Check-then-Act → Atomic Persistence (V1, V7)

### 2.1 ❌ Before (LLM Default)

```typescript
const user = await db.user.findUnique({ where: { email } });
if (user) return user;
return await db.user.create({ data: { email } });
```

### 2.2 ✅ After (Principal Grade)

```typescript
// Prevents race conditions between find and create.
return await db.user.upsert({
  where: { email },
  update: {}, // No-op update if exists
  create: { email },
});
```

## 3. Generic Strings → Discriminated Unions (S6, S26)

### 3.1 ❌ Before (LLM Default)

```typescript
if (amount < 0) throw new Error('Invalid amount');
```

### 3.2 ✅ After (Principal Grade)

```typescript
export type PaymentResult =
  | { success: true; transactionId: string }
  | { success: false; error: 'INSUFFICIENT_FUNDS'; balance: number }
  | { success: false; error: 'INVALID_AMOUNT'; amount: number };

// Caller is forced to handle all cases (S6).
```

## 4. Barrel Files → Explicit Imports (S33)

### 4.1 ❌ Before (LLM Default)

```typescript
// components/index.ts
export * from './Button';
export * from './Input';
// Usage: import { Button } from "@/components"; // Kills tree-shaking
```

### 4.2 ✅ After (Principal Grade)

```typescript
// Usage: import { Button } from "@/components/Button";
// Direct imports prevent accidental side-effect execution and minimize bundle size.
```

## 5. Async Contagion → Sync Core (S34, V18)

### 5.1 ❌ Before (LLM Default)

```typescript
async function calculateTotal(items: Item[]) {
  return items.reduce((acc, item) => acc + item.price, 0);
}
// Why is this async? It forces every caller to await for no reason.
```

### 5.2 ✅ After (Principal Grade)

```typescript
function calculateTotal(items: Item[]) {
  return items.reduce((acc, item) => acc + item.price, 0);
}
// Keep domain logic pure and sync (V18). Only handlers should be async.
```

## 6. Bare Fetch → Jittered Resilience (S14, S15)

### 6.1 ❌ Before (LLM Default)

```typescript
const response = await fetch('https://api.external.com/data');
return response.json();
```

### 6.2 ✅ After (Principal Grade)

```typescript
// Use a jittered retry strategy to prevent Thundering Herd (S14).
const data = await retryWithJitter(
  () => fetchWithTimeout('https://api.external.com/data', 5000),
  { retries: 3, minDelay: 100, maxDelay: 1000 },
);
```

## 7. Floating Point Money → Integer Cents (S32)

### 7.1 ❌ Before (LLM Default)

```typescript
const tax = amount * 0.05; // 0.1 + 0.2 !== 0.3
```

### 7.2 ✅ After (Principal Grade)

```typescript
const taxCents = Math.round(amountCents * 5) / 100;
// Always store and calculate currency as integers (S32).
```

## 8. Logic-First → Traceability-First (S8, S24)

### 8.1 ❌ Before (LLM Default)

```typescript
console.log(`Processing order ${id}`);
```

### 8.2 ✅ After (Principal Grade)

```typescript
// Propagate context and use structured logging (S24).
logger.info('order.process.start', {
  orderId: id,
  correlationId: context.correlationId(S8),
});
```
