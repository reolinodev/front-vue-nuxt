<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-text-field v-model="menuNm" label="Menu Name" readonly />
    </v-col>
    <v-col cols="6">
      <input-select-box-comp :items="menuLvItems" :selected-value="menuLv" />
    </v-col>
    <v-col cols="6">
      <input-select-box-comp :items="parentItems" :selected-value="prnMenuId" />
    </v-col>
    <v-col cols="12">
      <v-text-field v-model="url" label="Url" readonly />
    </v-col>
    <v-col cols="1" class="d-flex justify-center pt-5">
      <v-icon :icon="activeIcon" size="40px" />
    </v-col>
    <v-col cols="11">
      <v-text-field v-model="icon" label="Icon" readonly />
    </v-col>
    <v-col cols="6">
      <v-text-field v-model="ord" label="Ord" readonly />
    </v-col>
    <v-col cols="6">
      <input-select-box-comp :items="useYnItems" :selected-value="useYn" />
    </v-col>
  </v-row>
</template>
<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import InputSelectBoxComp from '~/components/InputSelectBoxComp.vue'

interface MenuItem {
  id: string
  lv: string
  label: string
  useYn: string
  upperId?: string
  icon?: string
  url?: string
  ord?: string
}

interface SelectBoxItem {
  label: string
  value: string
}

const props = defineProps<{
  selectedMenuItems: { menuItems: MenuItem[]; parentMenuItems: MenuItem[] }
}>()

const prnMenuId = ref<string>('')
const menuNm = ref<string>('')
const menuLv = ref<string>('')
const icon = ref<string>('')
const activeIcon = ref<string>('mdi-folder-open')
const useYn = ref<string>('')
const url = ref<string>('')
const ord = ref<string>('')

const menuLvData = ref<SelectBoxItem>([
  { label: '상위 메뉴', value: '1' },
  { label: '하위 메뉴', value: '2' }
])
const useYnData = ref<SelectBoxItem>([
  { label: '사용', value: 'Y' },
  { label: '미사용', value: 'N' }
])

const menuLvItems = ref({
  data: menuLvData,
  option: {
    label: 'Menu Lv',
    readOnly: true
  }
})

const useYnItems = ref({
  data: useYnData,
  option: {
    label: 'Use',
    readOnly: true
  }
})

const parentItems = ref({
  data: [],
  option: {
    label: 'Parent Menu',
    readOnly: true
  }
})

// 메뉴의 상세정보와 부모메뉴의 정보를 받아서 셀렉트 박스로 전달한다.
const setData = (value: any) => {
  if (value.length !== 0) {
    const { menuItems, parentMenuItems } = value

    prnMenuId.value = menuItems.upperId
    menuNm.value = menuItems.label
    menuLv.value = menuItems.lv
    icon.value = menuItems.icon
    useYn.value = menuItems.useYn
    url.value = menuItems.url
    ord.value = menuItems.ord

    if (menuItems.icon === '' && menuItems.lv === '1') {
      activeIcon.value = 'mdi-folder-outline'
    } else if (menuItems.icon === '' && menuItems.lv === '2') {
      activeIcon.value = 'mdi-folder-open'
    } else {
      activeIcon.value = menuItems.icon
    }

    // prettier-ignore
    const data = parentMenuItems?.map(item => ({ label: item.label, value: item.id })) ?? []

    parentItems.value = {
      ...parentItems.value,
      data
    }
  }
}

watch(
  () => props.selectedMenuItems,
  (newValue) => {
    setData(newValue)
  }
)

onMounted(() => {
  setData(props.selectedMenuItems)
})
</script>

<style scoped></style>
