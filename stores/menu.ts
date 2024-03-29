import { defineStore } from 'pinia'
import menus from '@/assets/json/menu.json'

export interface Menu {
  menuId: string
  menuNm: string
  icon: string
  url: string
  prnMenuId?: string
  useYn?: string
  useYnLabel?: string
  menuLv?: string
  ord?: string
  navYn?: string
}

export interface SelectMenu {
  menuItem: Menu
  parentMenuItems: Menu[]
  mode?: string
}

export const menuStore = defineStore('menu', {
  state: (): { menuItems: Menu[] } => ({
    menuItems: []
  }),
  actions: {
    getMenus(): void {
      this.menuItems = menus.menuItems
    }
  }
})
