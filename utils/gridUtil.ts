import _ from 'lodash'
import { mainStore } from '~/stores/main'

export function gridValidation(data: any, filters: []): boolean {
  const main = mainStore()

  let chk: boolean = true

  for (let i: number = 0; i < filters.length; i++) {
    let message: string = ''

    const filter = filters[i]
    const field = filter.field
    const label = filter.label
    const type = filter.type

    const countObj = _.countBy(data, field)
    const status = checkStatus(countObj)

    if ((type === 'NULL' || type === 'NULL|DUP') && status === 'NULL') {
      chk = false
      message = `${label} 항목에 NULL 값이 존재합니다.`
    } else if ((type === 'DUP' || type === 'NULL|DUP') && status === 'DUP') {
      chk = false
      message = `${label} 항목에 중복된 값이 존재합니다.`
    }

    if (!chk) {
      main.alertOption = {
        title: 'Warning',
        text: message
      }
      main.isAlert = true

      return chk
    }
  }

  return chk
}

const checkStatus = (value: any): string => {
  const keys = Object.keys(value)
  let status = 'OK'

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const val = value[key]

    if (key === '' && val > 0) {
      status = 'NULL'
    } else if (val > 1) {
      status = 'DUP'
    }
  }

  return status
}
