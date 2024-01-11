import { defineStore } from 'pinia'
import userMenus from '@/assets/menu.json'

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
    getMenuData(): void {
      this.menuLv1Items = []
      this.menuLv2Items = []
      this.setMenuState(userMenus)
    },
    setMenuState(menuItems: { menuLv1Items: []; menuLv2Items: [] }) {
      const lv1Items: [] = menuItems.menuLv1Items
      const lv2Items: [] = menuItems.menuLv2Items

      for (let i: number = 0; i < lv1Items.length; i++) {
        const menuLv1Item: MenuLv1Item = { menuId: '', menuNm: '' }
        const { menuId, menuNm } = lv1Items[i]
        menuLv1Item.menuId = menuId
        menuLv1Item.menuNm = menuNm

        this.menuLv1Items.push(menuLv1Item)
      }

      for (let j: number = 0; j < lv2Items.length; j++) {
        const menuLv2Item: MenuLv2Item = {
          menuId: '',
          menuNm: '',
          prnMenuId: '',
          url: ''
        }

        const { menuId, menuNm, prnMenuId, url } = lv2Items[j]

        menuLv2Item.menuId = menuId
        menuLv2Item.menuNm = menuNm
        menuLv2Item.prnMenuId = prnMenuId
        menuLv2Item.url = url

        this.menuLv2Items.push(menuLv2Item)
      }
    }
  },
  persist: {
    storage: persistedState.sessionStorage
  }
})
