<template>
  <div class="content-sub-title"># 1.실선</div>
  <v-divider class="border-opacity-75" color="warning" />
  <div class="content-sub-title"># 2.버튼</div>

  <v-row align="center" justify="center">
    <v-col cols="auto">
      <v-btn color="primary"> Button </v-btn>
    </v-col>

    <v-col cols="auto">
      <v-btn color="default"> Button </v-btn>
    </v-col>

    <v-col cols="auto">
      <v-btn color="error"> Button </v-btn>
    </v-col>

    <v-col cols="auto">
      <v-btn color="warning"> Button </v-btn>
    </v-col>

    <v-col cols="auto">
      <v-btn color="success"> Button </v-btn>
    </v-col>
  </v-row>

  <v-row align="center" justify="center">
    <v-col cols="auto">
      <v-btn variant="outlined"> Button </v-btn>
    </v-col>

    <v-col cols="auto">
      <v-btn variant="tonal"> Button </v-btn>
    </v-col>

    <v-col cols="auto">
      <v-btn variant="text"> Button </v-btn>
    </v-col>

    <v-col cols="auto">
      <v-btn variant="plain"> Button </v-btn>
    </v-col>
  </v-row>

  <v-row align="center" justify="center">
    <v-col cols="auto">
      <v-btn size="x-small">Extra small Button</v-btn>
    </v-col>

    <v-col cols="auto">
      <v-btn size="small">Small Button</v-btn>
    </v-col>

    <v-col cols="auto">
      <v-btn>Regular Button</v-btn>
    </v-col>

    <v-col cols="auto">
      <v-btn size="large">Large Button</v-btn>
    </v-col>

    <v-col cols="auto">
      <v-btn size="x-large">X-Large Button</v-btn>
    </v-col>
  </v-row>

  <v-row align="center" justify="center">
    <v-btn block>Block Button</v-btn>
  </v-row>

  <v-row justify="center">
    <v-col cols="12" sm="6" md="4">
      <v-btn block rounded="0" size="x-large">Rounded 0</v-btn>
    </v-col>

    <v-col cols="12" sm="6" md="4">
      <v-btn block rounded="xs" size="x-large">Rounded xs</v-btn>
    </v-col>

    <v-col cols="12" sm="6" md="4">
      <v-btn block rounded="sm" size="x-large">Rounded sm</v-btn>
    </v-col>

    <v-col cols="12" sm="6" md="4">
      <v-btn block size="x-large">Button</v-btn>
    </v-col>

    <v-col cols="12" sm="6" md="4">
      <v-btn block rounded="lg" size="x-large">Rounded lg</v-btn>
    </v-col>

    <v-col cols="12" sm="6" md="4">
      <v-btn block rounded="xl" size="x-large">Rounded xl</v-btn>
    </v-col>
  </v-row>

  <div class="content-sub-title"># 3.autocomplate</div>
  <v-autocomplete
    clearable
    label="Autocomplete"
    :items="[
      'California',
      'Colorado',
      'Florida',
      'Georgia',
      'Texas',
      'Wyoming'
    ]"
  />
  <div class="content-sub-title"># 4.autocomplate - chip</div>

  <v-autocomplete
    chips
    label="Autocomplete"
    :items="[
      'California',
      'Colorado',
      'Florida',
      'Georgia',
      'Texas',
      'Wyoming'
    ]"
  />

  <div class="content-sub-title"># 5.autocomplate - multi</div>

  <v-autocomplete
    clearable
    label="Autocomplete"
    :items="[
      'California',
      'Colorado',
      'Florida',
      'Georgia',
      'Texas',
      'Wyoming'
    ]"
    multiple
  />

  <div class="content-sub-title"># 6.toolbar</div>

  <div>
    <v-toolbar
      dark
      prominent
      image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon />

      <v-toolbar-title>Vuetify</v-toolbar-title>

      <v-spacer />

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </div>

  <div class="content-sub-title"># 7.parallax</div>
  <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
    <div
      class="d-flex flex-column fill-height justify-center align-center text-white"
    >
      <h1 class="text-h4 font-weight-thin mb-4">Vuetify</h1>
      <h4 class="subheading">Build your application today!</h4>
    </div>
  </v-parallax>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'EtcComp',
  setup: function () {
    const step = ref<number>(1)
    return { step }
  }
})
</script>
<style scoped></style>
