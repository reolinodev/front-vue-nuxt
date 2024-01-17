<template>
  <div class="content-container">
    <v-card class="mx-auto">
      <v-tabs
        v-model="tab"
        color="teal-darken-3"
        next-icon="mdi-arrow-right-bold-box-outline"
        prev-icon="mdi-arrow-left-bold-box-outline"
        show-arrows
      >
        <v-tab :value="form0">폼 형태</v-tab>
        <v-tab :value="form1">폼 구성 #1</v-tab>
        <v-tab :value="form2">폼 구성 #2</v-tab>
        <v-tab :value="form3">폼 구성 #3</v-tab>
        <v-tab :value="form4">폼 유효성</v-tab>
        <v-tab :value="loading">로딩</v-tab>
        <v-tab :value="stepper">스텝</v-tab>
        <v-tab :value="windows">윈도우즈</v-tab>
        <v-tab :value="dialog">다이어로그</v-tab>
        <v-tab :value="alerts">얼럿</v-tab>
        <v-tab :value="timeline">타임라인</v-tab>
        <v-tab :value="image">이미지</v-tab>
        <v-tab :value="badge">뱃지</v-tab>
        <v-tab :value="scroll">스크롤</v-tab>
        <v-tab :value="list">리스트</v-tab>
        <v-tab :value="panel">패널</v-tab>
        <v-tab :value="etc">기타</v-tab>
        <v-tab :value="etc2">기타2</v-tab>
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

        <v-window-item value="form4" class="item-container">
          <form-comp4 />
        </v-window-item>

        <v-window-item value="loading" class="item-container">
          <loding-comp />
        </v-window-item>

        <v-window-item value="stepper" class="item-container">
          <stepper-comp />
        </v-window-item>

        <v-window-item value="windows" class="item-container">
          <window-comp />
        </v-window-item>

        <v-window-item value="dialog" class="item-container">
          <dialog-comp />
        </v-window-item>

        <v-window-item value="alerts" class="item-container">
          <alert-comp />
        </v-window-item>

        <v-window-item value="timeline" class="item-container">
          <time-line-comp />
        </v-window-item>

        <v-window-item value="image" class="item-container">
          <image-comp />
        </v-window-item>

        <v-window-item value="badge" class="item-container">
          <badge-comp />
        </v-window-item>

        <v-window-item value="scroll" class="item-container">
          <scroll-comp />
        </v-window-item>

        <v-window-item value="list" class="item-container">
          <list-comp />
        </v-window-item>

        <v-window-item value="panel" class="item-container">
          <panel-comp />
        </v-window-item>

        <v-window-item value="etc" class="item-container">
          <etc-comp />
        </v-window-item>

        <v-window-item value="etc2" class="item-container">
          <etc-comp2 />
        </v-window-item>
      </v-window>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormComp from '~/pages/sample/comp/formComp.vue'
import FormComp1 from '~/pages/sample/comp/formComp1.vue'
import FormComp2 from '~/pages/sample/comp/formComp2.vue'
import FormComp3 from '~/pages/sample/comp/formComp3.vue'
import FormComp4 from '~/pages/sample/comp/formComp4.vue'
import LodingComp from '~/pages/sample/comp/lodingComp.vue'
import StepperComp from '~/pages/sample/comp/stepperComp.vue'
import WindowComp from '~/pages/sample/comp/windowComp.vue'
import EtcComp from '~/pages/sample/comp/etcComp.vue'
import AlertComp from '~/pages/sample/comp/alertComp.vue'
import DialogComp from '~/pages/sample/comp/dialogComp.vue'
import TimeLineComp from '~/pages/sample/comp/timelineComp.vue'
import ImageComp from '~/pages/sample/comp/imageComp.vue'
import BadgeComp from '~/pages/sample/comp/badgeComp.vue'
import ScrollComp from '~/pages/sample/comp/scrollComp.vue'
import ListComp from '~/pages/sample/comp/listComp.vue'
import PanelComp from '~/pages/sample/comp/panelComp.vue'
import EtcComp2 from '~/pages/sample/comp/etcComp2.vue'

export default defineComponent({
  name: 'Vuetify',
  components: {
    EtcComp2,
    PanelComp,
    ListComp,
    ScrollComp,
    BadgeComp,
    ImageComp,
    TimeLineComp,
    DialogComp,
    AlertComp,
    EtcComp,
    WindowComp,
    StepperComp,
    LodingComp,
    FormComp4,
    FormComp,
    FormComp3,
    FormComp2,
    FormComp1
  },
  setup: function () {
    const tab = ref<string>('form1')

    return {
      tab
    }
  }
})
</script>

<style scoped></style>
