<template>
  <v-row class="pt-5 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%">
          <v-row class="ma-auto">
            <v-col cols="12" class="d-flex justify-center">
              <client-only>
                <FullCalendar :options="calendarOptions2" style="width: 100%">
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
import timeGridPlugin from '@fullcalendar/timegrid'

export default {
  components: {
    FullCalendar
  },
  setup() {
    return {
      calendarOptions2: {
        plugins: [timeGridPlugin],
        initialView: 'timeGridWeek',
        events: [
          {
            title: '[팀원] 미팅2',
            start: '2024-02-19T14:00:00',
            end: '2024-02-19T18:00:00',
            backgroundColor: 'green',
            borderColor: 'green'
          },
          {
            title: '[나] 미팅1',
            start: '2024-02-19T11:00:00',
            end: '2024-02-19T20:00:00',
            backgroundColor: 'blue',
            borderColor: 'blue'
          }
        ],
        headerToolbar: {
          left: 'prev,next',
          center: 'title',
          right: 'timeGridWeek,timeGridDay' // user can switch between the two
        },
        locale: 'ko'
      }
    }
  }
}
</script>
