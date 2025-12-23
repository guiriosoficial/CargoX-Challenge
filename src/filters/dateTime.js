import moment from 'moment'

function dateTime (dateTime = '', format = 'DD/MM/YYYY HH:mm') {
  return moment(dateTime).isValid()
    ? moment(dateTime).format(format)
    : ''
}

export default dateTime
