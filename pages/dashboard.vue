<template>
  <v-row class="mx-auto pt-2 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card class="rounded-lg w-100" height="400" color="#424242">
        <v-card-title class="text-subtitle-1 font-weight-bold">
          컴퍼넌트 타이틀1
        </v-card-title>
        <v-card-item class="d-flex justify-center">
          컴퍼넌트 컨텐트1
        </v-card-item>
      </v-card>
    </v-col>
    <v-col class="pa-1" cols="6">
      <v-card class="rounded-lg w-100" height="200" color="#6A1B9A">
        <v-card-title class="text-subtitle-1 font-weight-bold">
          컴퍼넌트 타이틀2
        </v-card-title>
        <v-card-item class="d-flex justify-center">
          컴퍼넌트 컨텐트2
        </v-card-item>
      </v-card>
    </v-col>
    <v-col class="pa-1" cols="6">
      <v-card class="rounded-lg w-100" height="200" color="#01579B">
        <v-card-title class="text-subtitle-1 font-weight-bold">
          컴퍼넌트 타이틀3
        </v-card-title>
        <v-card-item class="d-flex justify-center">
          컴퍼넌트 컨텐트3
        </v-card-item>
      </v-card>
    </v-col>
    <v-col class="pa-1" cols="12">
      <v-card class="rounded-lg w-100" height="100" color="#1A237E">
        <v-card-title class="text-subtitle-1 font-weight-bold">
          컴퍼넌트 타이틀4
        </v-card-title>
        <v-card-item class="d-flex justify-center">
          컴퍼넌트 컨텐트4
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Dashboard',
  setup: function () {
    return {}
  }
})
</script>

<style scoped></style>
