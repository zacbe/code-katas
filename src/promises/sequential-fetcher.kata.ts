export async function runSequentially<T>(
  tasks: Array<() => Promise<T>>,
): Promise<T[]> {
  const out: T[] = [];
  for (const task of tasks) {
    // If a task rejects, this throws and stops the loop (fail-fast)
    out.push(await task());
  }
  return out;
}
