<template>
  <div class="content-sub-title"># 1.윈도우 (일반)</div>

  <v-window v-model="window" show-arrows>
    <v-window-item v-for="n in length" :key="n">
      <v-card height="200px" class="d-flex justify-center align-center">
        <span class="text-h2">Card {{ n }}</span>
      </v-card>
    </v-window-item>
  </v-window>

  <div class="content-sub-title"># 2.윈도우 (아래로)</div>

  <v-window v-model="window2" show-arrows direction="vertical">
    <v-window-item v-for="n in length2" :key="n">
      <v-card height="200px" class="d-flex justify-center align-center">
        <span class="text-h2">Card {{ n }}</span>
      </v-card>
    </v-window-item>
  </v-window>

  <div class="content-sub-title"># 3.윈도우 (카로셀)</div>

  <v-card theme="dark" flat rounded="0">
    <v-window v-model="onboarding">
      <v-window-item v-for="n in length" :key="`card-${n}`" :value="n">
        <v-card height="200" class="d-flex justify-center align-center">
          <span class="text-h2"> Card {{ n }} </span>
        </v-card>
      </v-window-item>
    </v-window>

    <v-card-actions class="justify-space-between">
      <v-btn variant="plain" icon="mdi-chevron-left" @click="prev" />
      <v-item-group v-model="onboarding" class="text-center" mandatory>
        <v-item
          v-for="n in length"
          :key="`btn-${n}`"
          v-slot="{ isSelected, toggle }"
          :value="n"
        >
          <v-btn
            :variant="isSelected ? 'outlined' : 'text'"
            icon="mdi-record"
            @click="toggle"
          />
        </v-item>
      </v-item-group>
      <v-btn variant="plain" icon="mdi-chevron-right" @click="next" />
    </v-card-actions>
  </v-card>

  <div class="content-sub-title"># 4.윈도우 (팝업창)</div>

  <v-card class="mx-auto" max-width="500">
    <v-card-title class="text-h6 font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar color="primary" size="24" v-text="step" />
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-text-field label="Email" placeholder="john@google.com" />
          <span class="text-caption text-grey-darken-1">
            This is the email you will use to login to your Vuetify account
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <v-text-field label="Password" type="password" />
          <v-text-field label="Confirm Password" type="password" />
          <span class="text-caption text-grey-darken-1">
            Please enter a password for your account
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <div class="pa-4 text-center">
          <v-img
            class="mb-4"
            contain
            height="128"
            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
          />
          <h3 class="text-h6 font-weight-light mb-2">Welcome to Vuetify</h3>
          <span class="text-caption text-grey">Thanks for signing up!</span>
        </div>
      </v-window-item>
    </v-window>

    <v-divider />

    <v-card-actions>
      <v-btn v-if="step > 1" variant="text" @click="step--"> Back </v-btn>
      <v-spacer />
      <v-btn v-if="step < 3" color="primary" variant="flat" @click="step++">
        Next
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'WindowComp',
  setup: function () {
    const length = ref<number>(3)
    const window = ref<number>(0)
    const length2 = ref<number>(3)
    const window2 = ref<number>(0)
    const length3 = ref<number>(3)
    const onboarding = ref<number>(1)

    const step = ref<number>(1)
    const next = () => {
      onboarding.value =
        onboarding.value + 1 > length3.value ? 1 : onboarding.value + 1
    }
    const prev = () => {
      onboarding.value =
        onboarding.value - 1 <= 0 ? length3.value : onboarding.value - 1
    }

    const currentTitle = computed<string>(() => {
      switch (step.value) {
        case 1:
          return 'Sign-up'
        case 2:
          return 'Create a password'
        default:
          return 'Account created'
      }
    })

    return {
      length,
      window,
      length2,
      window2,
      length3,
      onboarding,
      step,
      currentTitle,
      next,
      prev
    }
  }
})
</script>

<style scoped></style>
