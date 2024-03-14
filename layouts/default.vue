<template>
  <div v-if="isLoginContainer" class="container">
    <div class="left">
      <nav-comp />
    </div>
    <div class="right">
      <div class="right-container">
        <loading-comp />
        <confirm-alert-comp />
        <alert-comp />

        <div class="header">
          <header-comp />
        </div>

        <div class="content">
          <slot />
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { commonStore } from '~/stores/common'
import { onMounted, ref, watch } from 'vue'

const common = commonStore()
const isLogin = ref<boolean>(common.isLogin)
const isLoginContainer = ref<boolean>(false)

onMounted(() => {
  isLoginContainer.value = isLogin.value === true
})

watch(
  () => common.isLogin,
  (newValue) => {
    isLoginContainer.value = newValue
  }
)
</script>

<style lang="scss">
@import '@/scss/style.scss';
</style>
