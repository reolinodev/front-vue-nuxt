<template>
  <v-row class="pt-5 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%">
          <v-row class="ma-auto">
            <v-col cols="12">
              <v-card-text># Editor</v-card-text>

              <v-col class="d-flex justify-end ga-5">
                <v-btn color="info" @click="getRowData"> Get Row Data </v-btn>
                <v-btn color="warning" @click="add"> Add </v-btn>
                <v-btn color="error" @click="remove"> Remove </v-btn>
                <v-btn color="default" @click="clear"> clear </v-btn>
              </v-col>

              <client-only>
                <ag-grid-vue
                  style="height: 471px"
                  class="ag-theme-quartz-dark"
                  :column-defs="columnDefs"
                  :default-col-def="defaultColDef"
                  :row-data="rowData"
                  :row-selection="`single`"
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
    const gridApi = ref()

    const colors = [
      'AliceBlue',
      'AntiqueWhite',
      'Aqua',
      'Aquamarine',
      'Azure',
      'Beige',
      'Bisque',
      'Black',
      'BlanchedAlmond',
      'Blue'
    ]

    const columnDefs = ref([
      {
        field: 'name',
        cellEditor: 'agTextCellEditor',
        cellEditorParams: { maxLength: 20 }
      },
      {
        headerName: 'Text Value',
        field: 'value',
        valueFormatter: (params) => `$ ${params.value}`,
        cellEditor: 'agTextCellEditor',
        cellEditorParams: { maxLength: 20 }
      },
      {
        headerName: 'Select',
        field: 'color',
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: colors
        }
      },
      {
        headerName: 'Date Editor',
        field: 'date',
        cellEditor: 'agDateCellEditor'
      },
      {
        headerName: 'Number Editor- min or max',
        field: 'number',
        cellEditor: 'agNumberCellEditor',
        cellEditorParams: { min: 0, max: 100 }
      },
      {
        headerName: 'Checkbox Cell Editor',
        field: 'boolean',
        cellEditor: 'agCheckboxCellEditor'
      },
      {
        headerName: 'Large Text Editor',
        field: 'description',
        cellEditor: 'agLargeTextCellEditor',
        cellEditorPopup: true,
        cellEditorParams: { rows: 15, cols: 50 }
      }
    ])

    const defaultColDef = ref({
      flex: 1,
      editable: true
    })

    const rowData = ref(null)

    const onGridReady = (params) => {
      gridApi.value = params.api
      createData()
    }

    const createData = () => {
      rowData.value = [
        {
          name: 'AAA',
          value: '10000',
          color: 'AliceBlue',
          number: 22,
          date: '2023-01-01',
          boolean: true,
          description: 'asdsdafsadfasdfasdfsdafdsafsdafsadfasdfsdafdsa'
        },
        {
          name: 'BBB',
          value: '20000',
          color: 'AliceBlue',
          number: 33,
          date: '2024-01-01',
          boolean: false,
          description: 'asdsdafsadfasdfasdfsdafdsafsdafsadfasdfsdafdsa'
        }
      ]
    }

    const undoRedoCellEditingLimit = ref(5)

    const add = () => {
      const newItems = [
        {
          name: '',
          value: '',
          color: '',
          number: 0,
          date: '',
          boolean: false,
          description: ''
        }
      ]
      const res = gridApi.value.applyTransaction({
        add: newItems,
        addIndex: rowData.value.length
      })
    }

    const remove = () => {
      const selectedData = gridApi.value.getSelectedRows()
      const res = gridApi.value.applyTransaction({ remove: selectedData })
    }

    const clear = () => {
      const rowData = []
      gridApi.value.forEachNode(function (node) {
        rowData.push(node.data)
      })
      const res = gridApi.value.applyTransaction({
        remove: rowData
      })
    }

    const getRowData = () => {
      const rowData = []
      gridApi.value.forEachNode(function (node) {
        rowData.push(node.data)
      })
      console.table(rowData)
    }

    return {
      defaultColDef,
      columnDefs,
      gridApi,
      rowData,
      undoRedoCellEditingLimit,
      onGridReady,
      add,
      remove,
      clear,
      getRowData
    }
  }
}
</script>

<style scoped></style>
