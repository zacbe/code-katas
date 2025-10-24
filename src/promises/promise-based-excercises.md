# 1. Sequential Fetcher

Goal:
Implement a function that runs an array of async tasks sequentially, collecting their results in order.

```typescript
// Example
const tasks = [
  () => Promise.resolve(1),
  () => Promise.resolve(2),
  () => Promise.resolve(3),
];

await runSequentially(tasks);
// => [1, 2, 3]
```

Requirements:

- Run each task only after the previous one has finished.
- If one fails, stop execution and reject with that error.
- Add a test case that demonstrates rejection handling.

### Function signature:

```typescript
function runSequentially<T>(tasks: Array<() => Promise<T>>): Promise<T[]>;
```

# 2. Promise Pool (Concurrency Limiter)

Goal:
Run multiple async tasks with limited concurrency.

```typescript
// Example
const tasks = Array.from(
  { length: 10 },
  (_, i) => () => new Promise<number>((r) => setTimeout(() => r(i), 1000))
);

await runPool(tasks, 3); // max 3 concurrent
// => resolves when all tasks finish, returns [0..9]
```

Requirements:

- At most limit tasks run concurrently.
- As soon as one finishes, start the next.
- Preserve original order in the output array.
- Handle errors properly (fail fast).

### Function signature:

```typescript
function runPool<T>(
  tasks: Array<() => Promise<T>>,
  limit: number
): Promise<T[]>;
```

# 3. Retry with Backoff

Goal:
Write a wrapper that retries a failing async operation with exponential backoff.

```typescript
// Example usage
await retry(() => unstableFetch(), 3);
// Try up to 3 times => 100ms, 200ms, 400ms delays
```

Requirements:

- Wait baseDelayMs \* 2^attempt between retries.
- Throw the last error if all attempts fail.
- Test both success (eventually resolves) and failure scenarios.

### Function signature:

```typescript
function retry<T>(
  fn: () => Promise<T>,
  retries: number,
  baseDelayMs?: number
): Promise<T>;
```
