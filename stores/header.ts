import { defineStore } from 'pinia'

export const headerStore = defineStore('header', {
  state: () => ({
    alertCount: 0
  }),
  actions: {
    getAlertCount(): void {
      this.alertCount = 10
    }
  },
  persist: {
    storage: persistedState.sessionStorage
  }
})
