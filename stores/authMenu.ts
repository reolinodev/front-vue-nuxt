import { defineStore } from 'pinia'
import authMenus from '@/assets/json/authMenus.json'
import _ from 'lodash'

interface AuthMenuTree {
  id: string
  label: string
  upperId: string
  lv: string
  useYn: string
}

interface AuthMenu {
  menuId: string
  authId: string
  menuNm: string
  prnMenuId: string
  useYn: string
  menuLv: string
}

export const authMenuStore = defineStore('authMenu', {
  state: (): { authMenuTreeItems: AuthMenuTree[] } => ({
    authMenuTreeItems: []
  }),
  actions: {
    getAuthMenus(authId: string): void {
      this.authMenuTreeItems = []

      const filteredAuths = _.filter(
        authMenus.authMenuItems,
        function (authMenuItem: AuthMenu) {
          return authMenuItem.authId === authId
        }
      )

      this.setAuthMenus(filteredAuths)
    },
    setAuthMenus(authMenuItems: AuthMenu[]): void {
      for (let i: number = 0; i < authMenuItems.length; i++) {
        const authMenuItem: AuthMenuTree = {
          id: authMenuItems[i].menuId,
          label: authMenuItems[i].menuNm,
          upperId: authMenuItems[i].prnMenuId,
          lv: authMenuItems[i].menuLv,
          useYn: authMenuItems[i].useYn
        }
        this.authMenuTreeItems.push(authMenuItem)
      }
    }
  }
})
