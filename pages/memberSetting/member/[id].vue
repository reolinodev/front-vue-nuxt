<template>
  <v-card min-height="900">
    <v-card-item width="100%">
      <v-row class="ma-auto">
        <v-col cols="12" class="d-flex ga-3">
          <div>상세 화면 : {{ memberId }}</div>

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
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const route = useRoute()
    const memberId = ref<number | null>(null)

    onMounted(() => {
      // prettier-ignore
      memberId.value = typeof route.params.id === 'string' ? parseInt(route.params.id, 10) : null
    })

    return {
      memberId
    }
  }
})
</script>

<style scoped></style>
