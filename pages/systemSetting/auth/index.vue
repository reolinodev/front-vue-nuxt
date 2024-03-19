<template>
  <v-card min-height="900">
    <v-card-item width="100%">
      <v-row class="ma-auto">
        <v-col cols="6">
            <v-row class="ma-auto">
              <v-col cols="12" class="d-flex justify-space-between pa-0">
                <span class="card-item-basic_span">
                  <v-btn
                      v-if="authMode == 'view'"
                      class="ma-1 v-icon--size-x-small"
                      icon="mdi-view-grid-outline"
                  />
                  <v-btn
                      v-else
                      class="ma-1 v-icon--size-x-small"
                      icon="mdi-square-edit-outline"
                  />

                  Auth
                </span>
                <v-col cols="6" class="d-flex justify-end ga-2">
                  <v-btn
                      v-if="authMode == 'view'"
                      color="default"
                      variant="outlined"
                      @click="changeAuthMode('edit')"
                  >
                    Edit
                  </v-btn>
                  <div
                      v-if="authMode == 'edit'"
                      class="d-flex justify-end ga-2"
                  >
                    <v-btn
                        color="success"
                        variant="outlined"
                        @click="addAuth()"
                    >
                      ADD
                    </v-btn>
                    <v-btn color="error" variant="outlined" @click="delAuth()">
                      DEL
                    </v-btn>
                    <v-btn
                        color="primary"
                        variant="outlined"
                        @click="confirmSaveAuth()"
                    >
                      SAVE
                    </v-btn>
                    <v-btn
                        color="default"
                        variant="outlined"
                        @click="changeAuthMode('view')"
                    >
                      VIEW
                    </v-btn>
                  </div>
                </v-col>
              </v-col>
            </v-row>

            <v-divider class="border-opacity-75 pa-2" color="#ffffff" />

            <grid-list-comp
                ref="authRef"
                :column-defs="authColumnDefs"
                :row-data="authData"
                :grid-ref="authGridRef"
                @cell-click-data="authCellClick"
            />
        </v-col>
        <v-col cols="6">
            <v-row class="ma-auto">
              <v-col cols="12" class="d-flex justify-space-between pa-0">
                <span class="card-item-basic_span">
                  <v-btn
                      class="ma-1 v-icon--size-x-small"
                      color="#1B5E20"
                      icon="mdi-view-grid-outline"
                  />

                  Auth by Menu

                  <span
                      v-if="selectedAuthNm !== ''"
                      class="font-weight-bold pa-3"
                  >
                    [ {{ selectedAuthNm }} ]
                  </span>

                </span>
                <v-col cols="6" class="d-flex justify-end ga-2">
                  <div class="d-flex justify-end ga-2">
                    <v-btn
                        color="primary"
                        variant="outlined"
                        @click="confirmSaveAuthMenu()"
                    >
                      SAVE
                    </v-btn>
                  </div>
                </v-col>
              </v-col>

              <v-divider class="border-opacity-75 pa-2" color="#ffffff" />

              <tree-comp
                  :tree-items="treeItems"
                  @selected-tree-data="callBackTreeData"
              />

            </v-row>
        </v-col>
      </v-row>
    </v-card-item>
  </v-card>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import type { Ref } from 'vue'
import { ColumnDefs, GridRef, GridValidOption } from '@/components/class/Grid'
import { gridValidation } from '@/utils/gridUtil'
import { mainStore } from '@/stores/main'
import { authStore } from '@/stores/auth'
import { authMenuStore } from '@/stores/authMenu'

interface GridComponentRef  {
  addRow: (newItems:any) => void;
  delRow: () => void;
  saveRow : () => any;
}


import GridListComp from '~/components/GridListComp.vue'
import TreeComp from '~/components/TreeComp.vue'

const main = mainStore()
const auth = authStore()
const authMenu = authMenuStore()

const authMode = ref<string>('view')
const authData = ref<any[]>([])
const authColumnDefs = ref<ColumnDefs[]>([])
const authGridRef = ref<GridRef>()

const authRef: Ref<GridComponentRef | null> = ref(null);

const selectedAuth = ref<string>('')
const selectedAuthNm = ref<string>('')

const treeItems = ref<any>([])
const selectedAuthMenu = ref<string[]>([])

//권한 조회
const getAuth = async (): Promise<void> => {
  auth.getAuths()
  authData.value = auth.auths
}

//권한 추가
const addAuth = () => {
  const newItems = [
    {
      no: 0,
      authId: '',
      authNm: '',
      authVal: '',
      useYn: 'Y',
      ord: ''
    }
  ]

  authRef.value?.addRow(newItems)
}

//권한 삭제
const delAuth = async (): Promise<void> => {
  (authRef.value as GridComponentRef)?.delRow();
}

//저장 확인
const confirmSaveAuth = () => {
  main.confirmAlertOption = {
    text: '저장 하시겠습니까?',
    fnc: saveAuth
  }
  main.isConfirmAlert = true
}

