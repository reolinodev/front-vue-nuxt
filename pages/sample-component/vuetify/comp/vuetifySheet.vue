<template>
  <v-row class="pt-5 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%">
          <v-row class="ma-auto">
            <v-col cols="12">
              <v-card-title class="pl-5 pb-3 text-blue-accent-2">
                # Sheet
              </v-card-title>
            </v-col>
            <v-col cols="12">
              <v-card-text>Round</v-card-text>

              <v-row justify="space-around">
                <v-col
                  v-for="rounded in [false, true, 'xl']"
                  :key="String(rounded)"
                  cols="12"
                  md="4"
                >
                  <v-sheet class="pa-12" color="grey-lighten-3">
                    <div />
                    <v-sheet
                      :rounded="rounded"
                      class="mx-auto"
                      height="100"
                      width="100"
                    />
                    <div />
                  </v-sheet>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12">
              <v-card-text>Color</v-card-text>

              <v-row class="flex-child text-subtitle-2">
                <v-col class="d-flex" cols="12" md="4">
                  <v-sheet class="d-flex" color="grey-lighten-3" height="424">
                    <sheet-footer> #1: (3r x 2c) </sheet-footer>
                  </v-sheet>
                </v-col>

                <v-col class="d-flex" cols="12" md="4">
                  <v-row class="ma-n3">
                    <v-col cols="6">
                      <v-sheet
                        class="d-flex"
                        color="green-lighten-3"
                        height="150"
                      >
                        <sheet-footer> #2: (1r x 1c) </sheet-footer>
                      </v-sheet>
                    </v-col>

                    <v-col cols="6">
                      <v-sheet
                        class="d-flex"
                        color="yellow-lighten-3"
                        height="150"
                      >
                        <sheet-footer> #3: (1r x 1c) </sheet-footer>
                      </v-sheet>
                    </v-col>

                    <v-col cols="12">
                      <v-sheet
                        class="d-flex"
                        color="red-lighten-3"
                        height="250"
                      >
                        <sheet-footer> #5: (2r x 2c) </sheet-footer>
                      </v-sheet>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col cols="6" md="2">
                  <v-sheet class="d-flex" color="teal-lighten-3" height="300">
                    <sheet-footer> #4: (2r x 1c) </sheet-footer>
                  </v-sheet>
                </v-col>

                <v-col class="d-flex" cols="6" md="2">
                  <v-sheet
                    class="d-flex mt-auto"
                    color="purple-lighten-3"
                    height="300"
                  >
                    <sheet-footer> #6: (2r x 1c) </sheet-footer>
                  </v-sheet>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <v-card-text>Example1</v-card-text>

              <v-sheet
                class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4"
                elevation="4"
                height="250"
                rounded
                max-width="800"
                width="100%"
              >
                <div>
                  <h2 class="text-h4 font-weight-black text-orange">
                    Congratulations!
                  </h2>

                  <div class="text-h5 font-weight-medium mb-2">
                    You are officially a part of the Vuetify Community!
                  </div>

                  <p class="text-body-2 mb-4">
                    Please head over to your inbox/spam or others folder to find
                    our verificaiton email.
                  </p>

                  <v-btn variant="text" color="orange">Go to Login</v-btn>
                </div>
              </v-sheet>
            </v-col>

            <v-col cols="12">
              <v-card-text>Example2</v-card-text>

              <v-sheet
                elevation="12"
                max-width="600"
                rounded="lg"
                width="100%"
                class="pa-4 text-center mx-auto"
              >
                <v-icon
                  class="mb-5"
                  color="success"
                  icon="mdi-check-circle"
                  size="112"
                />

                <h2 class="text-h5 mb-6">You reconciled this account</h2>

                <p class="mb-4 text-medium-emphasis text-body-2">
                  To see a report on this reconciliation, click
                  <a href="#"
class="text-decoration-none text-info"
                  >View reconciliation report.</a>

                  <br >

                  Otherwise, you're done!
                </p>

                <v-divider class="mb-4" />

                <div class="text-end">
                  <v-btn
                    class="text-none"
                    color="success"
                    rounded
                    variant="flat"
                    width="90"
                  >
                    Done
                  </v-btn>
                </div>
              </v-sheet>
            </v-col>

            <v-col cols="12">
              <v-card-text>Example3</v-card-text>

              <v-sheet
                border="md"
                class="pa-6 text-white mx-auto"
                color="#141518"
                max-width="400"
              >
                <h4 class="text-h5 font-weight-bold mb-4">Your Privacy</h4>

                <p class="mb-8">
                  This business determines the use of personal data collectied
                  on our media properties and across the internet. We may
                  collect data that you submit to us directly or data that we
                  collect automatically including from cookies (such as device
                  information or IP address).

                  <br />
                  <br />

                  Please read our
                  <a href="#" class="text-red-accent-2">Privacy Policy</a> to
                  learn about our privacy practices or click "Your Preferences"
                  to exercise control over your data.
                </p>

                <v-btn
                  block
                  class="text-none text-black mb-4"
                  color="red-accent-2"
                  size="x-large"
                  variant="flat"
                >
                  Accept
                </v-btn>

                <v-btn
                  block
                  class="text-none text-black"
                  color="red-accent-2"
                  size="x-large"
                  variant="outlined"
                >
                  Your Preferences
                </v-btn>
              </v-sheet>
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
