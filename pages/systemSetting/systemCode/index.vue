<template>
  <v-card min-height="900">
    <v-card-item width="100%">
      <v-row class="ma-auto">
        <v-col cols="5">
            <v-row class="ma-auto">
              <v-col cols="12" class="d-flex justify-space-between pa-0">
                <span class="card-item-basic_span">

                  <v-btn
                      v-if="groupCodeMode == 'view'"
                      class="ma-1 v-icon--size-x-small"
                      icon="mdi-view-grid-outline"
                  />
                  <v-btn
                      v-else
                      class="ma-1 v-icon--size-x-small"
                      icon="mdi-square-edit-outline"
                  />

                  Group Code
                </span>
                <v-col cols="6" class="d-flex justify-end ga-2">
                  <v-btn
                      v-if="groupCodeMode == 'view'"
                      color="warning"
                      @click="changeGroupCodeMode('edit')"
                  >
                    Edit
                  </v-btn>
                  <div v-if="groupCodeMode == 'edit'" class="d-flex justify-end ga-2">
                    <v-btn color="success"   @click="addGroupCode()">ADD</v-btn>
                    <v-btn color="error"  @click="delGroupCode()">DEL</v-btn>
                    <v-btn color="primary"  @click="confirmSaveGroupCode()">SAVE</v-btn>
                    <v-btn color="warning"  @click="changeGroupCodeMode('view')">VIEW</v-btn>
                  </div>
                </v-col>
              </v-col>
            </v-row>

            <v-divider class="border-opacity-75 pa-2" color="#ffffff" />

            <grid-list-comp
                :column-defs="groupCodeColumnDefs"
                :row-data="groupCodeData"
                :grid-ref="groupCodeGridRef"
                @cell-click-data="GroupCodeCellClick"
                ref="groupCodeRef"
            />
        </v-col>
        <v-col cols="7">
            <v-row class="ma-auto">
              <v-col cols="12" class="d-flex justify-space-between pa-0">
                <span class="card-item-basic_span">
                  <v-btn
                      v-if="codeMode == 'view'"
                      class="ma-1 v-icon--size-x-small"
                      icon="mdi-view-grid-outline"
                  />
                   <v-btn
                       v-else
                       class="ma-1 v-icon--size-x-small"
                       icon="mdi-square-edit-outline"
                   />

                  Code
                  <span v-if="selectedGroupCodeNm !== ''" class="font-weight-bold pa-3">
                        [ {{selectedGroupCodeNm}} ]
                  </span>
                </span>
                <v-col cols="6" class="d-flex justify-end ga-2">
                  <v-btn
                      v-if="codeMode == 'view'"
                      color="warning"
                      @click="changeCodeMode('edit')"
                  >
                    Edit
                  </v-btn>
                  <div v-if="codeMode == 'edit'"  class="d-flex justify-end ga-2">
                    <v-btn color="success"  @click='addCode()'>ADD</v-btn>
                    <v-btn color="error"   @click='delCode()'>DEL</v-btn>
                    <v-btn color="primary"   @click='confirmGroupCode()'>SAVE</v-btn>
                    <v-btn color="warning"  @click="changeCodeMode('view')">VIEW</v-btn>
                  </div>
                </v-col>
              </v-col>
            </v-row>

            <v-divider class="border-opacity-75 pa-2" color="#ffffff" />

            <grid-list-comp
                :column-defs="codeColumnDefs"
                :row-data="codeData"
                :grid-ref="codeGridRef"
                ref="codeRef"
            />
        </v-col>
      </v-row>
    </v-card-item>
  </v-card>
</template>

<script setup lang="ts">
import GridListComp from '~/components/GridListComp.vue'
import { ref, onMounted, watch } from 'vue'
import { groupCodeStore } from '@/stores/groupCode'
import { codeStore } from '@/stores/code'
import { mainStore } from '@/stores/main'
import {ColumnDefs, GridRef, GridValidOption} from '~/components/class/Grid'
import { gridValidation } from '~/utils/gridUtil'

const main = mainStore()

const groupCodeMode = ref('view')
const codeMode = ref('view')

//그룹 코드 그리드
const groupCode = groupCodeStore() //그룹코드 스토어
const groupCodeData = ref<any[]>([]) // 그룹코드 데이터
const groupCodeColumnDefs = ref([])  // 그롭코드 그리드 컬럼속성
const groupCodeGridRef = ref({}) // 그룹코드 그리드 속성
const groupCodeRef = ref(null) // 그릅코드 참조
const selectedGroupCode = ref<string>('') //선택된 그룹코드값
const selectedGroupCodeNm = ref<string>('') //선택된 그룹코드명

