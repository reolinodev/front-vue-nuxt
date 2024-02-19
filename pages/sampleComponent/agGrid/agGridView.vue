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
        <v-tab :value="api">Api Call</v-tab>
        <v-tab :value="checkSelect">Check Select</v-tab>
        <v-tab :value="filters">Filter</v-tab>
        <v-tab :value="columns">Column</v-tab>
        <v-tab :value="rendering">Rendering</v-tab>
        <v-tab :value="rendering2">Rendering2</v-tab>
        <v-tab :value="editor">Editor</v-tab>
        <v-tab :value="dragging">Dragging</v-tab>
      </v-tabs>

      <v-window v-model="tab">
        <v-window-item value="basic">
          <ag-grid-basic />
        </v-window-item>
        <v-window-item value="api">
          <ag-grid-api />
        </v-window-item>
        <v-window-item value="checkSelect">
          <ag-grid-check-select />
        </v-window-item>
        <v-window-item value="filters">
          <ag-grid-filter />
        </v-window-item>
        <v-window-item value="columns">
          <ag-grid-column />
        </v-window-item>
        <v-window-item value="rendering">
          <ag-grid-render />
        </v-window-item>
        <v-window-item value="rendering2">
          <ag-grid-render2 />
        </v-window-item>
        <v-window-item value="editor">
          <ag-grid-editor />
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
// @ts-ignore
import AgGridBasic from '~/pages/sampleComponent/agGrid/comp/agGridBasic.vue'
import AgGridApi from '~/pages/sampleComponent/agGrid/comp/agGridApi.vue'
import AgGridDragging from '~/pages/sampleComponent/agGrid/comp/agGridDragging.vue'
import AgGridCheckSelect from '~/pages/sampleComponent/agGrid/comp/agGridCheckSelect.vue'
import AgGridFilter from '~/pages/sampleComponent/agGrid/comp/agGridFilter.vue'
import AgGridColumn from '~/pages/sampleComponent/agGrid/comp/agGridColumn.vue'
import AgGridRender from '~/pages/sampleComponent/agGrid/comp/agGridRender.vue'
import AgGridRender2 from '~/pages/sampleComponent/agGrid/comp/agGridRender2.vue'
import AgGridEditor from '~/pages/sampleComponent/agGrid/comp/agGridEditor.vue'

export default defineComponent({
  components: {
    AgGridEditor,
    AgGridRender2,
    AgGridRender,
    AgGridColumn,
    AgGridFilter,
    AgGridCheckSelect,
    AgGridApi,
    AgGridDragging,
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
