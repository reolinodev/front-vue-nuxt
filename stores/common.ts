import { defineStore } from 'pinia'

export const commonStore = defineStore('common', {
  state: () => ({
    isLogin: false,
    isLoding: false,
    apiUrl: ''
  })
})
