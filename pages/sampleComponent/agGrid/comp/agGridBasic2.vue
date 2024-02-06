<template>
  <v-row class="pt-5 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%">
          <v-row class="ma-auto">
            <v-col cols="12">
              <v-card-text># API Call</v-card-text>
              <client-only>
                <ag-grid-vue
                  style="height: 471px"
                  class="ag-theme-quartz-dark"
                  :column-defs="columnDefs"
                  :default-col-def="defaultColDef"
                  :row-data="rowData"
                  @grid-ready="onGridReady"
                />
              </client-only>
            </v-col>

            <v-col cols="12">
              <v-card-text># Auto resize</v-card-text>
              <client-only>
                <ag-grid-vue
                  style="height: 471px"
                  class="ag-theme-quartz-dark"
                  :column-defs="columnDefs"
                  :auto-size-strategy="autoSizeStrategy"
                  :row-data="rowData"
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
    let gridApi = null

    const columnDefs = ref([
      { field: 'athlete' },
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
      gridApi = params.api

      const updateData = (data) => {
        rowData.value = data
      }

      fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
        .then((resp) => resp.json())
        .then((data) => updateData(data))
    }

    const autoSizeStrategy = ref({
      type: 'fitGridWidth',
      defaultMinWidth: 100,
      columnLimits: [
        {
          colId: 'athlete',
          minWidth: 300
        }
      ]
    })

    return {
      defaultColDef,
      columnDefs,
      gridApi,
      rowData,
      autoSizeStrategy,
      onGridReady
    }
  }
}
</script>

<style scoped></style>
