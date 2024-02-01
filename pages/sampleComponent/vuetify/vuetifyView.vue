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
        <v-tab :value="form">Form Comp</v-tab>
        <v-tab :value="formValid">Form Valid</v-tab>
        <v-tab :value="lists">Lists</v-tab>
        <v-tab :value="Sheets">Sheets</v-tab>
        <v-tab :value="cards">Cards</v-tab>
        <v-tab :value="alerts">Alerts</v-tab>
        <v-tab :value="loadings">Lodings</v-tab>
        <v-tab :value="chips">Chips</v-tab>
        <v-tab :value="images">images</v-tab>
        <v-tab :value="carousels">Carousels</v-tab>
        <v-tab :value="timelines">Timelines</v-tab>
        <v-tab :value="stepper">Stepper</v-tab>
        <v-tab :value="etc">ETC</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="basic">
          <vuetify-basic />
        </v-window-item>
        <v-window-item value="basic2">
          <vuetify-basic2 />
        </v-window-item>
        <v-window-item value="form">
          <vuetify-form />
        </v-window-item>
        <v-window-item value="formValid">
          <vuetify-form-valid />
        </v-window-item>
        <v-window-item value="lists">
          <vuetify-list />
        </v-window-item>
        <v-window-item value="sheets">
          <vuetify-sheet />
        </v-window-item>
        <v-window-item value="cards">
          <vuetify-card />
        </v-window-item>
        <v-window-item value="alerts">
          <vuetify-alert />
        </v-window-item>
        <v-window-item value="loadings">
          <vuetify-loading />
        </v-window-item>
        <v-window-item value="chips">
          <vuetify-chip />
        </v-window-item>
        <v-window-item value="images">
          <vuetifyt-image />
        </v-window-item>
        <v-window-item value="carousels">
          <vuetify-calousel />
        </v-window-item>
        <v-window-item value="timelines">
          <vuetify-timeline />
        </v-window-item>
        <v-window-item value="stepper">
          <vuetify-stepper />
        </v-window-item>
        <v-window-item value="etc">
          <vuetify-etc />
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import VuetifyForm from '~/pages/sampleComponent/vuetify/comp/vuetifyForm.vue'
import VuetifyFormValid from '~/pages/sampleComponent/vuetify/comp/vuetifyFormValid.vue'
import VuetifyCalousel from '~/pages/sampleComponent/vuetify/comp/vuetifyCalousel.vue'
import VuetifyLoading from '~/pages/sampleComponent/vuetify/comp/vuetifyLoding.vue'
import VuetifytImage from '~/pages/sampleComponent/vuetify/comp/vuetifytImage.vue'
import VuetifyTimeline from '~/pages/sampleComponent/vuetify/comp/vuetifyTimeline.vue'
import VuetifyStepper from '~/pages/sampleComponent/vuetify/comp/vuetifyStepper.vue'
import VuetifyList from '~/pages/sampleComponent/vuetify/comp/vuetifyList.vue'
import VuetifyBasic from '~/pages/sampleComponent/vuetify/comp/vuetifyBasic.vue'
import VuetifyBasic2 from '~/pages/sampleComponent/vuetify/comp/vuetifyBasic2.vue'
import VuetifyEtc from '~/pages/sampleComponent/vuetify/comp/vuetifyEtc.vue'
import VuetifyAlert from '~/pages/sampleComponent/vuetify/comp/vuetifyAlert.vue'
import VuetifyChip from '~/pages/sampleComponent/vuetify/comp/vuetifyChip.vue'
import VuetifyCard from '~/pages/sampleComponent/vuetify/comp/vuetifyCard.vue'
import VuetifySheet from '~/pages/sampleComponent/vuetify/comp/vuetifySheet.vue'

export default defineComponent({
  components: {
    VuetifySheet,
    VuetifyCard,
    VuetifyChip,
    VuetifyAlert,
    VuetifyEtc,
    VuetifyBasic2,
    VuetifyBasic,
    VuetifyList,
    VuetifyStepper,
    VuetifyTimeline,
    VuetifytImage,
    VuetifyLoading,
    VuetifyCalousel,
    VuetifyFormValid,
    VuetifyForm
  },
  setup: function () {
    const tab = ref<string>('form')

    return {
      tab
    }
  }
})
</script>

<style scoped></style>
