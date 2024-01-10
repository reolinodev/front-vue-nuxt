<template>
  <div v-if="isLoginContainer" class="container">
    <header-comp />
    <div class="content">
      <slot />
    </div>
    <footer-comp />
  </div>
  <div v-else class="container">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import { commonStore } from '~/stores/common'

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
