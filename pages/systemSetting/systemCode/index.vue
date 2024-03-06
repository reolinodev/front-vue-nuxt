<template>
  <v-card min-height="900">
    <v-card-item width="100%">
      <v-row class="ma-auto">
        <v-col cols="5">
          <v-card-text>그룹코드</v-card-text>
          <v-col cols="12" class="d-flex justify-end ga-2">
            <v-btn
              v-if="groupCodeMode == 'search'"
              color="success"
              @click="chanegeGroupCodeMode('edit')"
            >
              Edit
            </v-btn>
            <div v-if="groupCodeMode == 'edit'" class="d-flex justify-end ga-2">
              <v-btn color="primary" @click="addGroupCode()">ADD</v-btn>
              <v-btn color="error" @click="delGroupCode()">DEL</v-btn>
              <v-btn color="success" @click="saveGroupCode()">SAVE</v-btn>
              <v-btn color="warning" @click="chanegeGroupCodeMode('search')">BACK</v-btn>
            </div>
          </v-col>
          <grid-list-comp
            :column-defs="groupCodeColumnDefs"
            :row-data="groupCodeData"
            :grid-ref="groupCodeGridRef"
            @cell-click-data="GroupCodeCellClick"
            ref="groupCodeRef"
          />
        </v-col>
        <v-col cols="7">
          <v-card-text> 코드 </v-card-text>
          <v-col cols="12" class="d-flex justify-end ga-2">
            <v-btn
                v-if="codeMode == 'search'"
                color="success"
                @click="chanegeCodeMode('edit')"
            >
              Edit
            </v-btn>
            <div v-if="codeMode == 'edit'" cols="12" class="d-flex justify-end ga-2">
              <v-btn color="primary" @click='addCode()'>ADD</v-btn>
              <v-btn color="error"  @click='delCode()'>DEL</v-btn>
              <v-btn color="success"  @click='saveCode()'>SAVE</v-btn>
              <v-btn color="warning" @click="chanegeCodeMode('search')">BACK</v-btn>
            </div>
          </v-col>
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
import { ColumnDefs, GridRef} from '~/components/class/Grid'

const groupCodeMode = ref('search')
const codeMode = ref('search')

//그룹 코드 그리드
const groupCode = groupCodeStore() //그룹코드 스토어
const groupCodeData = ref<any[]>([]) // 그룹코드 데이터
const groupCodeColumnDefs = ref([])  // 그롭코드 그리드 컬럼속성
const groupCodeGridRef = ref({}) // 그룹코드 그리드 속성
const groupCodeRef = ref(null) // 그릅코드 참조
const selectedGroupCode = ref<string>('') //선택된 그룹코드값

//코드 그리드
const code = codeStore() //코드 스토어
const codeData = ref<any[]>([]) //코드 데이터
const codeColumnDefs = ref([]) //코드 그리드 컬럼속성
const codeGridRef = ref({}) //코드 그리드 속성
const codeRef = ref(null) //코드 참조


//그릅코드 클릭 이벤트
const GroupCodeCellClick = (cellValue: any) => {
  selectedGroupCode.value = cellValue[0].id
  getCode( cellValue[0].id);
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
const chanegeGroupCodeMode = (groupCodeModeVal: string) => {
  groupCodeMode.value = groupCodeModeVal
}

//코드 모드 변경
const chanegeCodeMode = (codeModeVal: string) => {
  codeMode.value = codeModeVal
}


//그룹코드 그리드 세팅 (search, edit)
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
          true
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
        { clickField :['codeGrpNm']}
      )
  }
}

//코드 그리드 세팅 (search, edit)
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
          true
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
          true
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
  //todo 삭제할껀지 물어보는 confirm, 삭제 API 호출
  const groupCode = groupCodeRef.value.delRow();
  console.log('del', groupCode)
}

const saveGroupCode = async (): Promise<void> => {
  //todo 저장확인 confirm 추가, 실제 저장 API 호출, 중복된 값이 존재했을때 있다고 경고해야 함
  const groupCodes = groupCodeRef.value.saveRow()
  console.log('save', groupCodes)
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
  //todo 삭제할껀지 물어보는 confirm, 삭제 API 호출
  const code = codeRef.value.delRow();
  console.log('del', code)
}

const saveCode = async (): Promise<void> => {
  //todo 저장확인 confirm 추가, 실제 저장 API 호출, 중복된 값이 존재했을때 있다고 경고해야 함
  const codes = codeRef.value.saveRow()
  console.log('save', codes)
}

watch(
  () => groupCodeMode.value,
  (newValue) => {
    if (newValue === 'edit') {
      setGroupCodeGridSetting('edit')
      codeData.value = [];
    } else {
      getGroupCode()
      setGroupCodeGridSetting('search')
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
        setCodeGridSetting('search')
      }
    }
)


onMounted(() => {
  setGroupCodeGridSetting('search')
  setCodeGridSetting('search')
  getGroupCode();
})
</script>

<style scoped></style>
