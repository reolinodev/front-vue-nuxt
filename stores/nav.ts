import { defineStore } from 'pinia'
import menuData from '@/assets/json/menu.json'

interface MenuLv1Item {
  menuId: string
  menuNm: string
  icon: string
  url: string
}

interface MenuLv2Item {
  menuId: string
  menuNm: string
  prnMenuId: string
  icon: string
  url: string
}

export const navStore = defineStore('nav', {
  state: () => ({
    menuLv1Items: [] as MenuLv1Item[],
    menuLv2Items: [] as MenuLv2Item[],
    mainMenuUrl: '',
    mainMenuNm: ''
  }),
  actions: {
    getMenuData(): void {
      this.menuLv1Items = []
      this.menuLv2Items = []
      this.mainMenuUrl = ''
      this.mainMenuNm = ''
      this.setMenuState(menuData)
    },
    // eslint-disable-next-line @typescript-eslint/no-shadow
    setMenuState(menuData) {
      this.mainMenuUrl = menuData.mainMenuUrl
      this.mainMenuNm = menuData.mainMenuNm

      for (let i: number = 0; i < menuData.menuLv1Items.length; i++) {
        const menuLv1Item: MenuLv1Item = {
          menuId: '',
          menuNm: '',
          icon: '',
          url: ''
        }
        const menuDataMenuLv1Item = menuData.menuLv1Items[i]
        menuLv1Item.menuId = menuDataMenuLv1Item.menuId
        menuLv1Item.menuNm = menuDataMenuLv1Item.menuNm
        menuLv1Item.url = menuDataMenuLv1Item.url

        if (menuDataMenuLv1Item.icon !== '') {
          menuLv1Item.icon = menuDataMenuLv1Item.icon
        } else {
          menuLv1Item.icon = menuData.defaultLv1Icon
        }

        this.menuLv1Items.push(menuLv1Item)
      }

      for (let j: number = 0; j < menuData.menuLv2Items.length; j++) {
        const menuLv2Item: MenuLv2Item = {
          menuId: '',
          menuNm: '',
          prnMenuId: '',
          icon: '',
          url: ''
        }
        const menuDataMenuLv2Item = menuData.menuLv2Items[j]
        menuLv2Item.menuId = menuDataMenuLv2Item.menuId
        menuLv2Item.menuNm = menuDataMenuLv2Item.menuNm
        menuLv2Item.url = menuDataMenuLv2Item.url
        menuLv2Item.prnMenuId = menuDataMenuLv2Item.prnMenuId

        if (menuDataMenuLv2Item.icon !== '') {
          menuLv2Item.icon = menuDataMenuLv2Item.icon
        } else {
          menuLv2Item.icon = menuData.defaultLv2Icon
        }

        this.menuLv2Items.push(menuLv2Item)
      }
    }
  },
  persist: {
    storage: persistedState.sessionStorage
  }
})
