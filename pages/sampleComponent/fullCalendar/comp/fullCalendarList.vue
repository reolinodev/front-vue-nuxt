<template>
  <v-row class="pt-5 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%" class="d-flex justify-center">
          <client-only>
            <FullCalendar :options="calendarOptions3" style="width: 1193px" />
          </client-only>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import FullCalendar from '@fullcalendar/vue3'
import listPlugin from '@fullcalendar/list'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  setup() {
    return {
      calendarOptions3: {
        plugins: [listPlugin],
        initialView: 'listWeek',
        locale: 'ko',
        events: [
          {
            title: 'Meeting',
            start: '2024-02-18T14:30:00',
            extendedProps: {
              status: 'done'
            }
          },
          {
            title: 'Birthday Party',
            start: '2024-02-19T07:00:00',
            backgroundColor: 'green',
            borderColor: 'green'
          }
        ],
        eventDidMount: function (info) {
          if (info.event.extendedProps.status === 'done') {
            // Change background color of row
            info.el.style.backgroundColor = 'indigo'

            // Change color of dot marker
            const dotEl = info.el.getElementsByClassName('fc-event-dot')[0]
            if (dotEl) {
              dotEl.style.backgroundColor = 'white'
            }
          }
        }
      }
    }
  }
}
</script>
