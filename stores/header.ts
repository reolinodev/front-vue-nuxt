import { defineStore } from 'pinia'
import userMenus from '@/assets/menu.json'

// const baseURL = import.meta.env.API_URL

const baseURL: string = process.env.TEST

interface MenuLv1Item {
  menuId: string
  menuNm: string
}

interface MenuLv2Item {
  menuId: string
  menuNm: string
  prnMenuId: string
  url: string
}

export const headerStore = defineStore('header', {
  state: () => ({
    menuLv1Items: [] as MenuLv1Item[],
    menuLv2Items: [] as MenuLv2Item[],
    navigatorNm: 'Main'
  }),
  actions: {
    async getMenuData(): void {
      this.menuLv1Items = []
      this.menuLv2Items = []

      // todo 실제로 메뉴를 조회하게끔 수정
      await this.setMenuState(userMenus)
      console.log('222', baseURL)
    },
    setMenuState(menuItems: { menuLv1Items: []; menuLv2Items: [] }) {
      const lv1Items: [] = menuItems.menuLv1Items
      const lv2Items: [] = menuItems.menuLv2Items

      for (let i: number = 0; i < lv1Items.length; i++) {
        const menuLv1Item: MenuLv1Item = { menuId: '', menuNm: '' }
        menuLv1Item.menuId = lv1Items[i].menuId
        menuLv1Item.menuNm = lv1Items[i].menuNm

        this.menuLv1Items.push(menuLv1Item)
      }

      for (let j: number = 0; j < lv2Items.length; j++) {
        const menuLv2Item: MenuLv2Item = {
          menuId: '',
          menuNm: '',
          prnMenuId: '',
          url: ''
        }
        menuLv2Item.menuId = lv2Items[j].menuId
        menuLv2Item.menuNm = lv2Items[j].menuNm
        menuLv2Item.prnMenuId = lv2Items[j].prnMenuId
        menuLv2Item.url = lv2Items[j].url

        this.menuLv2Items.push(menuLv2Item)
      }
    }
  },
  persist: {
    storage: persistedState.sessionStorage
  }
})
