<template>
  <v-row class="pt-5 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%">
          <v-row class="ma-auto">
            <v-col cols="12">
              <v-card-text># Value Getter</v-card-text>
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
              <v-card-text># Value Fomatter</v-card-text>
              <client-only>
                <ag-grid-vue
                  style="height: 471px"
                  class="ag-theme-quartz-dark"
                  :column-defs="columnDefs2"
                  :default-col-def="defaultColDef2"
                  :row-data="rowData2"
                  @grid-ready="onGridReady2"
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
    const hashValueGetter = (params) => {
      return params.node ? params.node.rowIndex : null
    }

    const abValueGetter = (params) => {
      return params.data.a + params.data.b
    }

    const a1000ValueGetter = (params) => {
      return params.data.a * 1000
    }

    const b137ValueGetter = (params) => {
      return params.data.b * 137
    }

    const randomValueGetter = () => {
      return Math.floor(Math.random() * 1000)
    }

    const chainValueGetter = (params) => {
      return params.getValue('a&b') * 1000
    }

    const constValueGetter = () => {
      return 99999
    }

    const columnDefs = ref([
      { headerName: '#', maxWidth: 100, valueGetter: hashValueGetter },
      { field: 'a' },
      { field: 'b' },
      { headerName: 'A + B', colId: 'a&b', valueGetter: abValueGetter },
      { headerName: 'A * 1000', minWidth: 95, valueGetter: a1000ValueGetter },
      { headerName: 'B * 137', minWidth: 90, valueGetter: b137ValueGetter },
      { headerName: 'Random', minWidth: 90, valueGetter: randomValueGetter },
      { headerName: 'Chain', valueGetter: chainValueGetter },
      { headerName: 'Const', minWidth: 85, valueGetter: constValueGetter }
    ])

    const gridApi = ref()

    const defaultColDef = ref({
      flex: 1,
      minWidth: 75
      // cellClass: 'number-cell'
    })

    const rowData = ref(null)

    const onGridReady = (params) => {
      gridApi.value = params.api
    }

    const createRowData = () => {
      const rowData = []
      for (let i = 0; i < 100; i++) {
        rowData.push({
          a: Math.floor(i % 4),
          b: Math.floor(i % 7)
        })
      }
      return rowData
    }

    const bracketsFormatter = (params) => {
      return `(${params.value})`
    }

    const currencyFormatter = (params) => {
      return `£${formatNumber(params.value)}`
    }

    const formatNumber = (number) => {
      return Math.floor(number).toLocaleString()
    }

    const columnDefs2 = ref([
      { headerName: 'A', field: 'a' },
      { headerName: 'B', field: 'b' },
      { headerName: '£A', field: 'a', valueFormatter: currencyFormatter },
      { headerName: '£B', field: 'b', valueFormatter: currencyFormatter },
      { headerName: '(A)', field: 'a', valueFormatter: bracketsFormatter },
      { headerName: '(B)', field: 'b', valueFormatter: bracketsFormatter }
    ])

    const gridApi2 = ref()
    const defaultColDef2 = ref({
      flex: 1,
      cellClass: 'number-cell'
    })
    const rowData2 = ref(null)

    const createRowData2 = () => {
      const rowData = []
      for (let i = 0; i < 100; i++) {
        rowData.push({
          a: Math.floor(((i + 2) * 173456) % 10000),
          b: Math.floor(((i + 7) * 373456) % 10000)
        })
      }
      return rowData
    }

    const onGridReady2 = (params) => {
      gridApi2.value = params.api
    }

    onBeforeMount(() => {
      rowData.value = createRowData()
      rowData2.value = createRowData2()
    })

    return {
      columnDefs,
      columnDefs2,
      defaultColDef,
      defaultColDef2,
      rowData,
      rowData2,
      onGridReady,
      onGridReady2
    }
  }
}
</script>

<style scoped></style>