//코드 그리드
const code = codeStore() //코드 스토어
const codeData = ref<any[]>([]) //코드 데이터
const codeColumnDefs = ref([]) //코드 그리드 컬럼속성
const codeGridRef = ref({}) //코드 그리드 속성
const codeRef = ref(null) //코드 참조


//그릅코드 클릭 이벤트
const GroupCodeCellClick = (cellValue: any) => {
  selectedGroupCode.value = cellValue[0].id
  selectedGroupCodeNm.value = cellValue[0].codeGrpNm
  getCode(cellValue[0].id);
}

//그룹 코드 조회
const getGroupCode = async (): Promise<void> => {
  groupCode.getGroupCodes()
  groupCodeData.value = groupCode.groupCodes
}

//코드 조회
const getCode = async (groupCodeId : string): Promise<void> => {
  code.getCodes(groupCodeId)
  codeData.value = code.codes
}

//그룹코드 모드 변경
const changeGroupCodeMode = (groupCodeModeVal: string) => {
  groupCodeMode.value = groupCodeModeVal
}

//코드 모드 변경
const changeCodeMode = (codeModeVal: string) => {
  if(codeModeVal === 'edit'&& selectedGroupCode.value ===''){
    main.alertOption = {
      title: 'Warning',
      text: '그룹 코드를 선택하세요.'
    }
    main.isAlert = true
  }else{
    codeMode.value = codeModeVal
  }
}


//그룹코드 그리드 세팅 (view, edit)
const setGroupCodeGridSetting = (val: string) => {
  if (val === 'edit') {

    groupCodeColumnDefs.value = <any>[
      new ColumnDefs('ID', 'id', 'text', { flex: 1, hide: true }),
      new ColumnDefs('Code Name', 'codeGrpNm', 'text', {
        flex: 1,
        cellStyle: {
          'text-decoration': 'none',
          color: '#ffffff'
        },
        editable: true
      }),
      new ColumnDefs('Code Value', 'codeGrpVal', 'text', { flex: 1, editable: true }),
      new ColumnDefs('Use', 'useYn', 'text', { width: '100', editable: true, cellEditor: 'agSelectCellEditor', cellEditorParams : {values : ['Y', 'N']} })
    ]

    groupCodeGridRef.value =
        new GridRef(
          false,
          true,
          false,
          false,
          true,
          { height :700}
        )
  } else {

    groupCodeColumnDefs.value = <any>[
      new ColumnDefs('No', 'no', 'number', { width: '100' }),
      new ColumnDefs('ID', 'id', 'text', { flex: 1, hide: true }),
      new ColumnDefs('Code Name', 'codeGrpNm', 'text', {
        flex: 1,
        cellStyle: {
          'text-decoration': 'underline',
          color: '#2196f3'
        }
      }),
      new ColumnDefs('Code Value', 'codeGrpVal', 'text', { flex: 1 }),
      new ColumnDefs('Use', 'useYnLabel', 'text', { width: '100' })
    ]

    groupCodeGridRef.value =
      new GridRef(
        true,
        true,
        false,
        true,
        true,
        { clickField :['codeGrpNm'], height :700}
      )
  }
}

//코드 그리드 세팅 (view, edit)
const setCodeGridSetting = (val: string) => {
  if (val === 'edit') {

    codeColumnDefs.value = <any>[
      new ColumnDefs('ID', 'id', 'text', { flex: 1, hide: true }),
      new ColumnDefs('Code Name', 'codeNm', 'text', {
        flex: 1,
        editable: true
      }),
      new ColumnDefs('Code Value', 'codeVal', 'text', {
        flex: 1,
        editable: true
      }),
      new ColumnDefs('Use', 'useYn', 'text', { width: '100', editable: true, cellEditor: 'agSelectCellEditor', cellEditorParams : {values : ['Y' ,  'N']} }),
      new ColumnDefs('Ord', 'ord', 'text', { width: '100', editable: true })
    ]

    codeGridRef.value =
        new GridRef(
          false,
          true,
          false,
          false,
          true,
          { height :700}
        )
  } else {

    codeColumnDefs.value = <any>[
      new ColumnDefs('No', 'no', 'number', { width: '100' }),
      new ColumnDefs('ID', 'id', 'text', { flex: 1, hide: true }),
      new ColumnDefs('Code Name', 'codeNm', 'text', {
        flex: 1,
      }),
      new ColumnDefs('Code Value', 'codeVal', 'text', {
        flex: 1,
      }),
      new ColumnDefs('Use', 'useYnLabel', 'text', { width: '100'}),
      new ColumnDefs('Ord', 'ord', 'text', { width: '100' })
    ]

    codeGridRef.value =
        new GridRef(
          false,
          true,
          false,
          true,
          true,
          { height :700}
        )
  }
}

