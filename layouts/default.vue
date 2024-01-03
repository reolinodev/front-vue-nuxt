<script setup lang="ts">
import Header from '~/components/HeaderComp.vue'
import Footer from '~/components/FooterComp.vue'
</script>

<template>
  <div class="container">
    <Header />
    <div class="content">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
@import '@/scss/style.scss';
</style>
