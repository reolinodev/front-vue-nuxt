<template>
  <v-row class="pt-5 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%">
          <v-row class="ma-auto">
            <v-col cols="12">
              <v-card-text># API Call & Download CSV</v-card-text>
              <v-col class="d-flex justify-end">
                <v-btn color="info" @click="onBtnExport()">
                  Download CSV export file
                </v-btn>
              </v-col>
              <client-only>
                <ag-grid-vue
                  style="height: 471px"
                  class="ag-theme-quartz-dark"
                  :column-defs="columnDefs"
                  :default-col-def="defaultColDef"
                  :row-data="rowData"
                  :suppress-excel-export="true"
                  @grid-ready="onGridReady"
                />
              </client-only>
            </v-col>

            <v-col cols="12">
              <v-card-text># Auto resize & grid option</v-card-text>
              selectedRow(single) : {{ selectedData }}
              <client-only>
                <ag-grid-vue
                  style="height: 471px"
                  class="ag-theme-quartz-dark"
                  :column-defs="columnDefs"
                  :row-data="rowData"
                  :grid-options="gridOptions"
                  @grid-ready="onGridReady"
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
    const gridApi = ref(null)

    const columnDefs = ref([
      {
        field: 'athlete',
        cellStyle: {
          'text-decoration': 'underline',
          color: '#2196f3'
        }
      },
      { field: 'gold' },
      { field: 'silver' },
      { field: 'bronze' },
      { field: 'total' },
      { field: 'age' },
      { field: 'country' },
      { field: 'sport' },
      { field: 'year' },
      { field: 'date' }
    ])

    const defaultColDef = ref({
      resizable: true
    })

    const rowData = ref(null)

    const onGridReady = (params) => {
      gridApi.value = params.api

      const updateData = (data) => {
        rowData.value = data
      }

      fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
        .then((resp) => resp.json())
        .then((data) => updateData(data))
    }

    const onBtnExport = () => {
      gridApi.value.exportDataAsCsv()
    }

    const onSelectionChanged = () => {
      console.log('11', gridApi.value.getSelectedRows())
    }

    const selectedData = ref([])

    const gridOptions = {
      rowSelection: 'single',
      autoSizeStrategy: {
        type: 'fitGridWidth',
        defaultMinWidth: 100,
        columnLimits: [
          {
            colId: 'athlete',
            minWidth: 300
          }
        ]
      },
      onCellClicked: (params) => {
        if (params.colDef.field === 'athlete') {
          selectedData.value = gridApi.value.getSelectedRows()
        }
      }
    }

    return {
      defaultColDef,
      columnDefs,
      gridApi,
      rowData,
      gridOptions,
      selectedData,
      onGridReady,
      onBtnExport,
      onSelectionChanged
    }
  }
}
</script>

<style scoped></style>
