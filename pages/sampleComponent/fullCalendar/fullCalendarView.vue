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
        <v-tab value="month">Month</v-tab>
        <v-tab value="dayGrid">Day Grid</v-tab>
        <v-tab value="timeGrid">Time Grid</v-tab>
        <v-tab value="list">List</v-tab>
      </v-tabs>

      <v-window v-model="tab">
        <v-window-item value="month">
          <full-calendar-month />
        </v-window-item>
        <v-window-item value="dayGrid">
          <full-calendar-day-grid />
        </v-window-item>
        <v-window-item value="timeGrid">
          <full-calendar-time-grid />
        </v-window-item>
        <v-window-item value="list">
          <full-calendar-list />
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import FullCalendarTimeGrid from '~/pages/sampleComponent/fullCalendar/comp/fullCalendarTimeGrid.vue'
import FullCalendarList from '~/pages/sampleComponent/fullCalendar/comp/fullCalendarList.vue'
import FullCalendarMonth from '~/pages/sampleComponent/fullCalendar/comp/fullCalendarMonth.vue'
import FullCalendarDayGrid from '~/pages/sampleComponent/fullCalendar/comp/fullCalendarDayGrid.vue'

export default defineComponent({
  components: {
    FullCalendarDayGrid,
    FullCalendarMonth,
    FullCalendarList,
    FullCalendarTimeGrid
  },
  setup: function () {
    const tab = ref<string>('month')

    return {
      tab
    }
  }
})
</script>
<style scoped></style>
