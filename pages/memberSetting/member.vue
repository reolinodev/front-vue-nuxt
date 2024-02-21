<template>
  <v-card min-height="900">
    <v-card-item width="100%">
      <v-row class="ma-auto">
        <v-col cols="12">
          <grid-list-comp
            :column-defs="columnDefs"
            :row-data="rowData"
            :grid-ref="gridRef"
            @call-back-data="callBackData"
            @cell-click-data="cellClickData"
          />
        </v-col>
      </v-row>
    </v-card-item>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { memberStore } from '@/stores/member'
import GridListComp from '~/components/GridListComp.vue'

export default defineComponent({
  components: { GridListComp },
  setup: function () {
    const member = memberStore()
    const rowData = ref([])
    const columnDefs = ref([
      {
        headerName: 'No',
        field: 'no',
        type: 'number',
        width: '80',
        cellStyle: {
          'text-align': 'center'
        }
      },
      { headerName: 'ID', field: 'id', type: 'number', flex: 1, hide: true },
      {
        headerName: 'Login Id',
        field: 'loginId',
        type: 'text',
        flex: 1,
        filter: 'agTextColumnFilter'
      },
      {
        headerName: 'Name',
        field: 'userNm',
        type: 'text',
        flex: 1,
        filter: 'agTextColumnFilter'
      },
      {
        headerName: 'Mobile No',
        field: 'mobileNo',
        type: 'text',
        flex: 1,
        filter: 'agTextColumnFilter',
        valueFormatter: (params: string) => {
          // prettier-ignore
          return `(${params.value.substring(0, 3)}) ${params.value.substring(3, 7)}-${params.value.substring(7)}`
        }
      },
      {
        headerName: 'Email',
        field: 'email',
        type: 'text',
        flex: 1,
        filter: 'agTextColumnFilter'
      }
    ])

    const isRowSelectable = (params: any) => {
      return params.data.userNm === 'Kim1'
    }

    const defaultColDef = ref({
      filter: false, // 전체필터
      floatingFilter: true // 필터 플롯팅
    })

    const gridRef = ref({
      clickEventUse: false, // 클릭 이벤트 사용
      clickField: [], // 클릭 이벤트에 사용할 컬럼
      pagingUse: true, // 페이징 사용여부
      checkBoxUse: false, // 체크박스 사용여부
      isRowSelectable, // 체크박스시 사용가능한 로우 지정
      excelExportUse: true, // 엑셀다운로드 사용여부
      defaultColDef // 필터 옵션
    })

    onMounted(() => {
      member.getMembers()
      rowData.value = member.members
    })

    const cellClickData = (value: any) => {
      console.log('cellClickData', value)
    }

    const callBackData = (value: any) => {
      console.log('callBackData', value)
    }

    return {
      columnDefs,
      rowData,
      gridRef,
      cellClickData,
      callBackData
    }
  }
})
</script>

<style scoped></style>
