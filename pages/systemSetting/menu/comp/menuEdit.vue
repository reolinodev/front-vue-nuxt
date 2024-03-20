<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-text-field
        v-model="menuNm"
        label="Menu Name *"
        :error-messages="errors.menuNm"
      />
    </v-col>
    <v-col cols="6">
      <input-select-box-comp
        :items="menuLvItems"
        :selected-value="menuLv"
        :error-messages="errors.menuLv"
        @call-back-selected-value="callBackMenuLvItems"
      />
    </v-col>
    <v-col cols="6">
      <input-select-box-comp
        :items="parentItems"
        :selected-value="prnMenuId"
        :error-messages="errors.prnMenuId"
        @call-back-selected-value="callBackParentItems"
      />
    </v-col>
    <v-col cols="12">
      <v-text-field v-model="url" label="Url" />
    </v-col>
    <v-col cols="1" class="d-flex justify-center pt-5">
      <v-icon :icon="activeIcon" size="40px" />
    </v-col>
    <v-col cols="9">
      <v-text-field v-model="icon" label="Icon" disabled />
    </v-col>
    <v-col cols="2" class="d-flex justify-left mt-2">
      <v-btn
        class="ma-1 v-icon--size-x-small"
        color="#388E3C"
        @click="handleMenuIcon()"
      >
        <v-icon icon="mdi-playlist-edit" />
      </v-btn>
    </v-col>
    <v-col cols="6">
      <v-text-field v-model="ord" label="Ord" />
    </v-col>
    <v-col cols="6">
      <input-select-box-comp :items="useYnItems" :selected-value="useYn" />
    </v-col>
    <menu-icon-pop
      :menu-icon-popup="menuIconPopup"
      :icon="icon"
      @call-back-menu-icon-popup="handleMenuIconPop"
      @call-back-menu-icon-save="handleMenuIconSave"
    />
  </v-row>
</template>
<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { mainStore } from '@/stores/main'
import InputSelectBoxComp from '~/components/InputSelectBoxComp.vue'
import type {
  SelectBoxData,
  SelectBoxItem
} from '~/components/InputSelectBoxComp.vue'
import MenuIconPop from '~/pages/systemSetting/menu/comp/menuIconPop.vue'
import type { Menu, SelectMenu } from '~/stores/menu'

const props = defineProps<{
  selectedMenuItems: SelectMenu
}>()

const emits = defineEmits(['callBackSave'])

const main = mainStore()

const prnMenuId = ref<string>('')
const activeIcon = ref<string>('mdi-folder-open')
const errors = ref<any>({})
const menuIconPopup = ref<boolean>(false)

const menuId = ref<string>('')
const menuNm = ref<string>('')
const menuLv = ref<string>('')
const icon = ref<string>('')
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
    label: 'Menu Lv *',
    type: 'select'
  }
})

const parentItems = ref<SelectBoxItem>({
  data: [],
  option: {
    label: 'Parent Menu',
    disabled: true
  }
})

const useYnItems = ref<SelectBoxItem>({
  data: useYnData,
  option: {
    label: 'Use *'
  }
})

const setData = (value: any): void => {
  const { menuItem, parentMenuItems, mode } = value

  menuId.value = menuItem.menuId
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
  } else if (menuItem.icon === '') {
    activeIcon.value = 'mdi-folder-open'
  } else {
    activeIcon.value = menuItem.icon
  }

  if (mode === 'add') {
    menuLvItems.value = {
      data: menuLvData,
      option: {
        label: 'Menu Lv',
        type: 'select'
      }
    }
  }

  // prettier-ignore
  const data = parentMenuItems?.map((item:Menu) => ({ label: item.menuNm, value: item.menuId })) ?? []

  parentItems.value = {
    data,
    option: {
      label: 'Parent Menu',
      disabled: true
    }
  }
}

const callBackMenuLvItems = (value: string) => {
  const disabled: boolean = value !== '2'

  parentItems.value = {
    ...parentItems.value,
    option: {
      label: 'Parent Menu',
      disabled
    }
  }

  menuLv.value = value
}

const callBackParentItems = (value: string) => {
  prnMenuId.value = value
}

const saveConfirm = () => {
  main.confirmAlertOption = {
    text: '저장 하시겠습니까?',
    fnc: save
  }
  main.isConfirmAlert = true
}

const save = () => {
  if (validation()) {
    const data = {
      menuId: menuId.value,
      menuNm: menuNm.value,
      menuLv: menuLv.value,
      prnMenuId: prnMenuId.value,
      icon: icon.value,
      useYn: useYn.value,
      url: url.value,
      ord: ord.value
    }

    emits('callBackSave', data)
  } else {
    main.alertOption = {
      title: 'Warning',
      text: '입력하신 내용을 확인해주세요.'
    }
    main.isAlert = true
  }
}

// 유효성 처리 값 입력 폼에 오류 내용을 전달한다.
const validation = (): boolean => {
  const error: any = {}
  let chk = true

  if (menuNm.value === '') {
    error.menuNm = 'Please enter the menu name'
    chk = false
  }

  if (menuLv.value === '') {
    error.menuLv = 'Please select the menu lv'
    chk = false
  }

  if (menuLv.value === '2' && prnMenuId.value === '') {
    error.prnMenuId = 'Please select the parent menu '
    chk = false
  }

  errors.value = error

  return chk
}

const handleMenuIcon = () => {
  menuIconPopup.value = true
}

const handleMenuIconSave = (value: string) => {
  icon.value = value
  activeIcon.value = value
}

const handleMenuIconPop = (value: boolean) => {
  menuIconPopup.value = value
}

watch(
  () => props.selectedMenuItems,
  (newValue) => {
    setData(newValue)
  }
)

watch(
  () => menuLv.value,
  (newValue) => {
    if (newValue !== '2') {
      prnMenuId.value = ''
    }
  }
)

onMounted(() => {
  setData(props.selectedMenuItems)
})

defineExpose({
  saveConfirm
})
</script>

<style scoped></style>
