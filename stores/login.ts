import { defineStore } from 'pinia'

export const loginStore = defineStore('login', {
  state: () => ({
    message: '',
    resultCode: ''
  }),
  actions: {
    loginPrc(params: any) {
      if (params.loginId === 'admin' && params.userPw === '1234') {
        this.message = '로그인이 성공하였습니다.'
        this.resultCode = 'ok'
      } else {
        this.message = '아이디와 비밀번호가 일치하지 않습니다.'
        this.resultCode = 'fail'
      }
    }
  }
})
