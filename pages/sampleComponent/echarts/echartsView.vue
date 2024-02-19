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
        <v-tab :value="pie">Pie</v-tab>
        <v-tab :value="bar1">Bar1</v-tab>
        <v-tab :value="bar2">Bar2</v-tab>
        <v-tab :value="line1">line1</v-tab>
        <v-tab :value="line2">line2</v-tab>
      </v-tabs>

      <v-window v-model="tab">
        <v-window-item value="pie">
          <echarts-pie />
        </v-window-item>
        <v-window-item value="bar1">
          <echarts-bar1 />
        </v-window-item>
        <v-window-item value="bar2">
          <echarts-bar2 />
        </v-window-item>
        <v-window-item value="line1">
          <echarts-line1 />
        </v-window-item>
        <v-window-item value="line2">
          <echarts-line2 />
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import EchartsPie from '~/pages/sampleComponent/echarts/comp/echartsPie.vue'
import EchartsBar1 from '~/pages/sampleComponent/echarts/comp/echartsBar1.vue'
import EchartsBar2 from '~/pages/sampleComponent/echarts/comp/echartsBar2.vue'
import EchartsLine1 from '~/pages/sampleComponent/echarts/comp/echartsLine1.vue'
import EchartsLine2 from '~/pages/sampleComponent/echarts/comp/echartsLine2.vue'

export default defineComponent({
  components: {
    EchartsLine2,
    EchartsLine1,
    EchartsBar2,
    EchartsBar1,
    EchartsPie
  },
  setup: function () {
    const tab = ref<string>('pie')

    return {
      tab
    }
  }
})
</script>
<style scoped></style>
