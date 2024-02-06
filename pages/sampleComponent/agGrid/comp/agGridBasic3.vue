<template>
  <v-row class="pt-5 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%">
          <v-row class="ma-auto">
            <v-col cols="12">
              <v-card-text># Pinning</v-card-text>
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
              <v-card-text># Group </v-card-text>
              <client-only>
                <ag-grid-vue
                  style="height: 471px"
                  class="ag-theme-quartz-dark"
                  :column-defs="columnDefs2"
                  :default-col-def="defaultColDef2"
                  :row-data="rowData"
                  @grid-ready="onGridReady"
                />
              </client-only>
            </v-col>

            <v-row class="ma-auto">
              <v-col cols="12">
                <v-card-text># Filter</v-card-text>
                <client-only>
                  <ag-grid-vue
                    style="height: 471px"
                    class="ag-theme-quartz-dark"
                    :column-defs="columnDefs3"
                    :default-col-def="defaultColDef3"
                    :row-data="rowData"
                    @grid-ready="onGridReady"
                  />
                </client-only>
              </v-col>
            </v-row>
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
    const rowData = ref(null)

    const columnDefs = ref([
      { field: 'year', sort: 'desc', pinned: 'left' },
      { field: 'sport', sort: 'desc', pinned: 'left' },
      { field: 'country', sort: 'desc', pinned: 'left' },
      { field: 'age' },
      { field: 'date' },
      { field: 'athlete' },
      { field: 'gold' },
      { field: 'silver' },
      { field: 'bronze' },
      { field: 'total' }
    ])

    const defaultColDef = ref({
      resizable: true
    })

    const onGridReady = (params) => {
      gridApi = params.api

      const updateData = (data) => {
        rowData.value = data
      }

      fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
        .then((resp) => resp.json())
        .then((data) => updateData(data))
    }

    const columnDefs2 = ref([
      {
        headerName: 'Athlete Details',
        children: [
          { field: 'athlete', width: 180 },
          { field: 'age', width: 90 },
          {
            headerName: 'Country',
            field: 'country',
            width: 140
          },
          {
            headerName: 'Date',
            field: 'date',
            width: 140
          }
        ]
      },
      {
        headerName: 'Sports Results',
        children: [
          { field: 'sport', width: 200 },
          {
            columnGroupShow: 'closed',
            field: 'total',
            width: 200
          },
          {
            columnGroupShow: 'open',
            field: 'gold',
            width: 200
          },
          {
            columnGroupShow: 'open',
            field: 'silver',
            width: 200
          },
          {
            columnGroupShow: 'open',
            field: 'bronze',
            width: 200
          }
        ]
      }
    ])
    const defaultColDef2 = ref({
      flex: 1,
      minWidth: 150
    })

    const filterParams = {
      comparator: (filterLocalDateAtMidnight, cellValue) => {
        const dateAsString = cellValue
        if (dateAsString == null) {
          return -1
        }
        const dateParts = dateAsString.split('/')
        const cellDate = new Date(
          Number(dateParts[2]),
          Number(dateParts[1]) - 1,
          Number(dateParts[0])
        )
        if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
          return 0
        }
        if (cellDate < filterLocalDateAtMidnight) {
          return -1
        }
        if (cellDate > filterLocalDateAtMidnight) {
          return 1
        }
        return 0
      },
      minValidYear: 2000,
      maxValidYear: 2021,
      inRangeFloatingFilterDateFormat: 'Do MMM YYYY'
    }

    const columnDefs3 = ref([
      { field: 'year', sort: 'desc', filter: 'agTextColumnFilter' },
      { field: 'sport', sort: 'desc', filter: 'agNumberColumnFilter' },
      {
        field: 'country'
      },
      {
        field: 'date',
        filter: 'agDateColumnFilter',
        filterParams
      },
      { field: 'age' },
      { field: 'athlete' },
      { field: 'gold' },
      { field: 'silver' },
      { field: 'bronze' },
      { field: 'total' }
    ])

    const defaultColDef3 = ref({
      flex: 1,
      minWidth: 200,
      floatingFilter: true
    })

    return {
      defaultColDef,
      columnDefs,
      gridApi,
      rowData,
      columnDefs2,
      defaultColDef2,
      columnDefs3,
      defaultColDef3,
      onGridReady
    }
  }
}
</script>

<style scoped></style>
