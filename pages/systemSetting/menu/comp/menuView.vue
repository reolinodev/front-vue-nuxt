<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-text-field v-model="menuNm" label="Menu Name" readonly />
    </v-col>
    <v-col cols="6">
      <input-select-box-comp
        :data="menuLvData"
        :option="menuLvOption"
        :selected-value="menuLv"
      />
    </v-col>
    <v-col cols="6">
      <input-select-box-comp
        :data="parentData"
        :option="parentOption"
        :selected-value="prnMenuId"
      />
    </v-col>
    <v-col cols="12">
      <v-text-field v-model="url" label="Url" readonly />
    </v-col>
    <v-col cols="1" class="d-flex justify-center pt-5">
      <v-icon :icon="activeIcon" size="40px" />
    </v-col>
    <v-col cols="6">
      <v-text-field v-model="icon" label="Icon" readonly />
    </v-col>
    <v-col cols="5">
      <v-text-field v-model="ord" label="Ord" readonly />
    </v-col>
    <v-col cols="6">
      <input-select-box-comp
        :data="useYnData"
        :option="useYnOption"
        :selected-value="useYn"
      />
    </v-col>
    <v-col cols="6">
      <input-select-box-comp
        :data="navYnData"
        :option="navYnOption"
        :selected-value="navYn"
      />
    </v-col>
  </v-row>
</template>
<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import InputSelectBoxComp, {
  SelectBoxData,
  SelectBoxOption
} from '@/components/InputSelectBoxComp.vue'
import { Menu, SelectMenu } from '@/stores/menu'

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
const navYn = ref<string>('')

const menuLvData: SelectBoxData[] = [
  { label: '상위 메뉴', value: '1' },
  { label: '하위 메뉴', value: '2' }
]

const menuLvOption = ref<SelectBoxOption>({
  label: 'Menu Lv',
  readOnly: true
})

const useYnData: SelectBoxData[] = [
  { label: '사용', value: 'Y' },
  { label: '미사용', value: 'N' }
]

const useYnOption = ref<SelectBoxOption>({
  label: 'Use',
  readOnly: true
})

const navYnData: SelectBoxData[] = [
  { label: '표시', value: 'Y' },
  { label: '미표시', value: 'N' }
]

const navYnOption = ref<SelectBoxOption>({
  label: 'Nav',
  readOnly: true
})

const parentData = ref<SelectBoxData[]>([])

const parentOption = ref<SelectBoxOption>({
  label: 'Parent Menu',
  readOnly: true
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
    navYn.value = menuItem.navYn

    if (menuItem.icon === '' && menuItem.menuLv === '1') {
      activeIcon.value = 'mdi-folder-outline'
    } else if (menuItem.icon === '' && menuItem.menuLv === '2') {
      activeIcon.value = 'mdi-folder-open'
    } else {
      activeIcon.value = menuItem.icon
    }

    // prettier-ignore
    parentData.value = parentMenuItems?.map((item:Menu) => ({ label: item.menuNm, value: item.menuId })) ?? []
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
