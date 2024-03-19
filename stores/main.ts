import { defineStore } from 'pinia'

interface AlertOption {
  text: string
  title?: string
  icon?: string
}

interface ConfirmAlertOption {
  text: string
  title?: string
  icon?: string
  fnc?: any
}

export const mainStore = defineStore('main', {
  state: () => ({
    isLoading: false,
    isAlert: false,
    isConfirmAlert: false,
    alertOption: <AlertOption>{},
    confirmAlertOption: <ConfirmAlertOption>{}
  })
})
