<template>
  <v-row class="pt-5 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%">
          <v-row class="ma-auto">
            <v-col cols="12">
              <v-card-text># SideBar</v-card-text>

              <div class="flex gap-2 justify-content-center">
                <Button icon="pi pi-arrow-right" @click="visibleLeft = true" />
                <Button icon="pi pi-arrow-left" @click="visibleRight = true" />
                <Button icon="pi pi-arrow-down" @click="visibleTop = true" />
                <Button icon="pi pi-arrow-up" @click="visibleBottom = true" />
              </div>

              <Sidebar v-model:visible="visibleLeft" header="Left Sidebar">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Sidebar>

              <Sidebar
                v-model:visible="visibleRight"
                header="Right Sidebar"
                position="right"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Sidebar>

              <Sidebar
                v-model:visible="visibleTop"
                header="Top Sidebar"
                position="top"
                style="height: auto"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Sidebar>

              <Sidebar
                v-model:visible="visibleBottom"
                header="Bottom Sidebar"
                position="bottom"
                style="height: auto"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Sidebar>
            </v-col>

            <v-col cols="3">
              <v-card-text># Skelton Rectangle</v-card-text>

              <Skeleton class="mb-2" />
              <Skeleton width="10rem" class="mb-2" />
              <Skeleton width="5rem" class="mb-2" />
              <Skeleton height="2rem" class="mb-2" />
              <Skeleton width="10rem" height="4rem" />
            </v-col>

            <v-col cols="3">
              <v-card-text># Skelton Rounded</v-card-text>

              <Skeleton class="mb-2" border-radius="16px" />
              <Skeleton width="10rem" class="mb-2" border-radius="16px" />
              <Skeleton width="5rem" border-radius="16px" class="mb-2" />
              <Skeleton height="2rem" class="mb-2" border-radius="16px" />
              <Skeleton width="10rem" height="4rem" border-radius="16px" />
            </v-col>

            <v-col cols="3">
              <v-card-text># Skelton Square</v-card-text>

              <div class="d-flex justify-center">
                <Skeleton size="2rem" class="mr-2" />
                <Skeleton size="3rem" class="mr-2" />
                <Skeleton size="4rem" class="mr-2" />
                <Skeleton size="5rem" />
              </div>
            </v-col>

            <v-col cols="3">
              <v-card-text># Skelton Circle</v-card-text>
              <div class="d-flex justify-center">
                <Skeleton shape="circle" size="2rem" class="mr-2" />
                <Skeleton shape="circle" size="3rem" class="mr-2" />
                <Skeleton shape="circle" size="4rem" class="mr-2" />
                <Skeleton shape="circle" size="5rem" />
              </div>
            </v-col>

            <v-col cols="3">
              <v-card-text># Skelton Card</v-card-text>

              <v-card class="mx-auto" color="indigo" variant="tonal">
                <v-card-item>
                  <div class="d-flex justify-start mb-2">
                    <Skeleton shape="circle" size="4rem" class="mr-2" />
                    <div>
                      <Skeleton width="10rem" class="mb-2" />
                      <Skeleton width="5rem" class="mb-2" />
                      <Skeleton height=".5rem" />
                    </div>
                  </div>
                  <Skeleton width="100%" height="150px" />
                  <div class="d-flex justify-space-between mt-2">
                    <Skeleton width="4rem" height="2rem" />
                    <Skeleton width="4rem" height="2rem" />
                  </div>
                </v-card-item>
              </v-card>
            </v-col>

            <v-col cols="9">
              <v-card-text># Skelton List</v-card-text>

              <v-card class="mx-auto" color="indigo" variant="tonal">
                <ul class="list-none">
                  <li class="mb-3">
                    <div class="d-flex justify-center pa-2">
                      <Skeleton shape="circle" size="4rem" class="mr-2" />
                      <div class="align-self-center" style="flex: 1">
                        <Skeleton width="100%" class="mb-2" />
                        <Skeleton width="75%" />
                      </div>
                    </div>
                  </li>
                  <li class="mb-3">
                    <div class="d-flex justify-center pa-2">
                      <Skeleton shape="circle" size="4rem" class="mr-2" />
                      <div class="align-self-center" style="flex: 1">
                        <Skeleton width="100%" class="mb-2" />
                        <Skeleton width="75%" />
                      </div>
                    </div>
                  </li>
                  <li class="mb-3">
                    <div class="d-flex justify-center pa-2">
                      <Skeleton shape="circle" size="4rem" class="mr-2" />
                      <div class="align-self-center" style="flex: 1">
                        <Skeleton width="100%" class="mb-2" />
                        <Skeleton width="75%" />
                      </div>
                    </div>
                  </li>
                </ul>
              </v-card>
            </v-col>

            <v-col cols="3">
              <v-card-text># Custom Spinner</v-card-text>

              <ProgressSpinner
                style="width: 80px; height: 80px"
                stroke-width="5"
                fill="var(--surface-ground)"
                animation-duration=".5s"
                aria-label="Custom ProgressSpinner"
              />
            </v-col>

            <v-col cols="6">
              <v-card-text># Meter group</v-card-text>
              <MeterGroup :value="value" />
            </v-col>
          </v-row>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import Sidebar from 'primevue/sidebar'
import Skeleton from 'primevue/skeleton'
import ProgressSpinner from 'primevue/progressspinner'
import MeterGroup from 'primevue/metergroup'

export default defineComponent({
  components: {
    Sidebar,
    Skeleton,
    ProgressSpinner,
    MeterGroup
  },
  setup: function () {
    const visibleLeft = ref(false)
    const visibleRight = ref(false)
    const visibleTop = ref(false)
    const visibleBottom = ref(false)

    const value = ref([
      { label: 'Apps', color: '#34d399', value: 16 },
      { label: 'Messages', color: '#fbbf24', value: 8 },
      { label: 'Media', color: '#60a5fa', value: 24 },
      { label: 'System', color: '#c084fc', value: 10 }
    ])

    return {
      visibleLeft,
      visibleRight,
      visibleTop,
      visibleBottom,
      value
    }
  }
})
</script>

<style scoped></style>
