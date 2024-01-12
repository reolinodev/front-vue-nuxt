<template>
  <div class="content-container">
    <v-card class="mx-auto">
      <v-tabs v-model="tab" color="teal-darken-3" fixed-tabs>
        <v-tab :value="form0">폼 형태</v-tab>
        <v-tab :value="form1">폼 구성 #1</v-tab>
        <v-tab :value="form2">폼 구성 #2</v-tab>
        <v-tab :value="form3">폼 구성 #3</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="form" class="item-container">
          <form-comp />
        </v-window-item>

        <v-window-item value="form1" class="item-container">
          <form-comp1 />
        </v-window-item>

        <v-window-item value="form2" class="item-container">
          <form-comp2 />
        </v-window-item>

        <v-window-item value="form3" class="item-container">
          <form-comp3 />
        </v-window-item>
      </v-window>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormComp1 from '~/pages/sample/comp/formComp1.vue'
import FormComp2 from '~/pages/sample/comp/formComp2.vue'
import FormComp3 from '~/pages/sample/comp/formComp3.vue'
import FormComp from '~/pages/sample/comp/formComp.vue'

export default defineComponent({
  name: 'Vuetify',
  components: { FormComp, FormComp3, FormComp2, FormComp1 },
  setup: function () {
    const tab = ref('form1')

    return {
      tab
    }
  }
})
</script>

<style scoped></style>
