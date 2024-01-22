<template>
  <v-sheet width="`100%`" class="mx-auto">
    <v-row>
      <v-col cols="12">
        <div class="content-sub-title"># 1.기본</div>
        <div class="d-flex justify-space-around align-center bg-grey-lighten-4">
          <div class="ma-4">
            <div class="text-subtitle-2">Default</div>
            <v-img
              class="bg-white"
              width="300"
              :aspect-ratio="1"
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            />
          </div>

          <div class="ma-4">
            <div class="text-subtitle-2">Cover</div>
            <v-img
              class="bg-white"
              width="300"
              :aspect-ratio="1"
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
              cover
            />
          </div>
        </div>
      </v-col>
      <v-col cols="12">
        <div class="content-sub-title"># 2.디폴트, 로딩, 에러 추가</div>
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
        <div class="content-sub-title"># 3.그리드</div>
        <v-row>
          <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
            <v-img
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
              aspect-ratio="1"
              cover
              class="bg-grey-lighten-2"
            >
              <template #placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey-lighten-5" />
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <div class="content-sub-title"># 4.복합형태</div>
        <v-row>
          <template v-for="(image, imgIdx) in imageLayout" :key="imgIdx">
            <v-col :cols="image.cols">
              <v-img
                :src="`https://picsum.photos/500/300?image=${image.cols * 20}`"
                cover
                height="100%"
              />
            </v-col>

            <v-col v-if="image.children" cols="6" class="d-flex flex-column">
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
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ImageComp',
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
