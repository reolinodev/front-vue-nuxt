<template>
  <FullCalendar
    ref="calendarRef"
    :options="calendarOptions"
    style="width: 1195px"
  >
    <template #eventContent="arg">
      <b>{{ arg.event.title }}</b>
    </template>
  </FullCalendar>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { getDateCalculateFormat, getDateFormat } from '@/utils/dateUtil'

const props = defineProps<{
  events: any[]
  calendarType: string
  selectedDate: string
}>()

const calendarRef = ref(null)
const schedulePopup = ref<boolean>(false)
const calendarType = ref<string>(props.calendarType)
const selectedDate = ref<string>(props.selectedDate)
const scheduleId = ref<string>('')

const handleEventClick = (arg) => {
  scheduleId.value = arg.event.id
  schedulePopup.value = true
}

const calendarOptions = ref({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  locale: 'ko',
  events: [],
  eventClick: handleEventClick
})

onMounted(() => {
  calendarOptions.value.events = setData(props.events)
  calendarRef.value = calendarRef.value
})

const setData = (events: any) => {
  const eventItems = []

  for (let i = 0; i < events.length; i++) {
    const event = events[i]
    const eventItem = {
      title: '',
      start: '',
      end: '',
      backgroundColor: '',
      id: ''
    }

    eventItem.id = event.id
    eventItem.title = event.title
    eventItem.backgroundColor = event.backgroundColor

    const startTime = getDateFormat(event.start, 'YYYY-MM-DD HH:mm')
    const endTime = getDateCalculateFormat(
      event.end,
      'minus',
      1,
      'minute',
      'YYYY-MM-DD HH:mm'
    )

    if (calendarType.value === 'month' || calendarType.value === 'week') {
      const startDate = getDateFormat(startTime, 'YYYY-MM-DD')
      const endDate = getDateFormat(endTime, 'YYYY-MM-DD')

      if (startDate === endDate) {
        eventItem.start = startDate
        eventItem.end = endDate
      } else {
        eventItem.start = startTime
        eventItem.end = getDateCalculateFormat(
          endTime,
          'plus',
          1,
          'day',
          'YYYY-MM-DD'
        )
      }
    } else if (calendarType.value === 'day') {
      eventItem.start = getDateFormat(startTime, 'YYYY-MM-DD HH:mm')
      eventItem.end = getDateFormat(endTime, 'YYYY-MM-DD HH:mm')
    }

    eventItems.push(eventItem)
  }

  return eventItems
}

watch(
  () => props.events,
  (newValue) => {
    calendarOptions.value.events = setData(newValue)
  }
)

watch(
  () => props.selectedDate,
  (newValue) => {
    selectedDate.value = newValue
    calendarOptions.value.events = setData(newValue)

    if (calendarType.value === 'week') {
      if (calendarRef.value) {
        calendarRef.value.getApi().changeView('dayGridWeek', selectedDate.value)
      }
    } else if (calendarType.value === 'month') {
      if (calendarRef.value) {
        calendarRef.value
          .getApi()
          .changeView('dayGridMonth', selectedDate.value)
      }
    } else if (calendarType.value === 'day') {
      if (calendarRef.value) {
        calendarRef.value
          .getApi()
          .changeView('timeGridWeek', selectedDate.value)
      }
    }
  }
)

watch(
  () => props.calendarType,
  (newValue) => {
    calendarType.value = newValue

    calendarOptions.value.events = setData(props.events)

    if (newValue === 'week') {
      if (calendarRef.value) {
        calendarRef.value.getApi().changeView('dayGridWeek', selectedDate.value)
      }
    } else if (newValue === 'month') {
      if (calendarRef.value) {
        calendarRef.value
          .getApi()
          .changeView('dayGridMonth', selectedDate.value)
      }
    } else if (newValue === 'day') {
      if (calendarRef.value) {
        calendarRef.value
          .getApi()
          .changeView('timeGridWeek', selectedDate.value)
      }
    }
  }
)
</script>
