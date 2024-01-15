<template>
  <v-sheet width="`100%`" class="mx-auto">
    <v-form ref="form3">
      <div class="content-sub-title"># 1.스위치 (일반)</div>

      <v-switch
        v-model="model"
        hide-details
        inset
        :label="`Switch: ${model}`"
      />

      <div class="content-sub-title"># 2.스위치 (true, false 외에)</div>

      <v-switch
        v-model="model2"
        hide-details
        inset
        true-value="yes"
        false-value="no"
        :label="`Switch: ${model2}`"
      />

      <div class="content-sub-title"># 3.range slide (일반)</div>
      <v-range-slider />

      <div class="content-sub-title"># 4.range slide (수치 나오게)</div>

      <v-range-slider v-model="slideValue" step="10" thumb-label="always" />

      <div class="content-sub-title"># 5.file (일반)</div>
      <v-file-input label="File input" clearable />

      <div class="content-sub-title"># 6.file (유효성)</div>
      <v-file-input
        :rules="fileRules"
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Pick an avatar"
        prepend-icon="mdi-camera"
        label="Avatar"
      />
    </v-form>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'FormComp3',
  setup: function () {
    const model = ref<boolean | null>(true)
    const model2 = ref<string | null>('yes')

    const slideValue = ref<Array<number>>([20, 40])

    type FileRuleType = (v: FileList) => boolean | string
    const fileRules: Array<FileRuleType> = [
      (v) => {
        return (
          !v ||
          !v.length ||
          v[0].size < 2000000 ||
          'Avatar size should be less than 2 MB!'
        )
      }
    ]

    return {
      model,
      model2,
      slideValue,
      fileRules
    }
  }
})
</script>

<style scoped></style>