const addGroupCode = () => {
  const newItems = [
    {
      no: 0,
      id: '',
      codeGrpNm: '',
      codeGrpVal: '',
      useYn: 'Y'
    }
  ]
  groupCodeRef.value.addRow(newItems);
}

const delGroupCode = async (): Promise<void> => {
   groupCodeRef.value.delRow();
}

const confirmSaveGroupCode = () => {

  main.confirmAlertOption = {
    text: `저장 하시겠습니까?`,
    fnc: saveGroupCode
  }
  main.isConfirmAlert = true
}

const saveGroupCode = async (): Promise<void> => {
  const groupCodes = groupCodeRef.value.saveRow()
  console.log('save', groupCodes)

  if (groupCodes.length === 0) {
    main.alertOption = {
      title: 'Warning',
      text: '저장할 항목이 존재하지 않습니다.'
    }
    main.isAlert = true
  }else if (validationGroupCode(groupCodes)) {
    main.isLoading = true

    setTimeout(() => {
      main.isLoading = false

      main.alertOption = {
        title: 'Success',
        text: '정상적으로 저장 되었습니다.'
      }
      main.isAlert = true
      changeGroupCodeMode('view')
    }, 2000)
  }
}

const validationGroupCode = (value: any) => {
  const filters = [
    new GridValidOption('Code Name', 'codeGrpNm', 'NULL|DUP'),
    new GridValidOption('Code Value', 'codeGrpVal', 'NULL|DUP')
  ]

  return gridValidation(value, filters)
}


const addCode = () => {
  const newItems = [
    {
      no: 0,
      id: '',
      codeNm: '',
      codeVal: '',
      useYn: 'Y',
      ord: ''
    }
  ]
  codeRef.value.addRow(newItems);
}

const delCode = async (): Promise<void> => {
  codeRef.value.delRow();
}


const confirmGroupCode = () => {

  main.confirmAlertOption = {
    text: `저장 하시겠습니까?`,
    fnc: saveCode
  }
  main.isConfirmAlert = true
}

const saveCode = async (): Promise<void> => {

  const codes = codeRef.value.saveRow()
  console.log('save', codes)

  if (codes.length === 0) {
    main.alertOption = {
      title: 'Warning',
      text: '저장할 항목이 존재하지 않습니다.'
    }
    main.isAlert = true
  } else if (validationCode(codes)) {
    main.isLoading = true

    setTimeout(() => {
      main.isLoading = false

      main.alertOption = {
        title: 'Success',
        text: '정상적으로 저장 되었습니다.'
      }
      main.isAlert = true
      changeCodeMode('view')
    }, 2000)
  }
}


const validationCode = (value: any) => {
  const filters = [
    new GridValidOption('Code Name', 'codeNm', 'NULL|DUP'),
    new GridValidOption('Code Value', 'codeVal', 'NULL|DUP')
  ]

  return gridValidation(value, filters)
}

watch(
  () => groupCodeMode.value,
  (newValue) => {
    if (newValue === 'edit') {
      setGroupCodeGridSetting('edit')
      codeData.value = [];
      selectedGroupCode.value = ''
      codeMode.value = 'view'
    } else {
      getGroupCode()
      setGroupCodeGridSetting('view')
    }
  }
)

watch(
    () => codeMode.value,
    (newValue) => {
      if (newValue === 'edit') {
        setCodeGridSetting('edit')
      } else {
        getCode(selectedGroupCode.value)
        setCodeGridSetting('view')
      }
    }
)

watch(
    () => selectedGroupCode.value,
    (newValue) => {
      if (newValue === '') {
        selectedGroupCodeNm.value = ''
      }
    }
)


onMounted(() => {
  setGroupCodeGridSetting('view')
  setCodeGridSetting('view')
  getGroupCode();
})
</script>

<style scoped></style>
