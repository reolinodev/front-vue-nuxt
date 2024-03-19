import _ from 'lodash'
import { mainStore } from '~/stores/main'
import { GridValidOption } from '~/components/class/Grid'

interface Filter {
  field: string
  label: string
  type: string
}

export function gridValidation(data: any, filters: GridValidOption[]): boolean {
  const main = mainStore()
  let chk: boolean = true

  for (let i: number = 0; i < filters.length; i++) {
    let message: string = ''

    const filter: Filter = filters[i]
    const field: string = filter.field
    const label: string = filter.label
    const type: string = filter.type

    const countObj = _.countBy(data, field)
    const status: string = checkStatus(countObj)

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
  const keys: string[] = Object.keys(value)
  let status: string = 'OK'

  for (let i: number = 0; i < keys.length; i++) {
    const key: string = keys[i]
    const val = value[key]

    if (key === '' && val > 0) {
      status = 'NULL'
    } else if (val > 1) {
      status = 'DUP'
    }
  }

  return status
}
