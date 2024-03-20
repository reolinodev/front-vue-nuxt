import { defineStore } from 'pinia'
import members from '@/assets/json/members.json'

interface Member {
  no: number
  id: number
  loginId: string
  userNm: string
  mobileNo: string
  email: string
  useYn: string
  useYnLabel: string
}

export const memberStore = defineStore('member', {
  state: (): { members: Member[] } => ({
    members: []
  }),
  actions: {
    getMembers(): void {
      this.members = []
      this.setMembers(members.data)
    },
    setMembers(
      data: [
        {
          id: number
          loginId: string
          userNm: string
          mobileNo: string
          email: string
          useYn: string
          useYnLabel: string
        }
      ]
    ) {
      for (let i: number = 0; i < data.length; i++) {
        const member: Member = {
          no: i + 1,
          id: data[i].id,
          loginId: data[i].loginId,
          userNm: data[i].userNm,
          mobileNo: data[i].mobileNo,
          email: data[i].email,
          useYn: data[i].useYn,
          useYnLabel: data[i].useYnLabel
        }

        this.members.push(member)
      }
    }
  }
})
