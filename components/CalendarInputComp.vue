<template>
  <Calendar
    v-model="inputDate"
    :show-icon="showIcon"
    :show-on-focus="showOnFocus"
    :date-format="dateFormat"
    :style="{ width: width, height: height }"
  />
</template>

<script setup lang="ts">
import Calendar from 'primevue/calendar'
import { onMounted, ref, watch } from 'vue'
import { getDateFormat } from '@/utils/dateUtil'

const emits = defineEmits(['eventName', 'callBackCalendarInput'])

const props = defineProps<{
  inputDate: string | null
  showIcon: boolean
  showOnFocus: boolean
  width: string | undefined
  height: string | undefined
  dateFormat: string | undefined
}>()

const inputDate = ref<string | null>(null)
const showIcon = ref<boolean>(true)
const showOnFocus = ref<boolean>(true)
const width = ref<string | undefined>('180px')
const height = ref<string | undefined>('48px')
const dateFormat = ref<string | undefined>('yy-mm-dd')

onMounted(() => {
  // todo prime Vue의 locale 변경 필요

  inputDate.value = props.inputDate
  showIcon.value = props.showIcon
  showOnFocus.value = props.showOnFocus

  if (props.width === undefined) {
    width.value = '180px'
  } else {
    width.value = props.width
  }

  if (props.height === undefined) {
    height.value = '48px'
  } else {
    height.value = props.height
  }

  if (props.dateFormat === undefined) {
    dateFormat.value = 'yy-mm-dd'
  } else {
    dateFormat.value = props.dateFormat
  }
})

watch(
  () => props.inputDate,
  (newValue) => {
    inputDate.value = newValue
  }
)

watch(
  () => props.showIcon,
  (newValue) => {
    showIcon.value = newValue
  }
)

watch(
  () => props.showOnFocus,
  (newValue) => {
    showOnFocus.value = newValue
  }
)

watch(
  () => props.width,
  (newValue) => {
    width.value = newValue
  }
)

watch(
  () => props.height,
  (newValue) => {
    height.value = newValue
  }
)

watch(
  () => props.dateFormat,
  (newValue) => {
    dateFormat.value = newValue
  }
)

watch(inputDate, (val: string | null) => {
  if (val != null) {
    emits('callBackCalendarInput', getDateFormat(val, 'YYYY-MM-DD'))
  }
})
</script>

<style scoped></style>
