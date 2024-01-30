<template>
  <div v-if="isLoginContainer" class="container">
    <div class="left">
      <nav-comp />
    </div>
    <div class="right">
      <div class="right-container">
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

<script lang="ts">
import { commonStore } from '~/stores/common'
import { ref } from 'vue'

export default {
  setup() {
    const common = commonStore()
    const isLogin = ref(common.isLogin)
    const isLoginContainer = ref(false)

    onMounted(() => {
      if (isLogin.value === true) {
        isLoginContainer.value = true
      } else {
        isLoginContainer.value = false
      }
    })

    watch(
      () => common.isLogin,
      (newValue) => {
        isLoginContainer.value = newValue
      }
    )

    return {
      isLoginContainer
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/style.scss';
</style>
