import { defineStore } from 'pinia'
import menuData from '@/assets/json/menu.json'

interface MenuLv1Item {
  id: string
  menuNm: string
  icon: string
  url: string
}

interface MenuLv2Item {
  id: string
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

    setMenuState(menuData: {
      mainMenuUrl: string
      mainMenuNm: string
      defaultLv1Icon: string
      defaultLv2Icon: string

      menuLv1Items: {
        id: string
        menuNm: string
        icon: string
        url: string
      }[]

      menuLv2Items: {
        id: string
        menuNm: string
        prnMenuId: string
        icon: string
        url: string
      }[]
    }): void {
      this.mainMenuUrl = menuData.mainMenuUrl
      this.mainMenuNm = menuData.mainMenuNm

      menuData.menuLv1Items.forEach((menuDataMenuLv1Item) => {
        const menuLv1Item: MenuLv1Item = {
          id: menuDataMenuLv1Item.id,
          menuNm: menuDataMenuLv1Item.menuNm,
          url: menuDataMenuLv1Item.url,
          icon:
            menuDataMenuLv1Item.icon !== ''
              ? menuDataMenuLv1Item.icon
              : menuData.defaultLv1Icon
        }
        this.menuLv1Items.push(menuLv1Item)
      })

      menuData.menuLv2Items.forEach((menuDataMenuLv2Item) => {
        const menuLv2Item: MenuLv2Item = {
          id: menuDataMenuLv2Item.id,
          menuNm: menuDataMenuLv2Item.menuNm,
          prnMenuId: menuDataMenuLv2Item.prnMenuId,
          url: menuDataMenuLv2Item.url,
          icon:
            menuDataMenuLv2Item.icon !== ''
              ? menuDataMenuLv2Item.icon
              : menuData.defaultLv2Icon
        }
        this.menuLv2Items.push(menuLv2Item)
      })
    }
  },
  persist: {
    storage: persistedState.sessionStorage
  }
})
