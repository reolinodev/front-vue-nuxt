<template>
  <div v-if="isLogin" class="container">
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
    const isLogin = ref(common.$state.isLogin)

    watch(
      () => common.$state.isLogin,
      (newValue) => {
        isLogin.value = newValue
        console.log('afasdf', newValue)
      }
    )

    return {
      isLogin
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/style.scss';
</style>
