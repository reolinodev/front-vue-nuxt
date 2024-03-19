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
            <v-btn icon v-bind="props" size="x-large" @click="logoutConfirm">
              <v-icon> mdi-export </v-icon>
            </v-btn>
          </template>
          <span class="text-subtitle-1">Logout</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-toolbar>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { commonStore } from '@/stores/common'
import { mainStore } from '@/stores/main'
import { headerStore } from '@/stores/header'
import { clearSessionStorage } from '@/utils/storage'

const common = commonStore()
const main = mainStore()
const header = headerStore()
const router = useRouter()

const menuNm = ref<string>('')
const alertCount = ref<number>(0)

const infoShow = ref<boolean>(false)
const exportshow = ref<boolean>(false)

// 로그아웃 확인
const logoutConfirm = () => {
  main.confirmAlertOption = {
    text: '로그아웃 하시겠습니까?',
    fnc: logout
  }
  main.isConfirmAlert = true
}

// 로그아웃 처리
const logout = () => {
  common.isLogin = false
  main.isLoading = false
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
</script>

<style scoped></style>
