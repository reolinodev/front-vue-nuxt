<template>
  <v-layout>
    <v-dialog v-model="isLoading">
      <div class="loading-container">
        <v-progress-circular
          :size="90"
          :width="10"
          color="purple"
          indeterminate
        />
      </div>
    </v-dialog>
  </v-layout>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { mainStore } from '@/stores/main'

const main = mainStore()

const isLoading = computed(() => main.isLoading)

onMounted(() => {
  main.isLoading = false
})
</script>

<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #aebbbb;
  opacity: 0.3;
}
</style>
