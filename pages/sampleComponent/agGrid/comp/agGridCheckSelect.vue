<template>
  <v-row class="pt-5 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%">
          <v-row class="ma-auto">
            <v-col cols="12">
              <v-card-text># Checkbox</v-card-text>
              selectedRow(multi) : {{ selectedData }}

              <client-only>
                <ag-grid-vue
                  style="height: 471px"
                  class="ag-theme-quartz-dark"
                  :column-defs="columnDefs"
                  :row-data="rowData"
                  :row-selection="`multiple`"
                  :suppress-row-click-selection="true"
                  :is-row-selectable="isRowSelectable"
                  @grid-ready="onGridReady"
                  @selection-changed="onSelectionChanged"
                >
                  />
                </ag-grid-vue>
              </client-only>
            </v-col>
            <v-col cols="12">
              <v-card-text># Forcing Checkbox</v-card-text>
              <client-only>
                <ag-grid-vue
                  style="height: 471px"
                  class="ag-theme-quartz-dark"
                  :column-defs="columnDefs2"
                  :row-data="rowData"
                  :row-selection="`multiple`"
                  :suppress-row-click-selection="true"
                  @grid-ready="onGridReady2"
                  @first-data-rendered="onFirstDataRendered"
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
    const gridApi2 = ref()
    const isRowSelectable = ref(null)
    const rowSelection = ref(null)
    const selectedData = ref([])

    const onGridReady = (params) => {
      gridApi.value = params.api
    }

    const onGridReady2 = (params) => {
      gridApi2.value = params.api
    }

    const columnDefs = ref([
      { headerName: 'id', field: 'id', type: 'text', width: 100, hide: true },
      {
        headerName: 'Name',
        field: 'name',
        type: 'text',
        width: 200,
        headerCheckboxSelection: true,
        checkboxSelection: true,
        // checkboxSelection: (params) => {
        //   return !!params.data && params.data.price < 5000000
        // },
        showDisabledCheckboxes: true
      },
      { headerName: 'Type', field: 'type', type: 'text', width: 200 },
      { headerName: 'Price', field: 'price', type: 'number', width: 300 }
    ])

    const columnDefs2 = ref([
      { headerName: 'id', field: 'id', type: 'text', width: 100, hide: true },
      {
        headerName: 'Name',
        field: 'name',
        type: 'text',
        width: 200,
        headerCheckboxSelection: true,
        checkboxSelection: (params) => {
          return !!params.data && params.data.price < 5000000
        },
        showDisabledCheckboxes: true
      },
      { headerName: 'Type', field: 'type', type: 'text', width: 200 },
      { headerName: 'Price', field: 'price', type: 'number', width: 300 }
    ])

    const onSelectionChanged = () => {
      selectedData.value = gridApi.value.getSelectedRows()
    }

    const onFirstDataRendered = (params) => {
      const nodesToSelect = []
      params.api.forEachNode((node) => {
        if (node.data && node.data.price > 4000000) {
          nodesToSelect.push(node)
        }
      })
      params.api.setNodesSelected({ nodes: nodesToSelect, newValue: true })
    }

    onBeforeMount(() => {
      rowSelection.value = 'multiple'
      isRowSelectable.value = (params) => {
        return !!params.data && params.data.price < 5000000
      }
    })

    return {
      columnDefs,
      columnDefs2,
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
        { id: '10', name: 'A10', type: 'Float', price: 10000000 }
      ],
      isRowSelectable,
      rowSelection,
      selectedData,
      onFirstDataRendered,
      onGridReady,
      onGridReady2,
      onSelectionChanged
    }
  }
}
</script>

<style scoped></style>
