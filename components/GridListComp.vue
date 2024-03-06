<template>
  <client-only>
    <div class="d-flex justify-end mb-2 ga-3">
      <v-btn
        v-if="filterUse"
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
      :column-defs="columnDefsArray"
      :row-data="rowDataArray"
      :grid-options="gridOptions"
      @grid-ready="onGridReady"
      @selection-changed="onSelectionChanged"
    />
  </client-only>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted, watch } from 'vue'
import { AgGridVue } from 'ag-grid-vue3'

const props = defineProps({
  columnDefs: [],
  rowData: [],
  gridRef: []
})

const emits = defineEmits(['eventName', 'cellClickData'])

const gridApi = ref<any>(null)
const gridOptions = ref<any>(null)

const columnDefsArray = ref<any>(props.columnDefs)
const rowDataArray = ref<any>(props.rowData)

const selectedData = ref<any[]>([])
const excelExportUse = ref<boolean>(false)
const clickEventUse = ref<boolean>(false)
const filterUse = ref<boolean>(false)

const gridHeight = ref('')
let defaultHeight = 520
const addHeight = 50

const filterActive = ref<boolean>(false)

const onSelectionChanged = () => {
  if (gridApi.value) {
    selectedData.value = gridApi.value.getSelectedRows()
    if (!clickEventUse.value) {
      emits('cellClickData', selectedData.value)
    }
  }
}

const onGridReady = (params: any) => {
  gridApi.value = params.api
}

onBeforeMount(() => {
  initGridOption()
})

onMounted(() => {
  if (
    props.gridRef !== null &&
    props.gridRef !== undefined &&
    Object.keys(props.gridRef).length !== 0
  ) {
    setGridRef(props.gridRef)
  }
})

const initGridOption = () => {
  gridOptions.value = {
    rowSelection: 'single',
    pagination: true,
    paginationPageSize: 10,
    paginationPageSizeSelector: [10, 50, 100, 1000],
    isRowSelectable: null
  }
}

const setGridRef = (gridRef: any) => {
  if (gridRef.height !== undefined) {
    defaultHeight = gridRef.height
  }

  gridHeight.value = `${defaultHeight}px`

  if (gridRef.clickEventUse !== undefined && gridRef.clickEventUse) {
    clickEventUse.value = true

    gridOptions.value = {
      ...gridOptions.value,
      onCellClicked: (params: any) => {
        const { clickField } = gridRef
        for (let i = 0; i < clickField.length; i++) {
          if (params.colDef.field === gridRef.clickField[i]) {
            selectedData.value = gridApi.value.getSelectedRows()
            emits('cellClickData', selectedData.value)
          }
        }
      }
    }
  }

  // 페이징 사용할지 체크
  if (gridRef.pagingUse !== undefined) {
    gridOptions.value.pagination = gridRef.pagingUse
  }

  // 체크박스를 사용할 경우
  if (gridRef.checkBoxUse !== undefined && gridRef.checkBoxUse) {
    gridOptions.value = {
      ...gridOptions.value,
      suppressRowClickSelection: true,
      isRowSelectable: gridRef.isRowSelectable
    }

    gridOptions.value.rowSelection = 'multiple'
  }

  // csv 다운로드 기능 사용할지 체크
  if (gridRef.excelExportUse !== undefined) {
    excelExportUse.value = gridRef.excelExportUse
  }

  if (gridRef.filterUse !== undefined) {
    filterUse.value = gridRef.filterUse
  }

  if (gridApi.value != null) {
    const gridOptionsArray = Object.entries(gridOptions.value)
    for (let i = 0; i < gridOptionsArray.length; i++) {
      const gridOption = gridOptionsArray[i]

      if (gridOption[0] === 'pagination') {
        gridApi.value.setGridOption('pagination', gridOption[1])
      } else if (gridOption[0] === 'paginationPageSize') {
        gridApi.value.setGridOption('paginationPageSize', gridOption[1])
      } else if (gridOption[0] === 'paginationPageSizeSelector') {
        gridApi.value.setGridOption('paginationPageSizeSelector', gridOption[1])
      } else if (gridOption[0] === 'rowSelection') {
        gridApi.value.setGridOption('rowSelection', gridOption[1])
      } else if (gridOption[0] === 'isRowSelectable') {
        gridApi.value.setGridOption('isRowSelectable', gridOption[1])
      } else if (gridOption[0] === 'onCellClicked') {
        gridApi.value.setGridOption('onCellClicked', gridOption[1])
      }
    }

    if (!gridRef.clickEventUse) {
      gridApi.value.setGridOption('onCellClicked', null)
    }
  }
}

const addRow = (newItems: any) => {
  gridApi.value.applyTransaction({
    add: newItems,
    addIndex: rowDataArray.value.length
  })
}

const delRow = () => {
  const selectedData = gridApi.value.getSelectedRows()
  if (selectedData.length === 0) {
    // todo 얼럿으로 변경
    console.log('선택된 Row가 존재하지 않습니다.')
  } else {
    gridApi.value.applyTransaction({ remove: selectedData })
  }
  return selectedData
}

const saveRow = () => {
  const rowData: any = []
  gridApi.value.forEachNode(function (node: any) {
    rowData.push(node.data)
  })
  return rowData
}

watch(
  () => props.gridRef,
  (newValue) => {
    initGridOption()
    setGridRef(newValue)
  }
)

watch(
  () => props.rowData,
  (newValue) => {
    rowDataArray.value = newValue
  }
)

watch(
  () => props.columnDefs,
  (newValue) => {
    columnDefsArray.value = newValue
  }
)

watch(
  () => filterActive.value,
  (newValue) => {
    const defaultColDef = {
      filter: newValue,
      floatingFilter: newValue
    }

    if (newValue) {
      gridHeight.value = `${defaultHeight + addHeight}px`
    } else {
      gridHeight.value = `${defaultHeight}px`
    }

    gridApi.value.setGridOption('defaultColDef', defaultColDef)
  }
)

const exportCsv = () => {
  gridApi.value.exportDataAsCsv()
}

const filterCheck = () => {
  filterActive.value = !filterActive.value
}

defineExpose({
  addRow,
  delRow,
  saveRow
})
</script>

<style scoped></style>
