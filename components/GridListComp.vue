<template>
  <client-only>
    <div class="d-flex justify-end mb-2 ga-3">
      <v-btn
        v-if="excelExportUse"
        variant="tonal"
        color="primary"
        @click="filterCheck()"
      >
        Filter
      </v-btn>

      <v-btn
        v-if="excelExportUse"
        variant="tonal"
        color="warning"
        @click="exportCsv()"
      >
        Download CSV
      </v-btn>
    </div>

    <ag-grid-vue
      :style="{ height: gridHeight }"
      class="ag-theme-quartz-dark"
      :column-defs="columnDefs"
      :row-data="rowData"
      :grid-options="gridOptions"
      @grid-ready="onGridReady"
      @selection-changed="onSelectionChanged"
    />
  </client-only>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount, onMounted, watch } from 'vue'
import { AgGridVue } from 'ag-grid-vue3'

export default defineComponent({
  components: {
    AgGridVue
  },

  props: ['columnDefs', 'rowData', 'gridRef'],
  emits: ['callBackData', 'cellClickData'],
  setup: function (props, { emit }) {
    const rowData = ref([])
    const columnDefs = ref([])

    const gridApi = ref<any>(null)
    const gridOptions = ref<any>(null)

    const selectedData = ref<any[]>([])
    const excelExportUse = ref<boolean>(false)
    const clickEventUse = ref<boolean>(false)

    const gridHeight = ref('520px')

    const filterUse = ref<boolean>(false)

    const onSelectionChanged = () => {
      selectedData.value = gridApi.value.getSelectedRows()
      if (!clickEventUse.value) {
        emit('callBackData', selectedData.value)
      }
    }

    const onGridReady = (params: any) => {
      gridApi.value = params.api
    }

    onBeforeMount(() => {
      gridOptions.value = {
        rowSelection: 'single',
        pagination: true,
        paginationPageSize: 10,
        paginationPageSizeSelector: [10, 50, 100, 1000],
        isRowSelectable: null
      }
    })

    onMounted(() => {
      columnDefs.value = props.columnDefs
      rowData.value = props.rowData
      const { gridRef } = props

      // 클릭 이벤트를 사용할 경우
      if (gridRef.clickEventUse) {
        clickEventUse.value = true

        gridOptions.value = {
          ...gridOptions.value,
          onCellClicked: (params) => {
            for (let i = 0; i < gridRef.clickField.length; i++) {
              if (params.colDef.field === gridRef.clickField[i]) {
                selectedData.value = gridApi.value.getSelectedRows()
                emit('cellClickData', selectedData.value)
              }
            }
          }
        }
      }

      // 페이징 사용할지 체크
      gridOptions.value.pagination = gridRef.pagingUse

      // 체크박스를 사용할 경우
      if (gridRef.checkBoxUse) {
        gridOptions.value = {
          ...gridOptions.value,
          suppressRowClickSelection: true,
          isRowSelectable: gridRef.isRowSelectable
        }

        gridOptions.value.rowSelection = 'multiple'
      }

      // csv 다운로드 기능 사용할지 체크
      if (gridRef.excelExportUse) {
        excelExportUse.value = gridRef.excelExportUse
      }
    })

    watch(
      () => props.columnDefs,
      (newValue) => {
        columnDefs.value = newValue
      }
    )

    watch(
      () => props.rowData,
      (newValue) => {
        rowData.value = newValue
      }
    )

    watch(
      () => filterUse.value,
      (newValue) => {
        const defaultColDef = {
          filter: newValue,
          floatingFilter: newValue
        }

        if (newValue) {
          gridHeight.value = '570px'
        } else {
          gridHeight.value = '520px'
        }

        gridApi.value.setGridOption('defaultColDef', defaultColDef)
      }
    )

    const exportCsv = () => {
      gridApi.value.exportDataAsCsv()
    }

    const filterCheck = () => {
      filterUse.value = !filterUse.value
    }

    return {
      columnDefs,
      rowData,
      gridOptions,
      excelExportUse,
      gridHeight,
      onSelectionChanged,
      onGridReady,
      exportCsv,
      filterCheck
    }
  }
})
</script>

<style scoped></style>
