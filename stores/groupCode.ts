import { defineStore } from 'pinia'
import groupCodes from '@/assets/json/groupCodes.json'

interface GroupCode {
  no: number
  id: string
  codeGrpNm: string
  codeGrpVal: string
  useYn: string
  useYnLabel: string
}

export const groupCodeStore = defineStore('groupCode', {
  state: () => ({
    groupCodes: []
  }),
  actions: {
    getGroupCodes(): void {
      this.groupCodes = []
      this.setGroupCodes(groupCodes.data)
    },
    setGroupCodes(
      data: [
        {
          id: string
          codeGrpNm: string
          codeGrpVal: string
          useYn: string
          useYnLabel: string
        }
      ]
    ) {
      for (let i: number = 0; i < data.length; i++) {
        const groupCode: GroupCode = {
          no: i + 1,
          id: data[i].id,
          codeGrpNm: data[i].codeGrpNm,
          codeGrpVal: data[i].codeGrpVal,
          useYn: data[i].useYn,
          useYnLabel: data[i].useYnLabel
        }

        this.groupCodes.push(groupCode)
      }
    }
  }
})
