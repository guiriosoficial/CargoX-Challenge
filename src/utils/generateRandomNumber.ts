const MIN_ASSERTION = 1

export function generateRandomNumber(
  min: number,
  max: number
): number {
  if (!Number.isFinite(min) || !Number.isFinite(max)) {
    throw new Error('Min and max must be finite numbers')
  }

  const randomRange = max - min + MIN_ASSERTION
  return Math.floor(Math.random() * (randomRange)) + min
}
