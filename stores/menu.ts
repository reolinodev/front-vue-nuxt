import { defineStore } from 'pinia'
import menus from '@/assets/json/menu.json'

export interface Tree {
  id: string
  label: string
  icon: string
  url: string
  upperId: string
  useYn: string
  lv: string
  ord: string
}

export const menuStore = defineStore('menu', {
  state: () => ({
    menuItems: []
  }),
  actions: {
    getMenus(): void {
      this.menuItems = []
      this.setMenus(menus.menuItems)
    },
    setMenus(
      menuItems: [
        {
          id: string
          menuNm: string
          icon: string
          url: string
          prnMenuId: string
          useYn: string
          useYnLabel: string
          menuLv: string
          ord: string
        }
      ]
    ) {
      for (let i = 0; i < menuItems.length; i++) {
        const menuItem: Tree = {
          id: menuItems[i].id,
          label: menuItems[i].menuNm,
          icon: menuItems[i].icon,
          url: menuItems[i].url,
          upperId: menuItems[i].prnMenuId,
          useYn: menuItems[i].useYn,
          lv: menuItems[i].menuLv,
          ord: menuItems[i].ord
        }
        this.menuItems.push(menuItem)
      }
    }
  }
})
