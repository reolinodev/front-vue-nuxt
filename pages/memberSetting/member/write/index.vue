<template>
  <v-card min-height="900">
    <v-card-item width="100%">
      <v-row class="ma-auto">
        <v-col cols="12" class="d-flex ga-3">
          <div>등록 화면</div>

          <NuxtLink to="/memberSetting/member">
            <v-btn color="error" size="x-large" variant="outlined">
              BACK
              <v-icon end icon="mdi-arrow-left-circle" />
            </v-btn>
          </NuxtLink>
        </v-col>
      </v-row>
    </v-card-item>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  setup() {
    const memberId = ref<number | null>(null)

    onMounted(() => {})

    return {
      memberId
    }
  }
})
</script>

<style scoped></style>

<style scoped></style>
