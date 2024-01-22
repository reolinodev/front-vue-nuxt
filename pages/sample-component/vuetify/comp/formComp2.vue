<template>
  <v-sheet width="`100%`" class="mx-auto">
    <v-form ref="form2">
      <div class="content-sub-title"># 1.라디오 버튼 (일반)</div>
      <v-container fluid>
        <p>Selected Button: {{ radios }}</p>
        <v-radio-group v-model="radios">
          <v-radio label="Option One" value="one" />
          <v-radio label="Option 2 (string)" value="2" />
          <v-radio label="Option 3 (integer)" :value="3" />
        </v-radio-group>
      </v-container>

      <div class="content-sub-title"># 1.라디오 버튼 (색상)</div>

      <v-card flat>
        <v-card-text>
          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-radio-group v-model="ex7" column>
                  <v-radio label="red" color="red" value="red" />
                  <v-radio
                    label="red-darken-3"
                    color="red-darken-3"
                    value="red-darken-3"
                  />
                  <v-radio label="indigo" color="indigo" value="indigo" />
                  <v-radio
                    label="indigo-darken-3"
                    color="indigo-darken-3"
                    value="indigo-darken-3"
                  />
                  <v-radio label="orange" color="orange" value="orange" />
                  <v-radio
                    label="orange-darken-3"
                    color="orange-darken-3"
                    value="orange-darken-3"
                  />
                </v-radio-group>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-radio-group v-model="ex8" column>
                  <v-radio label="primary" color="primary" value="primary" />
                  <v-radio
                    label="secondary"
                    color="secondary"
                    value="secondary"
                  />
                  <v-radio label="success" color="success" value="success" />
                  <v-radio label="info" color="info" value="info" />
                  <v-radio label="warning" color="warning" value="warning" />
                  <v-radio label="error" color="error" value="error" />
                </v-radio-group>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>

      <div class="content-sub-title"># 3.textarea (기본)</div>

      <v-textarea clearable label="Label" variant="outlined" auto-grow />

      <div class="content-sub-title"># 4.textarea (유효성)</div>

      <v-textarea
        counter
        label="Text"
        :rules="rules"
        :model-value="textValue"
      />
    </v-form>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'FormComp2',
  setup: function () {
    type RuleType = (v: string) => boolean | string

    const radios = ref<string>('one')
    const ex7 = ref<string>('red')
    const ex8 = ref<string>('primary')
    const textValue = ref<string>('Hello!')

    const rules: Array<RuleType> = [
      (v: string) => {
        return v.length <= 25 || 'Max 25 characters'
      }
    ]

    return {
      radios,
      ex7,
      ex8,
      rules,
      textValue
    }
  }
})
</script>

<style scoped></style>
