<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer v-model="drawer" :rail="rail" @click="closeRail">
        <v-list>
          <v-list-item prepend-icon="mdi-home" nav>
            <div
              class="nav-home-title"
              @click="menuRouter(mainMenuUrl, mainMenuNm)"
            >
              HOME
            </div>

            <template #append>
              <v-btn
                variant="text"
                icon="mdi-chevron-left"
                @click.stop="rail = !rail"
              />
            </template>
          </v-list-item>

          <v-divider class="border-opacity-50" color="default" />

          <v-list
            v-for="menuLv1Item in menuLv1Items"
            :key="menuLv1Item.menuId"
            v-model:opened="open"
          >
            <v-list-item
              v-if="menuLv1Item.url !== ''"
              :prepend-icon="menuLv1Item.icon"
              nav
            >
              <div
                class="nav-lv1-title"
                @click="menuRouter(menuLv1Item.url, menuLv1Item.menuNm)"
              >
                {{ menuLv1Item.menuNm }}
              </div>
            </v-list-item>

            <v-list-group v-else :value="menuLv1Item.menuId">
              <template #activator="{ props }">
                <v-list-item
                  v-bind="props"
                  :value="menuLv1Item.menuId"
                  :prepend-icon="menuLv1Item.icon"
                  :title="menuLv1Item.menuNm"
                />
              </template>

              <v-list-item
                v-for="menuLv2Item in menuLv2Items.filter(
                  (c) => c.prnMenuId === menuLv1Item.menuId
                )"
                :key="menuLv2Item.menuId"
                :value="menuLv2Item.menuId"
                :prepend-icon="menuLv2Item.icon"
                :title="menuLv2Item.menuNm"
                @click="menuRouter(menuLv2Item.url, menuLv2Item.menuNm)"
              />
            </v-list-group>
          </v-list>
        </v-list>
      </v-navigation-drawer>
      <v-main />
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { navStore } from '@/stores/nav'
import { commonStore } from '@/stores/common'
import type { Menu } from '~/stores/menu'

const nav = navStore()
const common = commonStore()

const router = useRouter()

const drawer = ref(true)
const rail = ref(true)
const open = ref([''])

const menuLv1Items = ref<Menu[]>([])
const menuLv2Items = ref<Menu[]>([])
const mainMenuUrl = ref('')
const mainMenuNm = ref('')

const setMenuData = () => {
  menuLv1Items.value = nav.menuLv1Items
  menuLv2Items.value = nav.menuLv2Items
  mainMenuUrl.value = nav.mainMenuUrl
  mainMenuNm.value = nav.mainMenuNm
}

const menuRouter = (url: string, menuNm: string) => {
  setTimeout(() => {
    open.value = []
    rail.value = true
  }, 1000)

  common.currentUrl = url
  common.currentMenuNm = menuNm
  router.push(url)
}

watch(
  () => nav.menuLv1Items,
  () => {
    setMenuData()
  }
)

watch(
  () => rail.value,
  (newValue) => {
    if (newValue) {
      open.value = []
    }
  }
)

const closeRail = () => {
  rail.value = false
}

onMounted(() => {
  setMenuData()
})
</script>

<style scoped>
.nav-home-title {
  height: 25px;
  color: #c8a7a7;
}

.nav-lv1-title {
  height: 25px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
}
</style>
