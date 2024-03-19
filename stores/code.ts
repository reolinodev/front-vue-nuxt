import { defineStore } from 'pinia'
import codes from '@/assets/json/codes.json'
import _ from 'lodash'

interface Code {
  no: number
  codeId: string
  grpCdId: string
  codeNm: string
  codeVal: string
  useYn: string
  useYnLabel: string
  ord: string
}

export const codeStore = defineStore('code', {
  state: (): { codes: Code[] } => ({
    codes: []
  }),
  actions: {
    getCodes(grpCdId: string): void {
      this.codes = []

      const filteredCodes = _.filter(codes.data, function (code: Code) {
        return code.grpCdId === grpCdId
      })

      this.setCodes(filteredCodes)
    },
    setCodes(
      data: [
        {
          codeId: string
          grpCdId: string
          codeNm: string
          codeVal: string
          useYn: string
          useYnLabel: string
          ord: string
        }
      ]
    ) {
      for (let i: number = 0; i < data.length; i++) {
        const code: Code = {
          no: i + 1,
          codeId: data[i].codeId,
          grpCdId: data[i].grpCdId,
          codeNm: data[i].codeNm,
          codeVal: data[i].codeVal,
          useYn: data[i].useYn,
          useYnLabel: data[i].useYnLabel,
          ord: data[i].ord
        }

        this.codes.push(code)
      }
    }
  }
})
