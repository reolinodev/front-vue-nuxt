<template>
  <v-row class="pt-5 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%">
          <v-row class="ma-auto">
            <client-only>
              <v-col cols="6">
                <v-card-text># Drop zone</v-card-text>
                <ag-grid-vue
                  style="height: 471px"
                  class="ag-theme-quartz-dark"
                  :column-defs="columnDefs"
                  :default-col-def="defaultColDef"
                  :row-data="rowData"
                  :row-class-rules="rowClassRules"
                  :row-drag-managed="true"
                  @grid-ready="onGridReady"
                />
              </v-col>
              <v-col cols="6">
                <div class="drop-col">
                  <span id="eDropTarget" class="drop-target">Drop to here</span>
                  <div class="tile-container" />
                </div>
              </v-col>

              <v-col cols="6">
                <v-card-text># Grid to Grid</v-card-text>
                <ag-grid-vue
                  style="height: 471px"
                  class="ag-theme-quartz-dark"
                  :column-defs="columnDefs"
                  :default-col-def="defaultColDef"
                  :row-data="rowData"
                  :row-class-rules="rowClassRules"
                  :row-drag-managed="true"
                  @grid-ready="onGridReady"
                />
              </v-col>
              <v-col cols="6">
                <div class="drop-col">
                  <span id="eDropTarget" class="drop-target">Drop to here</span>
                  <div class="tile-container" />
                </div>
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
    const gridApi = ref()

    const columnDefs = ref([
      { field: 'id', rowDrag: true },
      { field: 'color' },
      { field: 'value1' },
      { field: 'value2' }
    ])

    const defaultColDef = ref({
      filter: true,
      flex: 1
    })

    const rowClassRules = ref(null)
    const rowData = ref(null)

    onBeforeMount(() => {
      rowClassRules.value = {
        'red-row': 'data.color == "Red"',
        'green-row': 'data.color == "Green"',
        'blue-row': 'data.color == "Blue"'
      }
      rowData.value = createRowData()
    })

    const onGridReady = (params) => {
      gridApi.value = params.api

      addDropZones(params)
      addCheckboxListener(params)
    }

    let rowIdSequence = 100

    const createRowData = () => {
      const data = []
      ;[
        'Red',
        'Green',
        'Blue',
        'Red',
        'Green',
        'Blue',
        'Red',
        'Green',
        'Blue'
      ].forEach((color) => {
        const newDataItem = {
          id: rowIdSequence++,
          color,
          value1: Math.floor(Math.random() * 100),
          value2: Math.floor(Math.random() * 100)
        }
        data.push(newDataItem)
      })
      return data
    }

    window.createTile = function createTile(data) {
      const el = document.createElement('div')
      el.classList.add('tile')
      el.classList.add(data.color.toLowerCase())
      el.innerHTML =
        `<div class="id">${data.id}</div>` +
        `<div class="value">${data.value1}</div>` +
        `<div class="value">${data.value2}</div>`
      return el
    }

    const addDropZones = (params) => {
      console.log('params', params)
      const tileContainer = document.querySelector('.tile-container')
      const dropZone = {
        getContainer: () => {
          return tileContainer
        },
        onDragStop: (params) => {
          const tile = createTile(params.node.data)
          tileContainer.appendChild(tile)
        }
      }
      params.api.addRowDropZone(dropZone)
    }

    window.addCheckboxListener = function addCheckboxListener(params) {
      console.log('params2', params)

      const checkbox = document.querySelector('input[type=checkbox]')
      checkbox.addEventListener('change', () => {
        params.api.setGridOption(
          'suppressMoveWhenRowDragging',
          checkbox.checked
        )
      })
    }

    return {
      columnDefs,
      defaultColDef,
      rowClassRules,
      rowData,
      onGridReady
    }
  }
}
</script>

<style scoped>
.example-wrapper {
  display: flex;
  height: 100%;
  flex-direction: column;
}

.drop-containers {
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  position: relative;
  overflow: hidden;
}

.toolbar {
  height: 30px;
}

.grid-wrapper {
  flex: 2 2 0px;
  min-width: 0;
}

.drop-col {
  padding-left: 10px;
  box-sizing: border-box;
  flex: 1 1 0px;
  display: flex;
  flex-direction: column;
}

.drop-target,
.tile {
  color: white;
}

.drop-target {
  border: 1px solid #888;
  background-color: #99999966;
  padding: 10px;
}

.tile-container {
  box-sizing: border-box;
  border: 1px solid #888;
  background-color: #99999944;
  overflow: auto;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  flex: 1 1 auto;
  height: 200px;
}

.tile {
  width: calc(50% - 30px);
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
}

.red-row {
  background-color: #cc333344 !important;
}
.green-row {
  background-color: #33cc3344 !important;
}
.blue-row {
  background-color: #2244cc44 !important;
}

.tile.red {
  background-color: #cc333344;
}
.tile.green {
  background-color: #33cc3344;
}
.tile.blue {
  background-color: #2244cc44;
}
</style>
