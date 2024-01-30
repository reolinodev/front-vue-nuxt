<template>
  <v-toolbar dark prominent color="#121212">
    <v-row>
      <v-col cols="3" class="d-flex pa-8">
        <v-icon
          icon="mdi-view-parallel"
          color="info"
          class="header-left_icon"
        />
        <div class="text-subtitle-1 font-weight-bold pl-1">{{ menuNm }}</div>
      </v-col>
      <v-col class="d-flex justify-end pt-4" cols="8">
        <v-btn size="x-large" icon="mdi-bell-alert" color="warning">
          <v-badge color="error" :content="alertCount">
            <v-icon />
          </v-badge>
          <v-tooltip activator="parent" location="bottom">
            <span class="text-subtitle-1">Alarm</span>
          </v-tooltip>
        </v-btn>

        <v-tooltip v-model="infoShow" location="bottom">
          <template #activator="{ props }">
            <v-btn icon v-bind="props" size="x-large">
              <v-icon color="info"> mdi-account-star </v-icon>
            </v-btn>
          </template>
          <span class="text-subtitle-1">User Info</span>
        </v-tooltip>

        <v-tooltip v-model="exportshow" location="bottom">
          <template #activator="{ props }">
            <v-btn icon v-bind="props" size="x-large" @click="logout">
              <v-icon> mdi-export </v-icon>
            </v-btn>
          </template>
          <span class="text-subtitle-1">Logout</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-toolbar>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { commonStore } from '@/stores/common'
import { headerStore } from '@/stores/header'
import { clearSessionStorage } from '@/utils/storage'

export default defineComponent({
  name: 'HeaderComp',

  setup: function () {
    const common = commonStore()
    const header = headerStore()
    const router = useRouter()

    const menuNm = ref('')
    const alertCount = ref(0)

    const infoShow = ref(false)
    const exportshow = ref(false)

    const logout = () => {
      common.isLogin = false
      common.isLoding = false
      common.currentMenuNm = ''
      common.currentUrl = ''
      clearSessionStorage()
      router.push('/login')
    }

    onMounted(() => {
      header.getAlertCount()
      alertCount.value = header.alertCount
      menuNm.value = common.currentMenuNm
    })

    watch(
      () => common.currentMenuNm,
      (newValue) => {
        menuNm.value = newValue
      }
    )

    return {
      menuNm,
      alertCount,
      infoShow,
      exportshow,
      logout
    }
  }
})
</script>

<style scoped></style>
