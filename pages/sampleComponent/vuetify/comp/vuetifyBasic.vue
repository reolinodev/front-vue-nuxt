<template>
  <v-row class="pt-5 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%">
          <v-row class="ma-auto">
            <v-col cols="12">
              <v-btn class="ma-2" color="primary" href="https://vuetifyjs.com/">
                Vuetify link
                <v-icon end icon="mdi-checkbox-marked-circle" />
              </v-btn>
            </v-col>

            <v-col cols="12">
              <v-card-title class="pl-5 text-blue-accent-2">
                # Button
              </v-card-title>
            </v-col>

            <v-col cols="6" class="d-flex ga-2" justify="center">
              <v-btn color="primary"> Button1 </v-btn>

              <v-btn color="default"> Button2 </v-btn>

              <v-btn color="error"> Button3 </v-btn>

              <v-btn color="warning"> Button4 </v-btn>

              <v-btn color="success"> Button5 </v-btn>
            </v-col>

            <v-col cols="6" class="d-flex ga-2" justify="center">
              <v-btn variant="outlined"> Button6 </v-btn>

              <v-btn variant="tonal"> Button7 </v-btn>

              <v-btn variant="text"> Button8 </v-btn>

              <v-btn variant="plain"> Button9 </v-btn>
            </v-col>

            <v-col cols="12" class="d-flex ga-2" justify="center">
              <v-btn size="x-small" color="success">Extra small Button</v-btn>

              <v-btn size="small" color="success">Small Button</v-btn>

              <v-btn color="success">Regular Button</v-btn>

              <v-btn size="large" color="success">Large Button</v-btn>

              <v-btn size="x-large" color="success">X-Large Button</v-btn>
            </v-col>

            <v-col cols="12" class="d-flex ga-2" justify="center">
              <v-btn block color="error">Block Button</v-btn>
            </v-col>
            <v-col cols="12" class="d-flex ga-2" justify="center">
              <v-btn rounded="0" size="large" color="info">Rounded 0</v-btn>

              <v-btn rounded="xs" size="large" color="info">Rounded xs</v-btn>

              <v-btn rounded="sm" size="large" color="info">Rounded sm</v-btn>

              <v-btn rounded="lg" size="large" color="info">Rounded lg</v-btn>

              <v-btn rounded="xl" size="large" color="info">Rounded xl</v-btn>
            </v-col>

            <v-col cols="12">
              <v-card-title class="pl-5 text-blue-accent-2">
                # Icon
              </v-card-title>
            </v-col>

            <v-col cols="3">
              <v-card-text>Color</v-card-text>

              <v-sheet class="ma-auto d-flex ga-2">
                <v-icon size="large" color="green-darken-2" icon="mdi-domain" />

                <v-icon
                  size="large"
                  color="blue-darken-2"
                  icon="mdi-message-text"
                />

                <v-icon
                  size="large"
                  color="purple-darken-2"
                  icon="mdi-dialpad"
                />

                <v-icon size="large" color="teal-darken-2" icon="mdi-email" />

                <v-icon
                  size="large"
                  color="blue-grey-darken-2"
                  icon="mdi-call-split"
                />

                <v-icon
                  size="large"
                  color="orange-darken-2"
                  icon="mdi-arrow-up-bold-box-outline"
                />
              </v-sheet>
            </v-col>

            <v-col cols="6">
              <v-card-text>Icon</v-card-text>

              <div class="text-center">
                <div>
                  <v-btn class="ma-2" color="primary">
                    Accept
                    <v-icon end icon="mdi-checkbox-marked-circle" />
                  </v-btn>

                  <v-btn class="ma-2" color="red">
                    Decline
                    <v-icon end icon="mdi-cancel" />
                  </v-btn>

                  <v-btn class="ma-2">
                    <v-icon start icon="mdi-minus-circle" />
                    Cancel
                  </v-btn>
                </div>

                <div>
                  <v-btn class="ma-2" color="orange-darken-2">
                    <v-icon start icon="mdi-arrow-left" />
                    Back
                  </v-btn>

                  <v-btn class="ma-2" color="purple" icon="mdi-wrench" />

                  <v-btn class="ma-2" color="indigo" icon="mdi-cloud-upload" />
                </div>

                <div>
                  <v-btn
                    class="ma-2"
                    variant="text"
                    icon="mdi-thumb-up"
                    color="blue-lighten-2"
                  />

                  <v-btn
                    class="ma-2"
                    variant="text"
                    icon="mdi-thumb-down"
                    color="red-lighten-2"
                  />
                </div>
              </div>
            </v-col>
            <v-col cols="3">
              <v-btn
                class="ma-2"
                color="primary"
                href="https://pictogrammers.com/library/mdi/"
              >
                Mdi link
                <v-icon end icon="mdi-checkbox-marked-circle" />
              </v-btn>
            </v-col>

            <!-- 툴팁 영역 시작 -->
            <v-col cols="12">
              <v-card-title class="pl-5 text-blue-accent-2">
                # Tooltip
              </v-card-title>
            </v-col>
            <v-col cols="12" class="d-flex justify-center ga-10">
              <v-btn variant="tonal">
                Start
                <v-tooltip activator="parent" location="start">
                  Tooltip
                </v-tooltip>
              </v-btn>

              <v-btn variant="tonal">
                End
                <v-tooltip activator="parent" location="end">
                  Tooltip
                </v-tooltip>
              </v-btn>

              <v-btn variant="tonal">
                Top
                <v-tooltip activator="parent" location="top">
                  Tooltip
                </v-tooltip>
              </v-btn>

              <v-btn variant="tonal">
                Bottom
                <v-tooltip activator="parent" location="bottom">
                  Tooltip
                </v-tooltip>
              </v-btn>

              <v-tooltip v-model="show" location="top">
                <template #activator="{ props }">
                  <v-btn icon v-bind="props">
                    <v-icon color="grey-lighten-1"> mdi-cart </v-icon>
                  </v-btn>
                </template>
                <span>Programmatic tooltip</span>
              </v-tooltip>
            </v-col>
            <!-- 툴팁 영역 종료 -->

            <!-- 하버 영역 시작 -->
            <v-col cols="12">
              <v-card-title class="pl-5 text-blue-accent-2">
                # Hover
              </v-card-title>
            </v-col>
            <v-col cols="6">
              <v-hover open-delay="100">
                <template #default="{ isHovering, props }">
                  <v-card
                    v-bind="props"
                    :color="isHovering ? 'warning' : 'success'"
                    title="Hover Test"
                    text="Please move your mouse up"
                  />
                </template>
              </v-hover>
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
    const show = ref('')
    return {
      show
    }
  }
})
</script>