//권한 저장 실행
const saveAuth = async (): Promise<void> => {

  const auths = authRef.value?.saveRow()
  console.log('auth save', auths)

  if (auths.length === 0) {
    main.alertOption = {
      title: 'Warning',
      text: '저장할 항목이 존재하지 않습니다.'
    }
    main.isAlert = true
  } else if (validationAuth(auths)) {
    main.isLoading = true

    setTimeout(() => {
      main.isLoading = false

      main.alertOption = {
        title: 'Success',
        text: '정상적으로 저장 되었습니다.'
      }
      main.isAlert = true
      changeAuthMode('view')
    }, 2000)
  }
}

//권한 validation 체크
const validationAuth = (value: any) => {
  const filters = [
    new GridValidOption('Auth Name', 'authNm', 'NULL|DUP'),
    new GridValidOption('Auth Value', 'authVal', 'NULL|DUP')
  ]

  return gridValidation(value, filters)
}

// 모드 변경
const changeAuthMode = (value: string) => {
  authMode.value = value
}

// 권한명 클릭 이벤트
const authCellClick = (cellValue: any) => {
  selectedAuth.value = cellValue[0].authId
  selectedAuthNm.value = cellValue[0].authNm

  getAuthMenu()
}

// Auth 그리드 세팅 (view, edit)
const setAuthSetting = (val: string) => {
  if (val === 'edit') {

    authColumnDefs.value = <any>[
      new ColumnDefs('ID', 'authId', 'text', {
        flex: 1,
        hide: true
      }),
      new ColumnDefs('Auth Name', 'authNm', 'text', {
        flex: 1,
        cellStyle: {
          'text-decoration': 'none',
          color: '#ffffff'
        },
        editable: true
      }),
      new ColumnDefs('Auth Value', 'authVal', 'text', { flex: 1, editable: true }),
      new ColumnDefs('Use', 'useYn', 'text', { width: '100', editable: true, cellEditor: 'agSelectCellEditor', cellEditorParams : {values : ['Y', 'N']} }),
      new ColumnDefs('Ord', 'ord', 'text', { flex: 1, editable: true }),
    ]

    authGridRef.value =
        new GridRef(
            false,
            true,
            false,
            false,
            true,
            { height :700}
        )
  } else {

    authColumnDefs.value = <any>[
      new ColumnDefs('No', 'no', 'number', { width: '100' }),
      new ColumnDefs('ID', 'authId', 'text', { flex: 1, hide: true }),
      new ColumnDefs('Auth Name', 'authNm', 'text', {
        flex: 1,
        cellStyle: {
          'text-decoration': 'underline',
          color: '#2196f3'
        }
      }),
      new ColumnDefs('Auth Value', 'authVal', 'text', { flex: 1 }),
      new ColumnDefs('Use', 'useYnLabel', 'text',  { flex: 1 }),
      new ColumnDefs('Ord', 'ord', 'text', { flex: 1 })
    ]

    authGridRef.value =
        new GridRef(
            true,
            true,
            false,
            true,
            true,
            { clickField :['authNm'], height :700}
        )
  }
}

const getAuthMenu = async (): Promise<void> => {

  authMenu.getAuthMenus(selectedAuth.value)

  treeItems.value = {
    data: authMenu.authMenuTreeItems,
    option: {
      expand: true,
      selectionMode: 'checkbox',
      filter: true,
      rootTitle: 'Menu'
    }
  }
}

// 선택된 메뉴를 string [] 형태로 넣는다..
const callBackTreeData = (value: any) => {

  selectedAuthMenu.value = []

  for(let i:number =0;i< value.length;i++){
    const treeItem = value[i][0];
    if(treeItem !== undefined){
      selectedAuthMenu.value.push(treeItem.id)
    }
  }
}

const confirmSaveAuthMenu = () => {
  if(selectedAuth.value === ''){
    main.alertOption = {
      title: 'Warning',
      text: '권한을 선택하세요.'
    }
    main.isAlert = true
  }else {
    main.confirmAlertOption = {
      text: `저장 하시겠습니까?`,
      fnc: saveAuthMenu
    }
    main.isConfirmAlert = true
  }
}

const saveAuthMenu = () => {
  main.isLoading = true

  setTimeout(() => {
    main.isLoading = false

    console.log('authMenu save', selectedAuthMenu.value);

    main.alertOption = {
      title: 'Success',
      text: '정상적으로 저장 되었습니다.'
    }
    main.isAlert = true
  }, 2000)
}

watch(
    () => authMode.value,
    (newValue) => {
      if (newValue === 'edit') {
        setAuthSetting('edit')
      } else {
        getAuth()
        setAuthSetting('view')
      }
    }
)

onMounted(() => {
  setAuthSetting('view')
  getAuth()
})
</script>

<style scoped></style>
