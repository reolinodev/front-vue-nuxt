<template>
  <v-sheet width="`100%`" class="mx-auto">
    <div class="content-sub-title"># 1.기본</div>
    <v-row>
      <v-col cols="12">
        <v-timeline direction="horizontal">
          <v-timeline-item>
            <template #opposite> Opposite content </template>
            <div>
              <div class="text-h6">Content title</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </v-timeline-item>

          <v-timeline-item>
            <template #opposite> Opposite content </template>
            <div>
              <div class="text-h6">Content title</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </v-timeline-item>

          <v-timeline-item>
            <template #opposite> Opposite content </template>
            <div>
              <div class="text-h6">Content title</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>

    <div class="content-sub-title"># 2.색상</div>
    <v-row>
      <v-col cols="12">
        <v-timeline side="end" align="start">
          <v-timeline-item dot-color="pink" size="small">
            <div class="d-flex">
              <strong class="me-4">5pm</strong>
              <div>
                <strong>New Icon</strong>
                <div class="text-caption">Mobile App</div>
              </div>
            </div>
          </v-timeline-item>

          <v-timeline-item dot-color="teal-lighten-3" size="small">
            <template #opposite>
              <div class="d-flex">
                <strong class="me-4">3-4pm</strong>
                <div>
                  <strong>Design Stand Up</strong>
                  <div class="text-caption mb-2">Hangouts</div>
                </div>
              </div>
            </template>
          </v-timeline-item>

          <v-timeline-item dot-color="pink" size="small">
            <div class="d-flex">
              <strong class="me-4">12pm</strong>
              <div>
                <strong>Lunch break</strong>
              </div>
            </div>
          </v-timeline-item>

          <v-timeline-item dot-color="teal-lighten-3" size="small">
            <template #opposite>
              <div class="d-flex">
                <strong class="me-4">9-11am</strong>
                <div>
                  <strong>Finish Home Screen</strong>
                  <div class="text-caption">Web App</div>
                </div>
              </div>
            </template>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
    <div class="content-sub-title"># 3.심화</div>
    <v-row>
      <v-col cols="12">
        <v-timeline align="start">
          <v-timeline-item
            v-for="(year, i) in years"
            :key="i"
            :dot-color="year.color"
            size="small"
          >
            <template #opposite>
              <div
                :class="`pt-1 headline font-weight-bold text-${year.color}`"
                v-text="year.year"
              />
            </template>
            <div>
              <h2
                :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`"
              >
                Lorem ipsum
              </h2>
              <div>
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando
                voluptatibus, vix an salutandi sententiae.
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TimeLineComp',
  setup: function () {
    const years = ref([
      {
        color: 'cyan',
        year: '1960'
      },
      {
        color: 'green',
        year: '1970'
      },
      {
        color: 'pink',
        year: '1980'
      },
      {
        color: 'amber',
        year: '1990'
      },
      {
        color: 'orange',
        year: '2000'
      }
    ])
    return { years }
  }
})
</script>

<style scoped></style>
