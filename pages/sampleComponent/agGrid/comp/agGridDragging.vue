<template>
  <v-row class="pt-5 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%">
          <v-row class="ma-auto">
            <client-only>
              <v-col cols="12">
                <v-card-text># Grid to Grid</v-card-text>
              </v-col>
              <v-col cols="6">
                <ag-grid-vue
                  style="height: 471px"
                  class="ag-theme-quartz-dark"
                  :default-col-def="defaultColDef"
                  :get-row-id="getRowId"
                  :row-drag-managed="true"
                  :suppress-move-when-row-dragging="true"
                  :row-data="leftRowData"
                  :column-defs="columns"
                  @grid-ready="onGridReady($event, 'Left')"
                />
              </v-col>
              <v-col cols="6">
                <ag-grid-vue
                  style="height: 471px"
                  class="ag-theme-quartz-dark"
                  :default-col-def="defaultColDef"
                  :get-row-id="getRowId"
                  :row-drag-managed="true"
                  :suppress-move-when-row-dragging="true"
                  :row-data="rightRowData"
                  :column-defs="columns"
                  @grid-ready="onGridReady($event, 'Right')"
                />
              </v-col>
            </client-only>
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
    const leftRowData = ref([
      { id: '1', name: 'AAA', age: '10' },
      { id: '2', name: 'BBB', age: '11' },
      { id: '3', name: 'CCC', age: '12' }
    ])
    const rightRowData = ref([])

    const leftApi = ref(null)
    const rightApi = ref(null)

    const defaultColDef = {
      flex: 1,
      filter: true
    }

    const columns = [
      { field: 'id', rowDrag: true },
      { field: 'name' },
      { field: 'age' }
    ]

    const getRowId = (params) => {
      return params.data.id
    }

    function onGridReady(params, side) {
      const { api } = params
      if (side === 'Left') {
        leftApi.value = api
      } else {
        rightApi.value = api
      }

      if (leftApi.value && rightApi.value) {
        addBinZone(leftApi.value)
        addBinZone(rightApi.value)
        addGridDropZone('Left', leftApi.value)
        addGridDropZone('Right', rightApi.value)
      }
    }

    function addBinZone(api) {
      const dropZone = {
        getContainer: () => document.querySelector('.bin'),
        onDragEnter: () => {
          document.querySelector('.bin').style.color = 'blue'
          document.querySelector('.bin-icon').style.transform = 'scale(1.5)'
        },
        onDragLeave: () => {
          document.querySelector('.bin').style = ''
          document.querySelector('.bin-icon').style.transform = 'scale(1)'
        },
        onDragStop: (params) => {
          binDrop(params.node.data)
          document.querySelector('.bin').style = ''
          document.querySelector('.bin-icon').style.transform = 'scale(1)'
        }
      }

      api.addRowDropZone(dropZone)
    }

    function addGridDropZone(side, api) {
      const dropApi = side === 'Left' ? rightApi.value : leftApi.value
      const dropZone = dropApi.getRowDropZoneParams()

      api.addRowDropZone(dropZone)
    }

    function binDrop(data) {
      if (!data || data.id == null) {
        return
      }

      const transaction = {
        remove: [data]
      }

      ;[leftApi.value, rightApi.value].forEach((api) => {
        const rowsInGrid = !!api.getRowNode(data.id)

        if (rowsInGrid) {
          api.applyTransaction(transaction)
        }
      })
    }

    return {
      defaultColDef,
      columns,
      leftRowData,
      rightRowData,
      leftApi,
      rightApi,
      getRowId,
      onGridReady
    }
  }
}
</script>

<style scoped></style>
