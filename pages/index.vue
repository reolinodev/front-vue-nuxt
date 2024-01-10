<template>
  <div>메인페이지</div>
</template>

<script setup lang="ts">
import { commonStore } from '~/stores/common'

const common = commonStore()

const router = useRouter()
if (!common.isLogin) {
  router.push('login')
}
</script>

<style scoped></style>
