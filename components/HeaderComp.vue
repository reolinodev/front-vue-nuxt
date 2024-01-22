<template>
  <v-toolbar dark prominent color="#121212">
    <v-row>
      <v-col cols="4" class="header-left">
        <v-icon
          icon="mdi-view-parallel"
          color="info"
          class="header-left_icon"
        />
        <div class="header-left_title" style="">{{ menuNm }}</div>
      </v-col>
      <v-col class="header-right" cols="8">
        <v-btn size="x-large" icon="mdi-bell-alert" color="warning">
          <v-badge color="error" :content="alertCount">
            <v-icon />
          </v-badge>
        </v-btn>

        <v-btn icon="mdi-account-star" size="x-large" color="info" />

        <v-btn icon="mdi-export" size="x-large" @click="logout" />
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

    const logout = () => {
      common.isLogin = false
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
      logout
    }
  }
})
</script>

<style scoped></style>
