<template>
  <v-row class="pt-5 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%">
          <v-row class="ma-auto">
            <v-col cols="12">
              <v-stepper
                v-model="step"
                :items="['Step 1', 'Step 2', 'Step 3']"
                show-actions
              >
                <template #item.1>
                  <v-card title="Step 1" flat>
                    <div class="pa-5 bg-deep-orange" style="min-height: 200px">
                      Step1 Page
                    </div>
                  </v-card>
                </template>

                <template #item.2>
                  <v-card title="Step 2" flat>
                    <div class="pa-5 bg-deep-purple" style="min-height: 200px">
                      Step2 Page
                    </div>
                  </v-card>
                </template>

                <template #item.3>
                  <v-card title="Step 3" flat>
                    <div
                      class="pa-5 bg-green-darken-2"
                      style="min-height: 200px"
                    >
                      Step3 Page
                    </div>
                  </v-card>
                </template>
              </v-stepper>
            </v-col>
          </v-row>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup: function () {
    const step = ref<number>(1)
    return { step }
  }
})
</script>
