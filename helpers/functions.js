import moment from 'moment'

export const formatDate = (data, dateFormat = 'LL') =>
  data && moment(data).format(dateFormat)
