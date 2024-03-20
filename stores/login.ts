import { defineStore } from 'pinia'

export const loginStore = defineStore('login', {
  state: () => ({
    message: '',
    resultCode: ''
  }),
  actions: {
    loginPrc(params: any) {
      if (params.loginId === 'admin' && params.userPw === '1234') {
        this.message = 'Login was successful'
        this.resultCode = 'ok'
      } else {
        this.message = 'ID and password do not match'
        this.resultCode = 'fail'
      }
    }
  }
})
