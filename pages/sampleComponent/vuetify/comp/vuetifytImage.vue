<template>
  <v-row class="pt-5 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%">
          <v-row class="ma-auto">
            <v-col cols="4">
              <v-card-text>Basic</v-card-text>
              <v-img
                class="bg-white"
                width="300"
                :aspect-ratio="1"
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
              />
            </v-col>
            <v-col cols="4">
              <v-card-text>Cover</v-card-text>
              <v-img
                class="bg-white"
                width="300"
                :aspect-ratio="1"
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                cover
              />
            </v-col>
            <v-col cols="4">
              <v-card-text>Default, Loding, Error</v-card-text>

              <v-img
                class="mx-auto"
                height="300"
                lazy-src="https://picsum.photos/id/11/100/60"
                max-width="500"
                src="https://bad.src/not/valid"
              >
                <template #placeholder>
                  <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular color="grey-lighten-4" indeterminate />
                  </div>
                </template>
                <template #error>
                  <v-img
                    class="mx-auto"
                    height="300"
                    max-width="500"
                    src="https://picsum.photos/500/300?image=232"
                  />
                </template>
              </v-img>
            </v-col>

            <v-col cols="12">
              <v-card-text>Grid</v-card-text>

              <v-row>
                <v-col
                  v-for="n in 8"
                  :key="n"
                  class="d-flex child-flex"
                  cols="3"
                >
                  <v-img
                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                    aspect-ratio="1"
                    cover
                    class="bg-grey-lighten-2"
                  >
                    <template #placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey-lighten-5"
                        />
                      </v-row>
                    </template>
                  </v-img>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12">
              <v-card-text>Complex</v-card-text>

              <v-row>
                <template v-for="(image, imgIdx) in imageLayout" :key="imgIdx">
                  <v-col :cols="image.cols">
                    <v-img
                      :src="`https://picsum.photos/500/300?image=${
                        image.cols * 20
                      }`"
                      cover
                      height="100%"
                    />
                  </v-col>

                  <v-col
                    v-if="image.children"
                    cols="6"
                    class="d-flex flex-column"
                  >
                    <v-row>
                      <v-col
                        v-for="(children, childIdx) in image.children"
                        :key="childIdx"
                        :cols="children.cols"
                      >
                        <v-img
                          :src="`https://picsum.photos/500/300?image=${
                            children.cols + childIdx
                          }`"
                          cover
                          height="100%"
                        />
                      </v-col>
                    </v-row>
                  </v-col>
                </template>
              </v-row>
            </v-col>
          </v-row>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup: function () {
    const imageLayout = [
      { cols: 4 },
      {
        cols: 8,
        children: [{ cols: 12 }, { cols: 12 }]
      },
      { cols: 6 },
      { cols: 3 },
      { cols: 9 },
      { cols: 4 },
      { cols: 8 }
    ]
    return { imageLayout }
  }
})
</script>

<style scoped></style>
