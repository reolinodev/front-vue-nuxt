<template>
  <v-card>
    <v-card-item>
      <v-row class="ma-auto">
        <v-col cols="5">
          <div style="min-height: 900px">
            <v-row class="ma-auto">
              <v-col cols="12" class="d-flex justify-space-between pa-0">
                <span class="card-item-basic_span">
                  <v-btn
                    class="ma-1 v-icon--size-x-small"
                    icon="mdi-view-grid-outline"
                  />

                  Menu
                </span>
                <v-col cols="6" class="d-flex justify-end ga-2">
                  <div class="d-flex justify-end ga-2">
                    <v-btn color="success" @click="addMenu()"> ADD </v-btn>
                    <v-btn color="error" @click="delConfirm()"> DEL </v-btn>
                  </div>
                </v-col>
              </v-col>
            </v-row>

            <v-divider class="border-opacity-75 pa-2" color="#ffffff" />

            <tree-comp
              :tree-items="treeItems"
              @selected-tree-data="callBackTreeData"
            />
          </div>
        </v-col>
        <v-col cols="7">
          <div style="min-height: 900px">
            <v-row class="ma-auto">
              <v-col cols="12" class="d-flex justify-space-between pa-0">
                <span class="card-item-basic_span">
                  <v-btn
                    v-if="mode === 'edit'"
                    class="ma-1 v-icon--size-x-small"
                    icon="mdi-square-edit-outline"
                  />

                  <v-btn
                    v-else-if="mode === 'add'"
                    class="ma-1 v-icon--size-x-small"
                    icon="mdi-plus-box"
                  />
                  <v-btn
                    v-else
                    class="ma-1 v-icon--size-x-small"
                    icon="mdi-view-grid-outline"
                  />

                  {{ subCompTitle }}
                  <span
                    v-if="selectedMenuNm !== ''"
                    class="font-weight-bold pa-3"
                  >
                    [ {{ selectedMenuNm }} ]
                  </span>
                </span>

                <v-col cols="6" class="d-flex justify-end ga-2">
                  <v-btn
                    v-if="mode == 'view'"
                    color="warning"
                    @click="changeMode('edit')"
                  >
                    Edit
                  </v-btn>
                  <div v-if="mode === 'edit'" class="d-flex justify-end ga-2">
                    <v-btn color="primary" @click="saveMenu()"> SAVE </v-btn>
                    <v-btn color="warning" @click="changeMode('view')">
                      VIEW
                    </v-btn>
                  </div>
                  <div v-if="mode === 'add'" class="d-flex justify-end ga-2">
                    <v-btn color="primary" @click="saveMenu()"> SAVE </v-btn>
                  </div>
                </v-col>
              </v-col>
            </v-row>

            <v-divider class="border-opacity-75 pa-2" color="#ffffff" />

            <menu-view
              v-if="mode === 'view'"
              :selected-menu-items="selectedMenuItems"
            />
            <menu-edit
              v-if="mode === 'edit' || mode === 'add'"
              ref="menuEditRef"
              :selected-menu-items="selectedMenuItems"
              :mode="mode"
              @call-back-save="save"
            />
          </div>
        </v-col>
      </v-row>
    </v-card-item>
  </v-card>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { mainStore } from '@/stores/main'
import { menuStore } from '@/stores/menu'
import _ from 'lodash'
import TreeComp from '~/components/TreeComp.vue'
import MenuEdit from '~/pages/systemSetting/menu/comp/menuEdit.vue'
import MenuView from '~/pages/systemSetting/menu/comp/menuView.vue'

const menu = menuStore()
const menuEditRef = ref(null)

const main = mainStore()

const mode = ref<string>('view')
const subCompTitle = ref<string>('Menu Info')

const selectedMenuItems = ref<any>([])
const selectedMenuNm = ref<string>('')

const treeItems = ref<any>([])

// 모드 변경 : view, add, edit
const changeMode = (value: string) => {
  if (selectedMenuNm.value === '' && value !== 'add') {
    main.alertOption = {
      text: '메뉴를 선택하세요.'
    }
    main.isAlert = true
    return
  }

  if (value === 'add') {
    subCompTitle.value = 'New Menu'
  } else {
    subCompTitle.value = 'Menu Info'
  }

  mode.value = value
}

// 메뉴 추가 : menuEdit 컴퍼넌트에 신규 데이터를 전달한다.
const addMenu = () => {
  changeMode('add')

  selectedMenuNm.value = ''

  selectedMenuItems.value = {
    menuItems: {
      id: '',
      lv: '',
      label: '',
      useYn: 'Y',
      upperId: '',
      icon: '',
      url: '',
      ord: ''
    },
    parentMenuItems: _.filter(menu.menuItems, { lv: '1' }),
    mode: mode.value
  }
}

// 삭제 확인 팝업
const delConfirm = () => {
  if (selectedMenuNm.value === '') {
    main.alertOption = {
      text: '메뉴를 선택하세요.'
    }
    main.isAlert = true
  } else {
    main.confirmAlertOption = {
      text: `[ ${selectedMenuNm.value} ] 메뉴를 삭제 하시겠습니까?`,
      fnc: delMenu
    }
    main.isConfirmAlert = true
  }
}

// 삭제 처리 프로세스
const delMenu = () => {
  main.isLoading = true

  setTimeout(() => {
    main.isLoading = false

    main.alertOption = {
      title: 'Success',
      text: '메뉴가 정상적으로 삭제 되었습니다.'
    }
    main.isAlert = true
  }, 2000)
}

// menuEdit 컴퍼넌트의 save 버튼 이벤트 호출
const saveMenu = () => {
  menuEditRef.value.saveConfirm()
}

// 메뉴 데이터 처리
const save = (val: any) => {
  console.log('save', val)

  main.isLoading = true

  setTimeout(() => {
    main.isLoading = false

    main.alertOption = {
      title: 'Success',
      text: '정상적으로 저장 되었습니다.'
    }
    main.isAlert = true
  }, 2000)
}

// 등록된 전체 메뉴를 조회한다.
const getMenu = async (): Promise<void> => {
  menu.getMenus()

  treeItems.value = {
    data: menu.menuItems,
    option: {
      expand: true,
      checkbox: false,
      filter: true,
      rootTitle: 'Menu'
    }
  }
}

// 메뉴 트리를 클릭했을때 발생하는 이벤트. 선택된 메뉴의 데이터를 가져오고 menuView 컴퍼넌트를 호출한다.
const callBackTreeData = (value: any) => {
  mode.value = 'view'

  if (value.length !== 0) {
    const menuData = value[0][0]

    if (menuData !== undefined) {
      selectedMenuItems.value = {
        menuItems: menuData,
        parentMenuItems: _.filter(menu.menuItems, { lv: '1' }),
        mode: mode.value
      }

      selectedMenuNm.value = menuData.label
    }
  }
}

onMounted(() => {
  getMenu()
})

watch(mode, async (newValue) => {
  if (newValue === 'edit' || newValue === 'add') {
    await nextTick()
  }
})
</script>

<style scoped></style>
