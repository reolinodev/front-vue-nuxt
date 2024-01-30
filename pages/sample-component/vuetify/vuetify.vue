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
import { defineComponent } from 'vue'
import VuetifyForm from '~/pages/sample-component/vuetify/comp/vuetifyForm.vue'
import VuetifyFormValid from '~/pages/sample-component/vuetify/comp/vuetifyFormValid.vue'
import VuetifyCalousel from '~/pages/sample-component/vuetify/comp/vuetifyCalousel.vue'
import VuetifyLoading from '~/pages/sample-component/vuetify/comp/vuetifyLoding.vue'
import VuetifytImage from '~/pages/sample-component/vuetify/comp/vuetifytImage.vue'
import VuetifyTimeline from '~/pages/sample-component/vuetify/comp/vuetifyTimeline.vue'
import VuetifyStepper from '~/pages/sample-component/vuetify/comp/vuetifyStepper.vue'
import VuetifyList from '~/pages/sample-component/vuetify/comp/vuetifyList.vue'
import VuetifyBasic from '~/pages/sample-component/vuetify/comp/vuetifyBasic.vue'
import VuetifyBasic2 from '~/pages/sample-component/vuetify/comp/vuetifyBasic2.vue'
import VuetifyEtc from '~/pages/sample-component/vuetify/comp/vuetifyEtc.vue'
import VuetifyAlert from '~/pages/sample-component/vuetify/comp/vuetifyAlert.vue'
import VuetifyChip from '~/pages/sample-component/vuetify/comp/vuetifyChip.vue'
import VuetifyCard from '~/pages/sample-component/vuetify/comp/vuetifyCard.vue'
import VuetifySheet from '~/pages/sample-component/vuetify/comp/vuetifySheet.vue'

export default defineComponent({
  name: 'Vuetify',
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
