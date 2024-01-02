<script setup lang="ts"></script>

<template>
  <div class="container">
    <Header />
    <div class="content">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import '~/scss/style.scss';
</style>
