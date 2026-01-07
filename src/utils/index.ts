const MIN_DELAY_MS = 500;
const RANDOM_RANGE_MS = 1000;

export function sleep(delay?: number): Promise<void> {
  const duration = delay ?? Math.floor(Math.random() * RANDOM_RANGE_MS) + MIN_DELAY_MS;
  return new Promise((resolve) => setTimeout(resolve, duration));
}