<template>
  <v-row class="pt-5 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%">
          <v-row class="ma-auto">
            <v-row class="ma-auto">
              <v-col cols="12">
                <v-card-text># Filter Float</v-card-text>
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
                <v-card-text># Filter hide</v-card-text>
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

    const filterParams2 = {
      filterOptions: [
        'lessThan',
        {
          displayKey: 'lessThanWithNulls',
          displayName: 'Less Than with Nulls',
          predicate: ([filterValue], cellValue) =>
            cellValue == null || cellValue < filterValue
        },
        'greaterThan',
        {
          displayKey: 'greaterThanWithNulls',
          displayName: 'Greater Than with Nulls',
          predicate: ([filterValue], cellValue) =>
            cellValue == null || cellValue > filterValue
        },
        {
          displayKey: 'betweenExclusive',
          displayName: 'Between (Exclusive)',
          predicate: ([fv1, fv2], cellValue) =>
            cellValue == null || (fv1 < cellValue && fv2 > cellValue),
          numberOfInputs: 2
        }
      ]
    }

    const columnDefs = ref([
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

    const columnDefs2 = ref([
      {
        field: 'year',
        sort: 'desc',
        filter: 'agTextColumnFilter',
        filterParams: filterParams2
      },
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

    const defaultColDef = ref({
      flex: 1,
      minWidth: 200,
      floatingFilter: true
    })

    const defaultColDef2 = ref({
      flex: 1,
      minWidth: 200,
      floatingFilter: false
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

    return {
      defaultColDef,
      defaultColDef2,
      columnDefs,
      columnDefs2,
      gridApi,
      rowData,
      onGridReady
    }
  }
}
</script>

<style scoped></style>
