<template>
  <v-row class="pt-5 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%">
          <v-row class="ma-auto">
            <v-col cols="12">
              <v-card-text># Value Expression</v-card-text>
              <client-only>
                <ag-grid-vue
                  style="height: 471px"
                  class="ag-theme-quartz-dark"
                  :column-defs="columnDefs"
                  :default-col-def="defaultColDef"
                  :grid-options="gridOptions"
                  :row-data="rowData"
                  @grid-ready="onGridReady"
                  @cell-value-changed="onCellValueChanged"
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
                  @cell-value-changed="onCellValueChanged2"
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
import ColourCellRenderer from '~/pages/sampleComponent/agGrid/comp/colourCellRenderer.vue'

export default {
  components: {
    AgGridVue,
    ColourCellRenderer
  },
  setup() {
    const columnDefs = ref([
      {
        headerName: 'String (editable)',
        field: 'simple',
        editable: true
      },
      {
        headerName: 'Number (editable)',
        field: 'number',
        editable: true,
        valueFormatter:
          '"£" + Math.floor(value).toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, "$1,")'
      },
      {
        headerName: 'Name (editable)',
        editable: true,
        valueGetter: 'data.firstName + " " + data.lastName',
        valueSetter:
          // an expression can span multiple lines!!!
          `var nameSplit = newValue.split(" ");
                         var newFirstName = nameSplit[0];
                         var newLastName = nameSplit[1];
                         if (data.firstName !== newFirstName || data.lastName !== newLastName) {
                            data.firstName = newFirstName;
                            data.lastName = newLastName;
                            return true;
                        } else {
                            return false;
                        }`
      },
      { headerName: 'A', field: 'a', minWidth: 100 },
      { headerName: 'B', field: 'b', minWidth: 100 },
      { headerName: 'A + B', valueGetter: 'data.a + data.b', maxWidth: 120 }
    ])

    const gridApi = ref()
    const gridOptions = ref({})

    const defaultColDef = ref({
      flex: 1,
      minWidth: 150,
      sortable: false
    })

    const rowData = ref(null)

    const onGridReady = (params) => {
      gridApi.value = params.api
    }

    const onCellValueChanged = (event) => {
      console.log('data after changes is: ', event.data)
    }

    const createRowData = () => {
      const rowData = []
      const words = [
        'One',
        'Apple',
        'Moon',
        'Sugar',
        'Grid',
        'Banana',
        'Sunshine',
        'Stars',
        'Black',
        'White',
        'Salt',
        'Beach'
      ]
      const firstNames = [
        'Niall',
        'John',
        'Rob',
        'Alberto',
        'Bas',
        'Dimple',
        'Sean'
      ]
      const lastNames = [
        'Pink',
        'Black',
        'White',
        'Brown',
        'Smith',
        'Smooth',
        'Anderson'
      ]
      for (let i = 0; i < 100; i++) {
        const randomWords = `${words[i % words.length]} ${
          words[(i * 17) % words.length]
        }`
        rowData.push({
          simple: randomWords,
          number: Math.floor(((i + 2) * 476321) % 10000),
          a: Math.floor(i % 4),
          b: Math.floor(i % 7),
          firstName: firstNames[i % firstNames.length],
          lastName: lastNames[i % lastNames.length]
        })
      }
      return rowData
    }

    /** Reference Data**/

    const carMappings = {
      tyt: 'Toyota',
      frd: 'Ford',
      prs: 'Porsche',
      nss: 'Nissan'
    }

    const colourMappings = {
      cb: 'Cadet Blue',
      bw: 'Burlywood',
      fg: 'Forest Green'
    }

    const extractKeys = (mappings) => {
      return Object.keys(mappings)
    }

    const lookupValue = (mappings, key) => {
      return mappings[key]
    }

    const lookupKey = (mappings, name) => {
      const keys = Object.keys(mappings)
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        if (mappings[key] === name) {
          return key
        }
      }
    }

    const currencyFormatter = (params) => {
      const value = Math.floor(params.value)
      if (isNaN(value)) {
        return ''
      }
      return `£${value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`
    }

    const numberValueSetter = (params) => {
      const valueAsNumber = parseFloat(params.newValue)
      if (isNaN(valueAsNumber) || !isFinite(params.newValue)) {
        return false // don't set invalid numbers!
      }
      params.data.price = valueAsNumber
      return true
    }

    const carCodes = extractKeys(carMappings)

    const colourCodes = extractKeys(colourMappings)

    const columnDefs2 = ref([
      {
        field: 'make',
        minWidth: 100,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: { values: carCodes },
        filterParams: {
          valueFormatter: (params) => {
            return lookupValue(carMappings, params.value)
          }
        },
        valueFormatter: (params) => {
          return lookupValue(carMappings, params.value)
        }
      },
      {
        field: 'exteriorColour',
        minWidth: 150,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: colourCodes,
          cellRenderer: 'ColourCellRenderer'
        },
        filter: 'agSetColumnFilter',
        filterParams: {
          values: colourCodes,
          valueFormatter: (params) => {
            return lookupValue(colourMappings, params.value)
          },
          cellRenderer: 'ColourCellRenderer'
        },
        valueFormatter: (params) => {
          return lookupValue(colourMappings, params.value)
        },
        valueParser: (params) => {
          return lookupKey(colourMappings, params.newValue)
        },
        cellRenderer: 'ColourCellRenderer'
      },
      {
        field: 'interiorColour',
        minWidth: 150,
        cellEditor: 'agTextCellEditor',
        cellEditorParams: { useFormatter: true },
        filter: 'agSetColumnFilter',
        filterParams: {
          values: colourCodes,
          valueFormatter: (params) => {
            return lookupValue(colourMappings, params.value)
          },
          cellRenderer: 'ColourCellRenderer'
        },
        valueFormatter: (params) => {
          return lookupValue(colourMappings, params.value)
        },
        valueParser: (params) => {
          return lookupKey(colourMappings, params.newValue)
        },
        cellRenderer: 'ColourCellRenderer'
      },
      {
        headerName: 'Retail Price',
        field: 'price',
        minWidth: 120,
        colId: 'retailPrice',
        valueGetter: (params) => {
          return params.data.price
        },
        valueFormatter: currencyFormatter,
        valueSetter: numberValueSetter
      },
      {
        headerName: 'Retail Price (incl Taxes)',
        minWidth: 120,
        editable: false,
        valueGetter: (params) => {
          // example of chaining value getters
          return params.getValue('retailPrice') * 1.2
        },
        valueFormatter: currencyFormatter
      }
    ])

    const gridApi2 = ref()
    const defaultColDef2 = ref({
      flex: 1,
      filter: true,
      editable: true
    })
    const rowData2 = ref(null)

    const createRowData2 = () => {
      const rowData = [
        {
          make: 'tyt',
          exteriorColour: 'fg',
          interiorColour: 'bw',
          price: 35000
        },
        {
          make: 'frd',
          exteriorColour: 'bw',
          interiorColour: 'cb',
          price: 32000
        },
        {
          make: 'prs',
          exteriorColour: 'cb',
          interiorColour: 'fg',
          price: 72000
        },
        {
          make: 'tyt',
          exteriorColour: 'fg',
          interiorColour: 'bw',
          price: 35000
        },
        {
          make: 'frd',
          exteriorColour: 'bw',
          interiorColour: 'cb',
          price: 32000
        },
        {
          make: 'prs',
          exteriorColour: 'cb',
          interiorColour: 'fg',
          price: 72000
        },
        {
          make: 'tyt',
          exteriorColour: 'fg',
          interiorColour: 'bw',
          price: 35000
        },
        {
          make: 'frd',
          exteriorColour: 'bw',
          interiorColour: 'cb',
          price: 32000
        },
        {
          make: 'prs',
          exteriorColour: 'cb',
          interiorColour: 'fg',
          price: 72000
        },
        {
          make: 'tyt',
          exteriorColour: 'fg',
          interiorColour: 'bw',
          price: 35000
        },
        {
          make: 'frd',
          exteriorColour: 'bw',
          interiorColour: 'cb',
          price: 32000
        },
        {
          make: 'prs',
          exteriorColour: 'cb',
          interiorColour: 'fg',
          price: 72000
        },
        {
          make: 'tyt',
          exteriorColour: 'fg',
          interiorColour: 'bw',
          price: 35000
        },
        {
          make: 'frd',
          exteriorColour: 'bw',
          interiorColour: 'cb',
          price: 32000
        },
        {
          make: 'prs',
          exteriorColour: 'cb',
          interiorColour: 'fg',
          price: 72000
        },
        {
          make: 'prs',
          exteriorColour: 'cb',
          interiorColour: 'fg',
          price: 72000
        },
        {
          make: 'tyt',
          exteriorColour: 'fg',
          interiorColour: 'bw',
          price: 35000
        },
        {
          make: 'frd',
          exteriorColour: 'bw',
          interiorColour: 'cb',
          price: 32000
        }
      ]
      return rowData
    }

    const onGridReady2 = (params) => {
      gridApi2.value = params.api
    }

    const onCellValueChanged2 = (params) => {
      console.log('onCellValueChanged Data: ', params.data)
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
      gridOptions,
      onGridReady,
      onGridReady2,
      onCellValueChanged,
      onCellValueChanged2
    }
  }
}
</script>

<style scoped></style>
