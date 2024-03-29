<template>
  <v-select
    v-model="selectedItem"
    :items="selectBoxData"
    :label="label"
    :readonly="readOnly"
    :disabled="disabled"
    item-title="label"
    :error-messages="errorMessages"
    return-object
  />
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import _ from 'lodash'

export interface SelectBoxData {
  label: string
  value: string
}

export interface SelectBoxOption {
  label: string
  readOnly?: boolean
  disabled?: boolean
  type?: string
}

const props = defineProps<{
  data: SelectBoxData[]
  option: SelectBoxOption
  selectedValue: string
  errorMessages?: string
}>()

const label = ref<string>('')
const readOnly = ref<boolean>(false)
const disabled = ref<boolean>(false)
const type = ref<string>('')
const errorMessages = ref<string | undefined>('')

const selectBoxData = ref<SelectBoxData[]>([])

const selectedItem = ref<SelectBoxData>({ label: '', value: '' })
const selectedValue = ref<string>('')
// 타입에 따라 기본값이 달라질수 있어 임의로 defaultItem을 만들어 처리
const defaultItem = ref<SelectBoxData>({ label: '', value: '' })

const emits = defineEmits(['callBackSelectedValue'])

const setSelectBoxOption = (val: SelectBoxOption) => {
  label.value = val.label

  if (val.readOnly !== undefined) {
    readOnly.value = val.readOnly
  }

  if (val.disabled !== undefined) {
    disabled.value = val.disabled
  }
  if (val.type !== undefined) {
    type.value = val.type
  }
}

// 셀렉트 박스 세팅
const setSelectBoxItems = (val: SelectBoxData[]) => {
  if (val.length !== 0) {
    // 타입이 select,all 일 경우 ''값인 라벨을 추가 해준다.
    if (type.value === 'select') {
      const filterObject = _.filter(val, { value: '' })

      if (filterObject.length === 0) {
        defaultItem.value = { label: '[ SELECT ]', value: '' }
        val.unshift(defaultItem.value)
      }
    } else if (type.value === 'all') {
      const filterObject = _.filter(val, { value: '' })
      if (filterObject.length === 0) {
        defaultItem.value = { label: '[ ALL ]', value: '' }
        val.unshift(defaultItem.value)
      }
    }

    selectBoxData.value = val
  }
}

// 값을 전달 받으면 셀렉트 박스 아이탬에서 해당값이 있는 경우를 찾는다.
const setSelectBoxValue = (value: string) => {
  if (value !== '') {
    const selectedObject = _.filter(selectBoxData.value, { value })
    selectedItem.value = selectedObject[0]
  } else {
    selectedItem.value = defaultItem.value
  }

  selectedValue.value = value
}

// 선택된 셀렉트 박스의 값이 바뀐다면 부모 컴퍼넌트로 값을 전달해준다
const setChangeValue = (changeValue: any) => {
  if (changeValue !== undefined) {
    selectedValue.value = changeValue.value
    emits('callBackSelectedValue', selectedValue.value)
  }
}

watch(
  () => props.data,
  (newValue) => {
    setSelectBoxItems(newValue)
  }
)

watch(
  () => props.option,
  (newValue) => {
    setSelectBoxOption(newValue)
  }
)

watch(
  () => props.selectedValue,
  (newValue) => {
    setSelectBoxValue(newValue)
  }
)

watch(
  () => selectedItem.value,
  (newValue) => {
    setChangeValue(newValue)
  }
)

watch(
  () => props.errorMessages,
  (newValue) => {
    errorMessages.value = newValue
  }
)

onMounted(() => {
  setSelectBoxOption(props.option)
  setSelectBoxItems(props.data)
  setSelectBoxValue(props.selectedValue)
})
</script>

<style scoped></style>
