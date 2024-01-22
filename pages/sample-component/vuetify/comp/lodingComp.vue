<template>
  <v-sheet width="`100%`" class="mx-auto">
    <div class="content-sub-title"># 1.일반로딩</div>

    <v-row>
      <v-col cols="12">
        <v-btn color="deep-purple-accent-4" @click="overlay = !overlay">
          로딩 호출
        </v-btn>
        <v-overlay :model-value="overlay" class="align-center justify-center">
          <v-progress-circular :size="50" color="primary" indeterminate />

          <v-progress-circular :width="3" color="red" indeterminate />

          <v-progress-circular
            :size="70"
            :width="7"
            color="purple"
            indeterminate
          />

          <v-progress-circular :width="3" color="green" indeterminate />

          <v-progress-circular :size="50" color="amber" indeterminate />
        </v-overlay>
      </v-col>
    </v-row>

    <div class="content-sub-title"># 2.게이지 로딩</div>

    <v-row>
      <v-col cols="12">
        <v-progress-circular
          :rotate="360"
          :size="100"
          :width="15"
          :model-value="value"
          color="teal"
        >
          {{ value }}
        </v-progress-circular>

        <v-progress-circular
          :rotate="-90"
          :size="100"
          :width="15"
          :model-value="value"
          color="primary"
        >
          {{ value }}
        </v-progress-circular>

        <v-progress-circular
          :rotate="90"
          :size="100"
          :width="15"
          :model-value="value"
          color="red"
        >
          {{ value }}
        </v-progress-circular>

        <v-progress-circular
          :rotate="180"
          :size="100"
          :width="15"
          :model-value="value"
          color="pink"
        >
          {{ value }}
        </v-progress-circular>
      </v-col>
    </v-row>

    <div class="content-sub-title"># 3.스켈레톤 로딩</div>

    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-skeleton-loader color="primary" type="card" />
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-skeleton-loader type="paragraph" />
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-skeleton-loader color="secondary" type="list-item-avatar" />
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-skeleton-loader :elevation="6" color="success" type="article" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-skeleton-loader color="warning" type="card-avatar" />
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-skeleton-loader
          class="mx-auto border"
          max-width="300"
          type="card-avatar, actions"
          color="info"
        />
      </v-col>
      <v-col cols="12" sm="4" md="3">
        <v-skeleton-loader
          class="mx-auto border"
          max-width="300"
          type="image, article"
          color="error"
        />
      </v-col>
      <v-col cols="12" sm="6" md="3" />
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <v-btn class="mb-12" size="x-large" @click="loading = !loading">
          Toggle Loading
        </v-btn>

        <v-card theme="dark" max-width="800" rounded="lg">
          <v-container>
            <v-row>
              <v-col
                v-for="{ src, title, subtitle } in cards"
                :key="title"
                cols="12"
                md="6"
                lg="4"
              >
                <v-skeleton-loader
                  :loading="loading"
                  height="240"
                  type="image, list-item-two-line"
                >
                  <v-responsive>
                    <v-img
                      :src="src"
                      class="rounded-lg mb-2"
                      cover
                      height="184"
                    />

                    <v-list-item
                      :title="title"
                      :subtitle="subtitle"
                      class="px-0"
                    />
                  </v-responsive>
                </v-skeleton-loader>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount, watch } from 'vue'

export default defineComponent({
  name: 'LodingComp',
  setup: function () {
    const overlay = ref<boolean | null>(false)
    const value = ref<number | null>(0)
    let interval

    const cards = [
      {
        title: 'Homemade Dulce de Leche Ice Cream with Chocolate Chips',
        subtitle: 'Happy Foods',
        src: 'https://cdn.vuetifyjs.com/docs/images/graphics/dulce-ice-cream.png'
      },
      {
        title: 'Salted Caramel Swirl Ice Cream',
        subtitle: 'Stone Kitchen',
        src: 'https://cdn.vuetifyjs.com/docs/images/graphics/salted-caramel-ice-cream.png'
      },
      {
        title: 'Peanut Butter No-Churn Ice Cream',
        subtitle: 'The Sweeter Side',
        src: 'https://cdn.vuetifyjs.com/docs/images/graphics/peanut-butter-ice-cream.png'
      }
    ]
    const loading = ref<boolean>(true)

    onMounted(() => {
      interval = setInterval(() => {
        if (value.value === 100) {
          value.value = 0
        } else {
          value.value += 10
        }
      }, 1000)
    })

    onBeforeUnmount(() => {
      clearInterval(interval)
    })

    watch(overlay, (val) => {
      if (val) {
        setTimeout(() => {
          overlay.value = false
        }, 3000)
      }
    })

    return {
      overlay,
      value,
      interval,
      cards,
      loading
    }
  }
})
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
