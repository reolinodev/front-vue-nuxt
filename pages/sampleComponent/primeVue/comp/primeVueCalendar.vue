<template>
  <v-row class="pt-5 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%">
          <v-row class="ma-auto">
            <v-col cols="3">
              <v-card-text># Basic</v-card-text>
              <Calendar v-model="date" />
            </v-col>
            <v-col cols="3">
              <v-card-text># Format</v-card-text>
              <Calendar v-model="date" date-format="yy.mm.dd" />
            </v-col>
            <v-col cols="3">
              <v-card-text># Icon</v-card-text>
              <Calendar v-model="date" show-icon :show-on-focus="false" />
            </v-col>
            <v-col cols="3">
              <v-card-text># Custom Icon</v-card-text>
              <Calendar v-model="date" show-icon icon-display="input" time-only>
                <template #inputicon="{ clickCallback }">
                  <div class="pr-2">
                    <i
                      class="pi pi-clock cursor-pointer"
                      @click="clickCallback"
                    />
                  </div>
                </template>
              </Calendar>
            </v-col>
            <v-col cols="3">
              <v-card-text># Multiple</v-card-text>
              <Calendar
                v-model="dates"
                selection-mode="multiple"
                :manual-input="false"
              />
            </v-col>

            <v-col cols="3">
              <v-card-text># Range</v-card-text>
              <Calendar
                v-model="dates2"
                selection-mode="range"
                :manual-input="false"
              />
            </v-col>

            <v-col cols="3">
              <v-card-text># Button Bar</v-card-text>
              <Calendar v-model="date" show-button-bar />
            </v-col>

            <v-col cols="3">
              <v-card-text># Time</v-card-text>
              <Calendar
                id="calendar-12h"
                v-model="datetime12h"
                show-time
                hour-format="12"
                class="mb-5"
              />
              <Calendar
                id="calendar-24h"
                v-model="datetime24h"
                show-time
                hour-format="24"
                class="mb-5"
              />
              <Calendar id="calendar-timeonly" v-model="time" time-only />
            </v-col>
            <v-col cols="3">
              <v-card-text># Picker</v-card-text>

              <Calendar
                v-model="date"
                view="month"
                date-format="mm/yy"
                class="mb-5"
              />
              <Calendar v-model="date" view="year" date-format="yy" />
            </v-col>
            <v-col cols="3">
              <v-card-text class="pb-8"># Float Label</v-card-text>

              <FloatLabel>
                <Calendar v-model="date" input-id="birth_date" />
                <label for="birth_date">Birth Date</label>
              </FloatLabel>
            </v-col>
          </v-row>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import Calendar from 'primevue/calendar'
import FloatLabel from 'primevue/floatlabel'

import dayjs from 'dayjs'

export default defineComponent({
  components: {
    Calendar,
    FloatLabel
  },
  setup: function () {
    const date = ref(null)
    const dateStr = ref(null)
    const dates = ref(null)
    const dates2 = ref(null)
    const datetime12h = ref(null)
    const datetime24h = ref(null)
    const time = ref(null)

    watch(date, (val) => {
      dateStr.value = dayjs(val).format('YYYYMMDD')
      console.log('dateStr', dateStr.value)
    })

    watch(dates2, (val) => {
      console.log('dates2', val)
    })
    return {
      date,
      dates,
      dates2,
      datetime12h,
      datetime24h,
      time
    }
  }
})
</script>

<style scoped></style>
