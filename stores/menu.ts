import { defineStore } from 'pinia'
import menus from '@/assets/json/menu.json'

export interface MenuItem {
  id: string
  label: string
  icon?: string
  url: string
  upperId?: string
  useYn: string
  lv?: string
  ord?: string
}

export interface Menu {
  menuId: string
  menuNm: string
  icon: string
  url: string
  prnMenuId: string
  useYn: string
  useYnLabel: string
  menuLv: string
  ord: string
}

export const menuStore = defineStore('menu', {
  state: (): { menuItems: MenuItem[] } => ({
    menuItems: []
  }),
  actions: {
    getMenus(): void {
      this.menuItems = []
      this.setMenus(menus.menuItems)
    },
    setMenus(data: Menu[]) {
      for (let i = 0; i < data.length; i++) {
        const menuItem: MenuItem = {
          id: data[i].menuId,
          label: data[i].menuNm,
          icon: data[i].icon,
          url: data[i].url,
          upperId: data[i].prnMenuId,
          useYn: data[i].useYn,
          lv: data[i].menuLv,
          ord: data[i].ord
        }
        this.menuItems.push(menuItem)
      }
    }
  }
})
