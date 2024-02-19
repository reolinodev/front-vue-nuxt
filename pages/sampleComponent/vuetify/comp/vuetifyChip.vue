<template>
  <v-row class="pt-5 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%">
          <v-row class="ma-auto">
            <v-col cols="6">
              <v-card-text>Basic</v-card-text>

              <div class="d-flex justify-center ga-2">
                <v-chip> Default </v-chip>

                <v-chip color="primary"> Primary </v-chip>

                <v-chip color="secondary"> Secondary </v-chip>

                <v-chip color="red"> Red </v-chip>

                <v-chip color="green"> Green </v-chip>
              </div>
              <div class="d-flex justify-center ga-2 mt-2">
                <v-chip variant="flat"> Default flat </v-chip>

                <v-chip variant="flat" color="primary"> Primary flat </v-chip>

                <v-chip variant="flat" color="secondary">
                  Secondary flat
                </v-chip>

                <v-chip variant="flat" color="red"> Red flat </v-chip>

                <v-chip variant="flat" color="green"> Green flat </v-chip>
              </div>
            </v-col>
            <v-col cols="6">
              <v-card-text>Size</v-card-text>

              <div class="d-flex justify-center align-center ga-2">
                <v-label style="width: 100px">default</v-label>

                <v-chip size="x-small"> x-small </v-chip>

                <v-chip size="small"> small </v-chip>

                <v-chip> default </v-chip>

                <v-chip size="large"> large </v-chip>

                <v-chip size="x-large"> x-large </v-chip>
              </div>
              <div class="d-flex justify-center align-center ga-2 mt-2">
                <v-label style="width: 100px">comfortable</v-label>

                <v-chip size="x-small" density="comfortable"> x-small </v-chip>

                <v-chip size="small" density="comfortable"> small </v-chip>

                <v-chip density="comfortable"> default </v-chip>

                <v-chip size="large" density="comfortable"> large </v-chip>

                <v-chip size="x-large" density="comfortable"> x-large </v-chip>
              </div>
              <div class="d-flex justify-center align-center ga-2 mt-2">
                <v-label style="width: 100px">compact</v-label>

                <v-chip size="x-small" density="compact"> x-small </v-chip>

                <v-chip size="small" density="compact"> small </v-chip>

                <v-chip density="compact"> default </v-chip>

                <v-chip size="large" density="compact"> large </v-chip>

                <v-chip size="x-large" density="compact"> x-large </v-chip>
              </div>
            </v-col>
            <v-col cols="6">
              <v-card-text>Label</v-card-text>

              <div class="text-center">
                <v-chip class="ma-2" label> Label </v-chip>

                <v-chip class="ma-2" color="pink" label>
                  <v-icon start icon="mdi-label" />
                  Tags
                </v-chip>

                <v-chip class="ma-2" color="primary" label>
                  <v-icon start icon="mdi-account-circle-outline" />
                  John Leider
                </v-chip>

                <v-chip class="ma-2" closable color="cyan" label>
                  <v-icon start icon="mdi-twitter" />
                  New Tweets
                </v-chip>
              </div>
            </v-col>
            <v-col cols="6">
              <v-card-text>Icon</v-card-text>

              <div class="text-center">
                <v-chip
                  class="ma-2"
                  color="indigo"
                  prepend-icon="mdi-account-circle"
                >
                  Mike
                </v-chip>

                <v-chip class="ma-2" color="orange" append-icon="mdi-star">
                  Premium
                </v-chip>

                <v-chip
                  class="ma-2"
                  color="primary"
                  append-icon="mdi-cake-variant"
                >
                  1 Year
                </v-chip>

                <v-chip class="ma-2" color="green">
                  <template #prepend>
                    <v-avatar class="green-darken-4"> 1 </v-avatar>
                  </template>
                  Years
                </v-chip>

                <v-chip
                  class="ma-2"
                  closable
                  color="teal"
                  prepend-icon="mdi-checkbox-marked-circle"
                  :model-value="true"
                >
                  Confirmed
                </v-chip>
              </div>
            </v-col>
            <v-col cols="6">
              <v-card-text>Expansion</v-card-text>

              <v-card class="mx-auto" max-width="400">
                <v-row align="center" class="pa-6">
                  <span class="me-4">To</span>

                  <v-menu
                    v-model="menu"
                    location="top start"
                    origin="top start"
                    transition="scale-transition"
                  >
                    <template #activator="{ props }">
                      <v-chip pill v-bind="props" link>
                        <v-avatar start>
                          <v-img
                            src="https://cdn.vuetifyjs.com/images/john.png"
                          />
                        </v-avatar>

                        John Leider
                      </v-chip>
                    </template>

                    <v-card width="300">
                      <v-list bg-color="black">
                        <v-list-item>
                          <template #prepend>
                            <v-avatar
                              image="https://cdn.vuetifyjs.com/images/john.png"
                            />
                          </template>

                          <v-list-item-title>John Leider</v-list-item-title>

                          <v-list-item-subtitle>
                            john@google.com
                          </v-list-item-subtitle>

                          <template #append>
                            <v-list-item-action>
                              <v-btn icon variant="text" @click="menu = false">
                                <v-icon>mdi-close-circle</v-icon>
                              </v-btn>
                            </v-list-item-action>
                          </template>
                        </v-list-item>
                      </v-list>

                      <v-list>
                        <v-list-item link prepend-icon="mdi-briefcase">
                          <v-list-item-subtitle>
                            john@gmail.com
                          </v-list-item-subtitle>
                        </v-list-item>
                      </v-list>
                    </v-card>
                  </v-menu>
                </v-row>

                <v-divider />

                <div class="pa-3">
                  <v-text-field
                    label="Subject"
                    model-value="Re: Vacation Request"
                    single-line
                    variant="underlined"
                  />

                  <v-textarea
                    label="Message"
                    single-line
                    variant="underlined"
                  />
                </div>
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
    const menu = ref<boolean>(false)
    return { menu }
  }
})
</script>
