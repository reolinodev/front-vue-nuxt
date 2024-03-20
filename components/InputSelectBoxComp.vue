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

export interface SelectBoxItem {
  data: SelectBoxData[]
  option: SelectBoxOption
}

const props = defineProps<{
  items: SelectBoxItem
  selectedValue: string
  errorMessages?: string
}>()

const selectBoxData = ref<SelectBoxData[]>([])
const label = ref<string>('')
const readOnly = ref<boolean>(false)
const disabled = ref<boolean>(false)
const errorMessages = ref<string | undefined>('')

const selectedItem = ref<SelectBoxData>({ label: '', value: '' })
const selectedValue = ref<string>('')
// 타입에 따라 기본값이 달라질수 있어 임의로 defaultItem을 만들어 처리
const defaultItem = ref<SelectBoxData>({ label: '', value: '' })

const emits = defineEmits(['callBackSelectedValue'])

// 셀렉트 박스 세팅
const setSelectBoxItems = (value: any) => {
  if (value.length !== 0) {
    const { data, option } = value

    // 타입이 select,all 일 경우 ''값인 라벨을 추가 해준다.
    if (option.type !== undefined && option.type === 'select') {
      const filterObject = _.filter(data, { value: '' })
      if (filterObject.length === 0) {
        defaultItem.value = { label: '[ SELECT ]', value: '' }
        data.unshift(defaultItem.value)
      }
    } else if (option.type !== undefined && option.type === 'all') {
      const filterObject = _.filter(data, { value: '' })
      if (filterObject.length === 0) {
        defaultItem.value = { label: '[ ALL ]', value: '' }
        data.unshift(defaultItem.value)
      }
    }

    if (option.readOnly !== undefined) {
      readOnly.value = option.readOnly
    }

    if (option.disabled !== undefined) {
      disabled.value = option.disabled
    }

    label.value = option.label
    selectBoxData.value = data
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
  () => props.items,
  (newValue) => {
    setSelectBoxItems(newValue)
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
  setSelectBoxItems(props.items)
  setSelectBoxValue(props.selectedValue)
})
</script>

<style scoped></style>
