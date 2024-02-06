<template>
  <v-row class="pt-2 pe-5 h-auto" justify="center">
    <v-col class="pa-1" cols="12">
      <v-tabs
        v-model="tab"
        color="deep-purple-accent-1"
        next-icon="mdi-arrow-right-bold-box-outline"
        prev-icon="mdi-arrow-left-bold-box-outline"
        show-arrows
      >
        <v-tab :value="basic">Basic</v-tab>
        <v-tab :value="basic2">Basic2</v-tab>
        <v-tab :value="basic3">Basic3</v-tab>
        <v-tab :value="sorting">Sorting</v-tab>
        <v-tab :value="dragging">Dragging</v-tab>
      </v-tabs>

      <v-window v-model="tab">
        <v-window-item value="basic">
          <ag-grid-basic />
        </v-window-item>
        <v-window-item value="basic2">
          <ag-grid-basic2 />
        </v-window-item>
        <v-window-item value="basic3">
          <ag-grid-basic3 />
        </v-window-item>
        <v-window-item value="sorting">
          <ag-grid-sorting />
        </v-window-item>
        <v-window-item value="dragging">
          <ag-grid-dragging />
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AgGridBasic from '~/pages/sampleComponent/agGrid/comp/agGridBasic.vue'
import AgGridBasic2 from '~/pages/sampleComponent/agGrid/comp/agGridBasic2.vue'
import AgGridBasic3 from '~/pages/sampleComponent/agGrid/comp/agGridBasic3.vue'
import AgGridDragging from '~/pages/sampleComponent/agGrid/comp/agGridDragging.vue'
import AgGridSorting from '~/pages/sampleComponent/agGrid/comp/agGridSorting.vue'

export default defineComponent({
  components: {
    AgGridSorting,
    AgGridDragging,
    AgGridBasic3,
    AgGridBasic2,
    AgGridBasic
  },
  setup: function () {
    const tab = ref<string>('basic')

    return {
      tab
    }
  }
})
</script>
<style scoped></style>
