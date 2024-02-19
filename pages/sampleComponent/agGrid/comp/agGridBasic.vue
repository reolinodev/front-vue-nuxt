<template>
  <v-row class="pt-5 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%">
          <v-row class="ma-auto">
            <v-col cols="12">
              <v-card-text># Basic</v-card-text>
              <client-only>
                selectedRow(single) : {{ selectedData }}
                <ag-grid-vue
                  style="height: 471px"
                  class="ag-theme-quartz-dark"
                  :column-defs="columnDefs"
                  :row-data="rowData"
                  :row-selection="`single`"
                  :enable-browser-tooltips="true"
                  @grid-ready="onGridReady"
                  @selection-changed="onSelectionChanged"
                >
                  />
                </ag-grid-vue>
              </client-only>
            </v-col>
            <v-col cols="12">
              <v-card-text># Paging & Flex & multiple</v-card-text>
              selectedRows(multiple) : {{ selectedDatas }}
              <client-only>
                <ag-grid-vue
                  style="height: 471px"
                  class="ag-theme-quartz-dark"
                  :column-defs="columnDefs2"
                  :row-data="rowData"
                  :row-selection="`multiple`"
                  :pagination="true"
                  :pagination-page-size="paginationPageSize"
                  :pagination-page-size-selector="paginationPageSizeSelector"
                  :pagination-number-formatter="paginationNumberFormatter"
                  @grid-ready="onGridReady2"
                  @selection-changed="onSelectionChanged2"
                />
              </client-only>
            </v-col>
          </v-row>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue3'
import { ref } from 'vue'

export default {
  components: {
    AgGridVue
  },
  setup() {
    const page = ref(1)
    const gridApi = ref(null)
    const gridApi2 = ref(null)

    const selectedData = ref([])
    const selectedDatas = ref([])

    const paginationPageSize = ref(null)
    const paginationPageSizeSelector = ref(null)
    const paginationNumberFormatter = ref(null)

    const onSelectionChanged = () => {
      selectedData.value = gridApi.value.getSelectedRows()
    }

    const onSelectionChanged2 = () => {
      selectedDatas.value = gridApi2.value.getSelectedRows()
    }

    const onGridReady = (params) => {
      gridApi.value = params.api
    }

    const onGridReady2 = (params) => {
      gridApi2.value = params.api
    }

    onBeforeMount(() => {
      paginationPageSize.value = 10
      paginationPageSizeSelector.value = [10, 20, 1000]
      paginationNumberFormatter.value = (params) => {
        return `[${params.value.toLocaleString()}]`
      }
    })

    return {
      columnDefs: [
        { headerName: 'id', field: 'id', type: 'text', width: 100, hide: true },
        {
          headerName: 'Name',
          field: 'name',
          type: 'text',
          width: 100,
          tooltipField: 'name',
          headerTooltip: 'Name Column'
        },
        { headerName: 'Type', field: 'type', type: 'text', width: 200 },
        { headerName: 'Price', field: 'price', type: 'number', width: 300 }
      ],
      columnDefs2: [
        { headerName: 'Name', field: 'name', type: 'text', flex: 1 },
        { headerName: 'Type', field: 'type', type: 'text', flex: 1 },
        { headerName: 'Price', field: 'price', type: 'number', flex: 2 }
      ],
      rowData: [
        { id: '1', name: 'A1', type: 'String', price: 1000000 },
        { id: '2', name: 'A2', type: 'String', price: 2000000 },
        { id: '3', name: 'A3', type: 'String', price: 3000000 },
        { id: '4', name: 'A4', type: 'Number', price: 4000000 },
        { id: '5', name: 'A5', type: 'Number', price: 5000000 },
        { id: '6', name: 'A6', type: 'Number', price: 6000000 },
        { id: '7', name: 'A7', type: 'Float', price: 7000000 },
        { id: '8', name: 'A8', type: 'Float', price: 8000000 },
        { id: '9', name: 'A9', type: 'Float', price: 9000000 },
        { id: '10', name: 'A10', type: 'Float', price: 10000000 },
        { id: '11', name: 'A11', type: 'Float', price: 11000000 },
        { id: '12', name: 'A12', type: 'Float', price: 12000000 },
        { id: '13', name: 'A13', type: 'Float', price: 13000000 },
        { id: '14', name: 'A14', type: 'Float', price: 14000000 },
        { id: '15', name: 'A15', type: 'Float', price: 15000000 },
        { id: '16', name: 'A16', type: 'Float', price: 16000000 },
        { id: '17', name: 'A17', type: 'Float', price: 17000000 },
        { id: '18', name: 'A18', type: 'Float', price: 18000000 },
        { id: '19', name: 'A19', type: 'Float', price: 19000000 },
        { id: '20', name: 'A20', type: 'Float', price: 20000000 },
        { id: '21', name: 'A21', type: 'Float', price: 21000000 }
      ],
      page,
      selectedData,
      selectedDatas,
      paginationPageSize,
      paginationPageSizeSelector,
      paginationNumberFormatter,
      onGridReady,
      onGridReady2,
      onSelectionChanged,
      onSelectionChanged2
    }
  }
}
</script>

<style scoped></style>
