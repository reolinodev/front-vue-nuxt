<template>
  <v-row class="pt-5 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%">
          <v-form ref="form">
            <v-row class="ma-auto">
              <v-col cols="12">
                <v-card-title class="pl-5 text-blue-accent-2">
                  # Input
                </v-card-title>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="name"
                  :counter="10"
                  :rules="nameRules"
                  label="Please enter your name"
                  required
                  clearable
                />
              </v-col>

              <v-col cols="12">
                <v-card-title class="pl-5 text-blue-accent-2">
                  # Select
                </v-card-title>
              </v-col>

              <v-col cols="12">
                <v-select
                  v-model="select"
                  :items="items"
                  label="Item"
                  :rules="[(v) => !!v || 'Item is required']"
                  required
                  clearable
                />
              </v-col>
              <v-col cols="12">
                <v-select
                  v-model="favorites"
                  :items="states"
                  label="multi items"
                  multiple
                  hint="Pick your favorite states"
                  persistent-hint
                  clearable
                />
              </v-col>

              <v-col cols="12">
                <v-card-title class="pl-5 text-blue-accent-2">
                  # Checkbox
                </v-card-title>
              </v-col>

              <v-col cols="6">
                <v-checkbox
                  v-model="checkbox"
                  color="warning"
                  value="warning"
                  :rules="[(v) => !!v || 'You must agree to continue!']"
                  label="Do you agree?"
                  required
                />
              </v-col>
              <v-col cols="6">
                <p>{{ selectedCheck }}</p>
                <v-checkbox v-model="selectedCheck" label="John" value="John" />
                <v-checkbox
                  v-model="selectedCheck"
                  label="Jacob"
                  value="Jacob"
                />
              </v-col>

              <v-col cols="12">
                <v-card-title class="pl-5 text-blue-accent-2">
                  # Radio Button
                </v-card-title>
              </v-col>

              <v-col cols="12">
                <p>Selected Button: {{ radios }}</p>
                <v-radio-group v-model="radios">
                  <v-radio
                    label="Option One"
                    value="one"
                    color="red-darken-3"
                  />
                  <v-radio
                    label="Option 2 (string)"
                    color="indigo-darken-3"
                    value="2"
                  />
                  <v-radio
                    label="Option 3 (integer)"
                    color="secondary"
                    :value="3"
                  />
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-card-title class="pl-5 text-blue-accent-2">
                  # TextArea
                </v-card-title>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  counter
                  label="Text"
                  variant="outlined"
                  :rules="rules"
                  :model-value="textValue"
                  clearable
                />
              </v-col>

              <v-col cols="12">
                <v-card-title class="pl-5 text-blue-accent-2">
                  # Switch
                </v-card-title>
              </v-col>

              <v-col cols="6">
                <v-switch
                  v-model="model"
                  hide-details
                  inset
                  :label="`Switch: ${model}`"
                />
              </v-col>
              <v-col cols="6">
                <v-switch
                  v-model="model2"
                  hide-details
                  inset
                  true-value="yes"
                  false-value="no"
                  :label="`Switch: ${model2}`"
                />
              </v-col>

              <v-col cols="12">
                <v-card-title class="pl-5 text-blue-accent-2">
                  # Range
                </v-card-title>
              </v-col>

              <v-col cols="12">
                <v-range-slider
                  v-model="slideValue"
                  step="10"
                  thumb-label="always"
                  :label="`Slide: ${slideValue}`"
                />
              </v-col>

              <v-col cols="12">
                <v-card-title class="pl-5 text-blue-accent-2">
                  # File Input
                </v-card-title>
              </v-col>

              <v-col cols="12">
                <v-file-input
                  :rules="fileRules"
                  accept="image/png, image/jpeg, image/bmp"
                  placeholder="Pick an avatar"
                  label="File Input"
                  clearable
                />
              </v-col>

              <v-col cols="4">
                <v-btn color="success" width="100px" block @click="validate">
                  Validate
                </v-btn>
              </v-col>
              <v-col cols="4">
                <v-btn color="error" block @click="reset"> Reset Form </v-btn>
              </v-col>
              <v-col cols="4">
                <v-btn color="warning" block @click="resetValidation">
                  Reset Validation
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'VuetifyForm',
  setup: function () {
    const form = ref<any>(null)

    // text
    const name = ref('')
    const nameRules = [
      (v: string) => !!v || 'Name is required',
      (v: string) =>
        (v && v.length <= 10) || 'Name must be less than 10 characters'
    ]

    // select
    const select = ref<string | null>(null)
    const items: Array<string> = ['Item 1', 'Item 2', 'Item 3', 'Item 4']
    const favorites = ref<Array<string>>([])
    const states = ref<Array<string>>([
      'Alabama',
      'Alaska',
      'American Samoa',
      'Arizona',
      'Arkansas'
    ])

    // checkbox
    const checkbox = ref<boolean | null>(false)
    const selectedCheck = ref<Array<string>>([])

    // radio
    const radios = ref<string>('one')

    // text area
    const textValue = ref<string>('Hello!')
    type RuleType = (v: string) => boolean | string
    const rules: Array<RuleType> = [
      (v: string) => {
        return v.length <= 25 || 'Max 25 characters'
      }
    ]

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

    const validate = async () => {
      const { valid } = await form.value.validate()

      if (valid) {
        alert('Form is valid')
      }
    }

    const reset = () => {
      form.value.reset()
      selectedCheck.value = []
      model.value = false
      model2.value = 'yes'
      slideValue.value = [0, 100]
    }

    const resetValidation = () => {
      form.value.resetValidation()
    }

    return {
      name,
      nameRules,
      select,
      items,
      checkbox,
      form,
      favorites,
      states,
      selectedCheck,
      radios,
      rules,
      textValue,
      model,
      model2,
      slideValue,
      fileRules,
      validate,
      reset,
      resetValidation
    }
  }
})
</script>

<style scoped>
.step-content {
  padding: 10px;
}
</style>
