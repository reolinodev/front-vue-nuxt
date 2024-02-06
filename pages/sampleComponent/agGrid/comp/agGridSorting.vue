<template>
  <v-row class="pt-5 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%">
          <v-row class="ma-auto">
            <v-col cols="12">
              <v-card-text># Basic</v-card-text>
              <client-only>
                <ag-grid-vue
                  style="height: 471px"
                  class="ag-theme-quartz-dark"
                  :column-defs="columnDefs"
                  :row-data="rowData"
                />
              </client-only>
            </v-col>
            <v-col cols="12">
              <v-card-text># Paging & Flex</v-card-text>
              <client-only>
                <ag-grid-vue
                  style="height: 471px"
                  class="ag-theme-quartz-dark"
                  :column-defs="columnDefs2"
                  :row-data="rowData"
                />
              </client-only>
              <v-col cols="12">
                <v-row justify="center">
                  <v-col cols="6">
                    <v-container class="max-width">
                      <v-pagination v-model="page" class="my-4" :length="15" />
                    </v-container>
                  </v-col>
                </v-row>
              </v-col>
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
    const page = ref(1)

    return {
      columnDefs: [
        { headerName: 'Name', field: 'name', type: 'text', width: 100 },
        { headerName: 'Type', field: 'type', type: 'text', width: 200 },
        { headerName: 'Price', field: 'price', type: 'number', width: 300 }
      ],
      columnDefs2: [
        { headerName: 'Name', field: 'name', type: 'text', flex: 1 },
        { headerName: 'Type', field: 'type', type: 'text', flex: 1 },
        { headerName: 'Price', field: 'price', type: 'number', flex: 2 }
      ],
      rowData: [
        { name: 'A1', type: 'String', price: 1000000 },
        { name: 'A2', type: 'String', price: 2000000 },
        { name: 'A3', type: 'String', price: 3000000 },
        { name: 'A4', type: 'Number', price: 4000000 },
        { name: 'A5', type: 'Number', price: 5000000 },
        { name: 'A6', type: 'Number', price: 6000000 },
        { name: 'A7', type: 'Float', price: 7000000 },
        { name: 'A8', type: 'Float', price: 8000000 },
        { name: 'A9', type: 'Float', price: 9000000 },
        { name: 'A10', type: 'Float', price: 10000000 }
      ],
      page
    }
  }
}
</script>

<style scoped></style>
