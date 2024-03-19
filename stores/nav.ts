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

    setMenuState(menuData: {
      mainMenuUrl: string
      mainMenuNm: string
      defaultLv1Icon: string
      defaultLv2Icon: string

      menuLv1Items: {
        menuId: string
        menuNm: string
        icon: string
        url: string
      }[]

      menuLv2Items: {
        menuId: string
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
          menuId: menuDataMenuLv1Item.menuId,
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
          menuId: menuDataMenuLv2Item.menuId,
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
