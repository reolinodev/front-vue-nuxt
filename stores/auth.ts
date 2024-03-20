import { defineStore } from 'pinia'
import auths from '@/assets/json/auths.json'

interface Auth {
  no?: number
  authId: string
  authNm: string
  authVal: string
  useYn: string
  useYnLabel: string
  ord: string
}

export const authStore = defineStore('auth', {
  state: (): { auths: Auth[] } => ({
    auths: []
  }),
  actions: {
    getAuths(): void {
      this.auths = []
      this.setAuths(auths.data)
    },
    setAuths(data: Auth[]) {
      for (let i: number = 0; i < data.length; i++) {
        const auth: Auth = {
          no: i + 1,
          authId: data[i].authId,
          authNm: data[i].authNm,
          authVal: data[i].authVal,
          useYn: data[i].useYn,
          useYnLabel: data[i].useYnLabel,
          ord: data[i].ord
        }

        this.auths.push(auth)
      }
    }
  }
})
