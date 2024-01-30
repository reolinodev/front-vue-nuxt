<template>
  <v-row class="pt-5 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%">
          <v-row class="ma-auto">
            <!-- card  영역 시작 -->
            <v-col cols="12">
              <v-card-title class="pl-5 text-blue-accent-2">
                # CARD
              </v-card-title>
            </v-col>

            <v-col v-for="(variant, i) in variants" :key="i" cols="auto">
              <v-card class="mx-auto" max-width="344" :variant="variant">
                <v-card-item>
                  <div>
                    <div class="text-overline mb-1">
                      {{ variant }}
                    </div>
                    <div class="text-h6 mb-1">Headline {{ i }}</div>
                    <div class="text-caption">
                      Greyhound divisely hello coldly fonwderfully
                    </div>
                  </div>
                </v-card-item>

                <v-card-actions>
                  <v-btn> Button </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>

            <v-col v-for="(variant, i) in variants" :key="i" cols="auto">
              <v-card
                class="mx-auto"
                max-width="344"
                :color="color"
                :variant="variant"
              >
                <v-card-item>
                  <div>
                    <div class="text-overline mb-1">
                      {{ variant }}
                    </div>
                    <div class="text-h6 mb-1">HeadlineA {{ i }}</div>
                    <div class="text-caption">
                      Greyhound divisely hello coldly fonwderfully
                    </div>
                  </div>
                </v-card-item>

                <v-card-actions>
                  <v-btn> Button </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>

            <v-col cols="3">
              <v-card-text>Href</v-card-text>

              <v-card
                class="mx-auto my-8"
                max-width="344"
                title="Vuetify on GitHub"
                prepend-icon="mdi-github"
                append-icon="mdi-open-in-new"
                href="https://github.com/vuetifyjs/vuetify/"
                target="_blank"
                rel="noopener"
              />
            </v-col>

            <v-col cols="3">
              <v-card-text>Hover</v-card-text>

              <v-card
                class="mx-auto my-8"
                max-width="344"
                title="Hover and click me"
                subtitle="Same looks, no anchor"
                link
              />
            </v-col>

            <v-col cols="3">
              <v-card-text>Disabled</v-card-text>

              <v-card
                class="mx-auto my-8"
                max-width="344"
                title="Disabled card"
                subtitle="The card stays disabled"
                link
                disabled
              />
            </v-col>

            <v-col cols="3">
              <v-card-text>Image</v-card-text>

              <v-card
                class="mx-auto"
                max-width="300"
                height="300"
                image="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                title="Card title"
                theme="dark"
              />
            </v-col>

            <v-col cols="3">
              <v-card
                class="mx-auto"
                max-width="344"
                title="Icons"
                subtitle="prepend-icon and append-icon"
                prepend-icon="mdi-account"
                append-icon="mdi-check"
              >
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="4">
              <v-card width="400">
                <v-img
                  height="200"
                  src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
                  cover
                  class="text-white"
                >
                  <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
                    <template #prepend>
                      <v-btn icon="$menu" />
                    </template>

                    <v-toolbar-title class="text-h6">
                      Messages
                    </v-toolbar-title>

                    <template #append>
                      <v-btn icon="mdi-dots-vertical" />
                    </template>
                  </v-toolbar>
                </v-img>

                <v-card-text>
                  <div class="font-weight-bold ms-1 mb-2">Today</div>

                  <v-timeline density="compact" align="start">
                    <v-timeline-item
                      v-for="message in messages"
                      :key="message.time"
                      :dot-color="message.color"
                      size="x-small"
                    >
                      <div class="mb-4">
                        <div class="font-weight-normal">
                          <strong>{{ message.from }}</strong> @{{
                            message.time
                          }}
                        </div>
                        <div>{{ message.message }}</div>
                      </div>
                    </v-timeline-item>
                  </v-timeline>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="4">
              <v-card class="mx-auto" max-width="500">
                <v-container fluid>
                  <v-row dense>
                    <v-col
                      v-for="card in cards"
                      :key="card.title"
                      :cols="card.flex"
                    >
                      <v-card>
                        <v-img
                          :src="card.src"
                          class="align-end"
                          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                          height="200px"
                          cover
                        >
                          <v-card-title
                            class="text-white"
                            v-text="card.title"
                          />
                        </v-img>

                        <v-card-actions>
                          <v-spacer />

                          <v-btn
                            size="small"
                            color="surface-variant"
                            variant="text"
                            icon="mdi-heart"
                          />

                          <v-btn
                            size="small"
                            color="surface-variant"
                            variant="text"
                            icon="mdi-bookmark"
                          />

                          <v-btn
                            size="small"
                            color="surface-variant"
                            variant="text"
                            icon="mdi-share-variant"
                          />
                        </v-card-actions>
                      </v-card>
                    </v-col>
                    <!-- card  영역 종료 -->
                  </v-row>
                </v-container>
              </v-card>
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
    const variants = ['elevated', 'flat', 'tonal', 'outlined']
    const color = ref('indigo')

    const messages = ref([
      {
        from: 'You',
        message: "Sure, I'll see you later.",
        time: '10:42am',
        color: 'deep-purple-lighten-1'
      },
      {
        from: 'John Doe',
        message: 'Yeah, sure. Does 1:00pm work?',
        time: '10:37am',
        color: 'green'
      },
      {
        from: 'You',
        message: 'Did you still want to grab lunch today?',
        time: '9:47am',
        color: 'deep-purple-lighten-1'
      }
    ])

    const cards = ref([
      {
        title: 'Pre-fab homes',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        flex: 12
      },
      {
        title: 'Favorite road trips',
        src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        flex: 6
      },
      {
        title: 'Best airlines',
        src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        flex: 6
      }
    ])

    return { variants, color, messages, cards }
  }
})
</script>
