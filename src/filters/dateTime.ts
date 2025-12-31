import moment from 'moment'

function dateTime (dateTime: Date | string | number = new Date(), format = 'DD/MM/YYYY HH:mm'): string {
  return moment(dateTime).isValid()
    ? moment(dateTime).format(format)
    : String(dateTime)
}

export default dateTime
