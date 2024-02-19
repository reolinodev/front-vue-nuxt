<template>
  <client-only>
    <v-row class="pt-2 pe-5 h-auto" justify="center">
      <v-col class="pa-1" cols="12">
        <v-card min-height="900">
          <v-card-item width="100%">
            <v-row class="ma-auto">
              <v-col cols="12">
                <v-card-title class="pl-5 text-blue-accent-2">
                  <v-btn
                    class="ma-2"
                    color="primary"
                    href="https://icehaunter.github.io/vue3-datepicker"
                  >
                    Vue3 Datepicker link
                    <v-icon end icon="mdi-checkbox-marked-circle" />
                  </v-btn>
                </v-card-title>
              </v-col>
              <v-col cols="3" style="height: 350px">
                <v-card-text># Basic</v-card-text>
                <Datepicker v-model="picked" :locale="locale" />
              </v-col>
              <v-col cols="3" style="height: 350px">
                <v-card-text># Typeable input</v-card-text>
                <Datepicker v-model="picked" typeable />
              </v-col>
              <v-col cols="3" style="height: 350px">
                <v-card-text># Clear</v-card-text>
                <Datepicker v-model="picked" :clearable="true" />
              </v-col>
              <v-col cols="3" style="height: 350px">
                <v-card-text># Slot</v-card-text>
                <Datepicker
                  v-model="picked"
                  :clearable="true"
                  placeholder="placeholder"
                >
                  <template #clear="{ onClear }">
                    <button style="color: red" @click="onClear">x</button>
                  </template>
                </Datepicker>
              </v-col>
              <v-col cols="3" style="min-height: 350px">
                <v-card-text># disabled date</v-card-text>
                <Datepicker
                  v-model="pickedDate"
                  :disabled-dates="{ dates: [disabledDate] }"
                />
              </v-col>
              <v-col cols="3" style="min-height: 350px">
                <v-card-text># lower & upper</v-card-text>
                <Datepicker
                  v-model="example2"
                  :upper-limit="example2To"
                  :lower-limit="example2From"
                />
              </v-col>
              <v-col cols="3" style="height: 500px">
                <v-card-text># Minimum View</v-card-text>
                year <Datepicker v-model="picked1" minimum-view="year" />

                month <Datepicker v-model="picked2" minimum-view="month" />
              </v-col>
              <v-col cols="3" style="height: 500px">
                <v-card-text># Minimum View</v-card-text>
                day <Datepicker v-model="picked3" minimum-view="day" />

                time <Datepicker v-model="picked4" minimum-view="time" />
              </v-col>
              <v-col cols="3" style="height: 350px">
                <v-card-text># config</v-card-text>
                <Datepicker
                  v-model="picked5"
                  :locale="locale"
                  :input-format="inputFormat"
                  :week-starts-on="weekStartOn"
                  :disabled="disabled"
                  :allow-outside-interval="allowOutsideInterval"
                  :style="customStyle"
                />
              </v-col>
            </v-row>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </client-only>
</template>

<script setup>
import Datepicker from 'vue3-datepicker'
import { ref, watch } from 'vue'
import { ko } from 'date-fns/locale'

const locale = ref(ko)

const picked = ref(new Date())

const pickedDate = ref(new Date())
const disabledDate = ref(new Date())

const example2 = ref(new Date())
const example2From = ref(new Date('2024-01-01'))
const example2To = ref(new Date())

const picked1 = ref(new Date())
const picked2 = ref(new Date())
const picked3 = ref(new Date())
const picked4 = ref(new Date())

const picked5 = ref(new Date())
const inputFormat = ref('yyyy-MM-dd')
const weekStartOn = ref(1)
const disabled = ref(false)
const allowOutsideInterval = ref(false)
const customStyle = ref({
  '--vdp-bg-color': '#000000',
  '--vdp-text-color': '#eee7e7',
  '--vdp-box-shadow':
    '0 4px 10px 0 rgba(128, 144, 160, 0.1), 0 0 1px 0 rgba(128, 144, 160, 0.81)',
  '--vdp-border-radius': '3px',
  '--vdp-heading-size': '2.5em',
  '--vdp-heading-weight': 'bold',
  '--vdp-heading-hover-color': '#231a1a',
  '--vdp-arrow-color': 'currentColor',
  '--vdp-elem-color': 'currentColor',
  '--vdp-disabled-color': '#d5d9e0',
  '--vdp-hover-color': '#ffffff',
  '--vdp-hover-bg-color': '#c2c7c7',
  '--vdp-selected-color': '#ffffff',
  '--vdp-selected-bg-color': '#606664',
  '--vdp-current-date-outline-color': '#706b6b',
  '--vdp-current-date-font-weight': 'bold',
  '--vdp-elem-font-size': '0.8em',
  '--vdp-elem-border-radius': '5px',
  '--vdp-divider-color': '#d5d9e0'
})

watch(picked, (val) => {
  if (val) {
    const date = val
    const year = date.getFullYear()
    const month = `0${date.getMonth() + 1}`.slice(-2)
    const day = `0${date.getDate()}`.slice(-2)

    const formattedDate = year + month + day
    console.log(formattedDate)
  }
})
</script>

<style scoped>
.v3dp__datepicker {
  border: 1px solid #cccccc;
  padding: 5px;
  width: 200px;
}

.v3dp__input_wrapper {
  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border-style: none;
    width: 190px;
    padding-left: 5px;
  }
}
</style>
