<template>
  <v-layout>
    <FloatLabel>
      <Dropdown
        v-model="selectedModel"
        :options="items"
        option-label="name"
        :placeholder="placeholder"
        :style="{ width: width }"
        :disabled="disabled"
      />
      <label for="name">{{ label }}</label>
    </FloatLabel>
  </v-layout>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import Dropdown from 'primevue/dropdown'
import FloatLabel from 'primevue/floatlabel'
import _ from 'lodash'

export interface SearchSelectBoxData {
  name: string
  code: string
}

const props = defineProps<{
  items: SearchSelectBoxData[]
  selectedValue: string
  label: string
  placeholder: string
  width?: string | undefined
  type?: string | undefined
  disabled?: boolean
}>()

const selectedModel = ref<SearchSelectBoxData[]>([])
const items = ref<SearchSelectBoxData[]>([])
const selectedValue = ref<string>('')
const label = ref<string>('')
const placeholder = ref<string>('')
const width = ref<string | undefined>('200px')
const disabled = ref<boolean>(true)

// 타입에 따라 기본값이 달라질수 있어 임의로 defaultItem을 만들어 처리
const defaultItem = ref<SearchSelectBoxData>({ name: '', code: '' })

const emits = defineEmits(['callBackSelectedValue'])

// 값을 전달 받으면 셀렉트 박스 아이탬에서 해당값이 있는 경우를 찾는다.
const setSelectBoxValue = (value: string) => {
  if (value !== '') {
    const selectedObject = _.filter(items.value, { code: value })
    selectedModel.value = selectedObject[0]
  } else {
    selectedModel.value = defaultItem.value
  }

  selectedValue.value = value
}

// // 선택된 셀렉트 박스의 값이 바뀐다면 부모 컴퍼넌트로 값을 전달해준다
const setChangeValue = (changeValue: any) => {
  if (changeValue !== undefined) {
    selectedValue.value = changeValue.code
    emits('callBackSelectedValue', selectedValue.value)
  }
}

watch(
  () => props.items,
  (newValue) => {
    items.value = newValue
  }
)

watch(
  () => props.selectedValue,
  (newValue) => {
    selectedValue.value = newValue
    setSelectBoxValue(newValue)
  }
)

watch(
  () => props.width,
  (newValue) => {
    if (newValue !== undefined) {
      width.value = newValue
    }
  }
)

watch(
  () => props.placeholder,
  (newValue) => {
    placeholder.value = newValue
  }
)

watch(
  () => props.label,
  (newValue) => {
    label.value = newValue
  }
)

watch(
  () => props.disabled,
  (newValue) => {
    disabled.value = newValue
  }
)

watch(
  () => selectedModel.value,
  (newValue) => {
    setChangeValue(newValue)
  }
)

onMounted(() => {
  items.value = props.items
  label.value = props.label
  placeholder.value = props.placeholder

  if (props.width !== undefined) {
    width.value = props.width
  }

  disabled.value = props.disabled

  setSelectBoxValue(props.selectedValue)
})
</script>

<style scoped></style>
