import parsePhoneNumber from 'libphonenumber-js'

export function phoneNumber (value: string = ''): string {
  const phoneNumber = parsePhoneNumber(value)

  return phoneNumber?.formatInternational() ?? value
}
