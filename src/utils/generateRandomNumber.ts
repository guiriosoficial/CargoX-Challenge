const MIN_ASSERTION = 1

export function generateRandomNumber(
  min: number = -Infinity,
  max: number = Infinity
): number {
  const randomRange = max - min + MIN_ASSERTION
  return Math.floor(Math.random() * (randomRange)) + min
}
