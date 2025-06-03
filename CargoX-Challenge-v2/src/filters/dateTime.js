import moment from 'moment'

export default function (dateTime = '', format = 'DD/MM/YYYY HH:mm') {
  const splitetDate = String(dateTime).split('/').map(i => Number(i))

  dateTime = splitetDate.length === 3
    ? new Date(splitetDate[0], splitetDate[2], splitetDate[1])
    : dateTime

  return moment(dateTime).isValid()
    ? moment(dateTime).format(format)
    : ''
}
