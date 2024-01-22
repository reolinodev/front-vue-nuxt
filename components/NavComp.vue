<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer v-model="drawer" :rail="rail" @click="closeRail">
        <v-list>
          <v-list-item prepend-icon="mdi-home-city" nav>
            <div
              class="nav-home-title"
              @click="menuRouter(mainMenuUrl, mainMenuNm)"
            >
              Home
            </div>

            <template #append>
              <v-btn
                variant="text"
                icon="mdi-chevron-left"
                @click.stop="rail = !rail"
              />
            </template>
          </v-list-item>

          <v-divider />

          <v-list
            v-for="menuLv1Item in menuLv1Items"
            :key="menuLv1Item.menuId"
            v-model:opened="open"
          >
            <v-list-group
              v-if="menuLv1Item.url !== ''"
              :value="menuLv1Item.menuId"
            >
              <v-list-item :prepend-icon="menuLv1Item.icon">
                <v-list-item-title
                  @click="menuRouter(menuLv1Item.url, menuLv1Item.menuNm)"
                  v-text="menuLv1Item.menuNm"
                />
              </v-list-item>
            </v-list-group>

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
      <v-main style="height: 250px" />
    </v-layout>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { navStore } from '@/stores/nav'
import { commonStore } from '@/stores/common'

export default defineComponent({
  name: 'NavComp',
  setup: function () {
    const nav = navStore()
    const common = commonStore()

    const router = useRouter()

    const drawer = ref(true)
    const rail = ref(true)
    const open = ref([''])

    const menuLv1Items = ref([])
    const menuLv2Items = ref([])
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
      () => nav,
      (newValue) => {
        console.log('navigation 수정', newValue)
      }
    )

    const closeRail = () => {
      rail.value = false
    }

    onMounted(() => {
      setMenuData()
    })
    return {
      drawer,
      rail,
      open,
      menuLv1Items,
      menuLv2Items,
      mainMenuUrl,
      mainMenuNm,
      menuRouter,
      closeRail
    }
  }
})
</script>

<style scoped>
.nav-home-title {
  height: 25px;
  color: #c8a7a7;
}
</style>
