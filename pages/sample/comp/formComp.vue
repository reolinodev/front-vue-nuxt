<template>
  <v-sheet width="`100%`" class="mx-auto">
    <div class="content-sub-title"># 1.폼 (일반)</div>

    <v-form ref="form">
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      />

      <v-select
        v-model="select"
        :items="items"
        :rules="[(v) => !!v || 'Item is required']"
        label="Item"
        required
      />

      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      />

      <div class="d-flex flex-column">
        <v-btn color="success" class="mt-4" block @click="validate">
          Validate
        </v-btn>

        <v-btn color="error" class="mt-4" block @click="reset">
          Reset Form
        </v-btn>

        <v-btn color="warning" class="mt-4" block @click="resetValidation">
          Reset Validation
        </v-btn>

        <v-btn
          color="default"
          class="mt-4"
          block
          :loading="loading"
          @click="submit"
        >
          Submit
        </v-btn>
      </div>
    </v-form>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'FormComp',
  setup: function () {
    const form = ref<any>(null)
    const loading = ref<boolean>(false)

    const name = ref('')
    const nameRules = [
      (v: string) => !!v || 'Name is required',
      (v: string) =>
        (v && v.length <= 10) || 'Name must be less than 10 characters'
    ]
    const select = ref<string | null>(null)

    const items: Array<string> = ['Item 1', 'Item 2', 'Item 3', 'Item 4']

    const checkbox = ref<boolean | null>(false)

    const validate = async () => {
      const { valid } = await form.value.validate()

      if (valid) {
        alert('Form is valid')
      }
    }

    const reset = () => {
      form.value.reset()
    }

    const resetValidation = () => {
      form.value.resetValidation()
    }

    const submit = () => {
      loading.value = true
    }

    return {
      name,
      nameRules,
      select,
      items,
      checkbox,
      form,
      loading,
      validate,
      reset,
      resetValidation,
      submit
    }
  }
})
</script>

<style scoped></style>
