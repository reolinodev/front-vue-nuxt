<template>
  <v-stepper
    v-model="step"
    :items="['Step 1', 'Step 2', 'Step 3']"
    show-actions
  >
    <template #item.1>
      <v-card title="Step 1" flat>
        <div class="step-content">스텝1 페이지</div>
      </v-card>
    </template>

    <template #item.2>
      <v-card title="Step 2" flat>
        <div class="step-content">스텝2 페이지</div>
      </v-card>
    </template>

    <template #item.3>
      <v-card title="Step 3" flat>
        <div class="step-content">스텝3 페이지</div>
      </v-card>
    </template>
  </v-stepper>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'StepperComp',
  setup: function () {
    const step = ref<number>(1)
    return { step }
  }
})
</script>

<style scoped>
.step-content {
  padding: 10px;
}
</style>
