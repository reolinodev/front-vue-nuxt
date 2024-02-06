<template>
  <v-row class="pt-2 pe-5 h-auto" justify="center">
    <v-col class="pa-1" cols="12">
      <v-tabs
        v-model="tab"
        color="deep-purple-accent-1"
        next-icon="mdi-arrow-right-bold-box-outline"
        prev-icon="mdi-arrow-left-bold-box-outline"
        show-arrows
      >
        <v-tab :value="basic">Basic</v-tab>
      </v-tabs>

      <v-window v-model="tab">
        <v-window-item value="basic">
          <full-calendar-basic />
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import FullCalendarBasic from '~/pages/sampleComponent/fullCalendar/comp/fullCalendarBasic.vue'

export default defineComponent({
  components: {
    FullCalendarBasic
  },
  setup: function () {
    const tab = ref<string>('basic')

    return {
      tab
    }
  }
})
</script>
<style scoped></style>
