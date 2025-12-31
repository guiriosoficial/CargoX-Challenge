function phoneNumber (value: string = ''): string {
  if (!value) return ''
  if (!/^\d+$/.test(value)) return value

  const template1 = 'C-D'
  const template2 = '(B) C-D'
  const template3 = '+A (B) C-D'

  if (value.length === 8) {
    return template1
      .replace('C', value.substring(0, 4))
      .replace('D', value.substring(5, 4 + 5))
  }
  if (value.length === 9) {
    return template1
      .replace('C', value.substring(0, 5))
      .replace('D', value.substring(6, 4 + 6))
  }
  if (value.length === 10) {
    return template2
      .replace('B', value.substring(0, 2))
      .replace('C', value.substring(2, 4 + 2))
      .replace('D', value.substring(6, 4 + 6))
  }
  if (value.length === 11) {
    return template2
      .replace('B', value.substring(0, 2))
      .replace('C', value.substring(2, 5 + 2))
      .replace('D', value.substring(7, 4 + 7))
  }
  if (value.length === 12) {
    return template3
      .replace('A', value.substring(0, 2))
      .replace('B', value.substring(2, 2 + 2))
      .replace('C', value.substring(4, 4 + 4))
      .replace('D', value.substring(8, 4 + 8))
  }
  if (value.length === 13) {
    return template3
      .replace('A', value.substring(0, 2))
      .replace('B', value.substring(2, 2 + 2))
      .replace('C', value.substring(4, 5 + 4))
      .replace('D', value.substring(9, 4 + 9))
  }

  return value
}

export default phoneNumber
