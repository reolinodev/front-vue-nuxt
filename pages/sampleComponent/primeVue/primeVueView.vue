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
        <v-tab :value="`calendar`">Carendar</v-tab>
        <v-tab :value="`treeSelect`">Tree&Select</v-tab>
        <v-tab :value="`etc`">ETC</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="calendar">
          <prime-vue-calendar />
        </v-window-item>
        <v-window-item value="treeSelect">
          <prime-vue-tree-select />
        </v-window-item>
        <v-window-item value="etc">
          <prime-vue-etc />
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PrimeVueCalendar from '~/pages/sampleComponent/primeVue/comp/primeVueCalendar.vue'
import PrimeVueTreeSelect from '~/pages/sampleComponent/primeVue/comp/primeVueTreeSelect.vue'
import PrimeVueEtc from '~/pages/sampleComponent/primeVue/comp/primeVueEtc.vue'

export default defineComponent({
  components: {
    PrimeVueEtc,
    PrimeVueTreeSelect,
    PrimeVueCalendar
  },
  setup: function () {
    const tab = ref<string>('calendar')

    return {
      tab
    }
  }
})
</script>
<style scoped></style>
