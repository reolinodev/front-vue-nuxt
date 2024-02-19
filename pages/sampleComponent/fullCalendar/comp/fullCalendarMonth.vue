<template>
  <v-row class="pt-5 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%">
          <v-row class="ma-auto">
            <v-col cols="12" class="d-flex justify-center">
              <client-only>
                <FullCalendar :options="calendarOptions" style="width: 1195px">
                  <template #eventContent="arg">
                    <b>{{ arg.event.title }}</b>
                  </template>
                </FullCalendar>
              </client-only>
            </v-col>
          </v-row>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar
  },
  setup() {
    const handleDateClick = (arg) => {
      console.log('arg', arg)
    }
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        dateClick: handleDateClick,
        events: [
          { title: 'event 1', start: '2024-02-01', end: '2024-02-07' },
          { title: 'event 2', date: '2024-02-10' }
        ],
        locale: 'ko'
      }
    }
  }
}
</script>
