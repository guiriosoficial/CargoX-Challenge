import dayjs from 'dayjs'

export function dateTime (
  dateTime: Date | string | number = new Date(),
  format = 'DD/MM/YYYY HH:mm'
): string {
  return dayjs(dateTime).isValid()
    ? dayjs(dateTime).format(format)
    : String(dateTime)
}
