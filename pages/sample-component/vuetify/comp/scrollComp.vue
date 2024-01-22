<template>
  <v-sheet width="`100%`" class="mx-auto">
    <v-row>
      <v-col cols="12">
        <div class="content-sub-title"># 1.내부스크롤</div>
        <v-virtual-scroll :items="items" height="200">
          <template #default="{ item }">
            <v-list-item :title="`Employee Name`" :subtitle="`Badge #${item}`">
              <template #prepend>
                <v-icon class="bg-primary">mdi-account</v-icon>
              </template>

              <template #append>
                <v-btn icon="mdi-pencil" size="x-small" variant="tonal" />
              </template>
            </v-list-item>
          </template>
        </v-virtual-scroll>
      </v-col>
      <v-col cols="12">
        <div class="content-sub-title"># 2.무한스크롤</div>
        <v-infinite-scroll height="300" mode="manual" @load="load">
          <template v-for="(item, index) in items" :key="item">
            <div :class="['px-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
              Item number {{ item }}
            </div>
          </template>
        </v-infinite-scroll>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ScrollComp',
  setup: function () {
    const items = ref(Array.from({ length: 50 }, (k, v) => v + 1))

    const api = async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            Array.from({ length: 10 }, (k, v) => v + items.value.at(-1) + 1)
          )
        }, 1000)
      })
    }

    const load = async ({ done }) => {
      try {
        // Perform API call
        const res = await api()

        // Update the reactive property 'items'
        items.value.push(...res)

        done('ok')
      } catch (error) {
        console.error('Error:', error)
        done('error') // Handle error state as needed
      }
    }

    return { items, api, load }
  }
})
</script>

<style scoped></style>
