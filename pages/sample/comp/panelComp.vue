<template>
  <v-row justify="center">
    <v-col cols="12">
      <div class="content-sub-title"># 1.기본</div>

      <div>
        <div class="text-subtitle-2 mb-2">Default</div>
        <v-expansion-panels>
          <v-expansion-panel
            v-for="i in 3"
            :key="i"
            title="Item"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </v-expansion-panels>

        <div class="text-subtitle-2 mt-4 mb-2">Accordion</div>

        <v-expansion-panels variant="accordion">
          <v-expansion-panel
            v-for="i in 3"
            :key="i"
            title="Item"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </v-expansion-panels>

        <div class="text-subtitle-2 mt-4 mb-2">Inset</div>

        <v-expansion-panels variant="inset" class="my-4">
          <v-expansion-panel
            v-for="i in 3"
            :key="i"
            title="Item"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </v-expansion-panels>

        <div class="text-subtitle-2 mt-4 mb-2">Popout</div>

        <v-expansion-panels variant="popout" class="my-4">
          <v-expansion-panel
            v-for="i in 3"
            :key="i"
            title="Item"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </v-expansion-panels>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'PanelComp',
  setup: function () {
    const step = ref<number>(1)
    return { step }
  }
})
</script>

<style scoped></style>
