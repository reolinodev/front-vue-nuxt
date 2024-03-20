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
import type {
  SelectBoxData,
  SelectBoxItem
} from '~/components/InputSelectBoxComp.vue'
import type { Menu, SelectMenu } from '~/stores/menu'

const props = defineProps<{
  selectedMenuItems: SelectMenu
}>()

const prnMenuId = ref<string>('')
const menuNm = ref<string>('')
const menuLv = ref<string>('')
const icon = ref<string>('')
const activeIcon = ref<string>('mdi-folder-open')
const useYn = ref<string>('')
const url = ref<string>('')
const ord = ref<string>('')

const menuLvData: SelectBoxData[] = [
  { label: '상위 메뉴', value: '1' },
  { label: '하위 메뉴', value: '2' }
]
const useYnData: SelectBoxData[] = [
  { label: '사용', value: 'Y' },
  { label: '미사용', value: 'N' }
]

const menuLvItems = ref<SelectBoxItem>({
  data: menuLvData,
  option: {
    label: 'Menu Lv',
    readOnly: true
  }
})

const useYnItems = ref<SelectBoxItem>({
  data: useYnData,
  option: {
    label: 'Use',
    readOnly: true
  }
})

const parentItems = ref<SelectBoxItem>({
  data: [],
  option: {
    label: 'Parent Menu',
    readOnly: true
  }
})

// 메뉴의 상세정보와 부모메뉴의 정보를 받아서 셀렉트 박스로 전달한다.
const setData = (value: any) => {
  if (value.length !== 0) {
    const { menuItem, parentMenuItems } = value

    prnMenuId.value = menuItem.prnMenuId
    menuNm.value = menuItem.menuNm
    menuLv.value = menuItem.menuLv
    icon.value = menuItem.icon
    useYn.value = menuItem.useYn
    url.value = menuItem.url
    ord.value = menuItem.ord

    if (menuItem.icon === '' && menuItem.menuLv === '1') {
      activeIcon.value = 'mdi-folder-outline'
    } else if (menuItem.icon === '' && menuItem.menuLv === '2') {
      activeIcon.value = 'mdi-folder-open'
    } else {
      activeIcon.value = menuItem.icon
    }

    // prettier-ignore
    const data = parentMenuItems?.map((item:Menu) => ({ label: item.menuNm, value: item.menuId })) ?? []

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
