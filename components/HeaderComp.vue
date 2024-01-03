<template>
  <div class="header">
    <div class="first-header">
      <div class="logo">
        <nuxt-link to="/">
          <v-col cols="auto">
            <v-btn
              size="x-large"
              icon="mdi-home-circle"
              @click="changeNavigator('', '')"
            />
          </v-col>
        </nuxt-link>
      </div>
      <div class="navigator">{{ navigatorNm }}</div>
    </div>

    <div class="menu">
      <div class="d-flex justify-space-around" style="gap: 20px; padding: 20px">
        <v-menu v-for="menuLv1Item in menuLv1Items" :key="menuLv1Item.menuId">
          <template #activator="{ props }">
            <v-btn color="warning" size="large" v-bind="props">
              {{ menuLv1Item['menuNm'] }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="menuLv2Item in menuLv2Items.filter(
                (c) => c.prnMenuId === menuLv1Item.menuId
              )"
              :key="menuLv2Item.menuId"
              :value="menuLv2Item.menuId"
            >
              <nuxt-link :to="menuLv2Item.url">
                <v-list-item-title
                  @click="
                    changeNavigator(
                      menuLv1Item['menuNm'],
                      menuLv2Item['menuNm']
                    )
                  "
                >
                  {{ menuLv2Item['menuNm'] }}
                </v-list-item-title>
              </nuxt-link>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { headerStore } from '@/stores/header'
import { getSessionStorage } from '~/utils/storage'

export default defineComponent({
  name: 'HeaderComp',
  setup() {
    const navigatorNm = ref('Main')
    const menuLv1Items = ref([])
    const menuLv2Items = ref([])
    const store = headerStore()

    const changeNavigator = (parentNm: string, childNm: string) => {
      if (parentNm !== '' && childNm !== '') {
        navigatorNm.value = `${parentNm} < ${childNm}`
      } else if (parentNm === '' && childNm === '') {
        navigatorNm.value = 'Main'
      }

      store.$state.navigatorNm = navigatorNm.value
    }

    const getMenuData = async () => {
      await store.getMenuData()
      menuLv1Items.value = store.$state.menuLv1Items
      menuLv2Items.value = store.$state.menuLv2Items
    }

    getMenuData()

    onMounted(() => {
      const headerStorage = getSessionStorage('header')
      navigatorNm.value = headerStorage.navigatorNm
    })

    return {
      navigatorNm,
      menuLv1Items,
      menuLv2Items,
      changeNavigator
    }
  }
})
</script>

<style scoped>
.first-header {
  display: flex;
  gap: 30px;
}
.navigator {
  font-size: 20px;
  border: 1px solid #ffffff;
  width: 300px;
  margin: 10px;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
}
</style>
