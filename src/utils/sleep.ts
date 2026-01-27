import { generateRandomNumber } from '@/utils/generateRandomNumber'

const MIN_DELAY_MS = 400
const MAX_DELAY_MS = 1200

export function sleep(delay?: number): Promise<void> {
  const duration = delay ?? generateRandomNumber(MIN_DELAY_MS, MAX_DELAY_MS)
  return new Promise((resolve) => setTimeout(resolve, duration))
}
