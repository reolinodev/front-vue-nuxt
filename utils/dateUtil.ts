import dayjs from 'dayjs'
import 'dayjs/locale/ko'

dayjs.locale('ko')

export function getCurrentDateFormat(type: string | null): string {
  const now = dayjs()
  let dateRetunVal: string = ''

  if (type === 'YYYY') {
    dateRetunVal = `${now.year()}`
  } else if (type === 'MM') {
    dateRetunVal = `${now.month()}`
  } else if (type === 'DD') {
    dateRetunVal = `${now.date()}`
  } else if (type === 'HH') {
    dateRetunVal = `${now.hour()}`
  } else if (type === 'mm') {
    dateRetunVal = `${now.minute()}`
  } else if (type === 'ss') {
    dateRetunVal = `${now.second()}`
  } else if (type === null || type === undefined) {
    dateRetunVal = `${now.format('YYYY.MM.DD HH:mm:ss')}`
  } else {
    dateRetunVal = `${now.format(type)}`
  }

  return dateRetunVal
}

export function getDateFormat(txtVal: string, type: string): string {
  const date = dayjs(txtVal)
  let dateRetunVal: string = ''
  if (type !== null && type !== undefined) {
    dateRetunVal = `${date.format(type)}`
  } else if (txtVal.length === 8) {
    dateRetunVal = `${date.format('YYYY.MM.DD')}`
  } else if (txtVal.length === 10) {
    dateRetunVal = `${date.format('YYYY.MM.DD HH')}`
  } else if (txtVal.length === 12) {
    dateRetunVal = `${date.format('YYYY.MM.DD HH:mm')}`
  } else if (txtVal.length === 14) {
    dateRetunVal = `${date.format('YYYY.MM.DD HH:mm:ss')}`
  } else {
    dateRetunVal = ''
  }

  return dateRetunVal
}

export function getDateCalculateFormat(
  dateValue: string,
  method: string,
  period: string,
  days: number,
  formatType: string | null
): string {
  let dateRetunVal: string = ''
  let date = dayjs()
  let defaultFormat: string = 'YYYY-MM-DD'
  if (formatType !== null && formatType !== undefined) {
    defaultFormat = formatType
  }

  if (dateValue !== 'current') {
    date = dayjs(dateValue)
  }

  if (method === 'plus') {
    dateRetunVal = date.add(days, period).format(defaultFormat)
  } else if (method === 'minus') {
    dateRetunVal = date.subtract(days, period).format(defaultFormat)
  }

  return dateRetunVal
}

export function getDiffDaytoDay(
  dateValue1: string,
  dateValue2: string
): string {
  let dateRetunVal: string = ''
  let date1 = dayjs()
  let date2 = dayjs()

  if (dateValue1 !== 'current') {
    date1 = dayjs(dateValue1)
  }

  if (dateValue2 !== 'current') {
    date2 = dayjs(dateValue2)
  }

  dateRetunVal = `${date2.diff(date1)}`

  return dateRetunVal
}
