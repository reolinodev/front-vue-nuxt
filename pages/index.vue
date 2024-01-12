<template>
  <div class="content-container">메인화면</div>
</template>

<script setup lang="ts">
import { commonStore } from '~/stores/common'
import { headerStore } from '~/stores/header'

const common = commonStore()
const header = headerStore()

const router = useRouter()
if (!common.isLogin) {
  router.push('login')
} else {
  header.navigatorNm = 'Main'
}
</script>

<style scoped></style>
