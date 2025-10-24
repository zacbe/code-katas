import { runSequentially } from './sequential-fetcher.kata';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

describe('runSequentially', () => {
  it('runs tasks strictly in order and collects results', async () => {
    const order: number[] = [];
    const tasks = [
      () =>
        sleep(30).then(() => {
          order.push(1);
          return 'A';
        }),
      () =>
        sleep(10).then(() => {
          order.push(2);
          return 'B';
        }),
      () =>
        sleep(5).then(() => {
          order.push(3);
          return 'C';
        }),
    ];
    const res = await runSequentially(tasks);
    expect(res).toEqual(['A', 'B', 'C']);
    expect(order).toEqual([1, 2, 3]);
  });

  it('fails fast when a task rejects', async () => {
    const tasks = [
      () => Promise.resolve(1),
      () => Promise.reject(new Error('boom')),
      () => Promise.resolve(3),
    ];
    await expect(runSequentially(tasks)).rejects.toThrow('boom');
  });

  it('handles empty task list', async () => {
    const res = await runSequentially([]);
    expect(res).toEqual([]);
  });
});
