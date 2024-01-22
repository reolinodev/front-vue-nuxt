<template>
  <v-sheet width="`100%`" class="mx-auto">
    <v-form ref="form">
      <div class="content-sub-title"># 1.text-field (일반)</div>
      <v-text-field v-model="name1" label="Name" clearable />

      <div class="content-sub-title"># 2.text-field (유효성)</div>
      <v-text-field
        v-model="name2"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
        clearable
      />

      <div class="content-sub-title"># 3.text-field (readonly)</div>
      <v-text-field v-model="name3" label="Name" readonly />

      <div class="content-sub-title"># 4.select (일반)</div>
      <v-select v-model="select" :items="items" label="Item" clearable />

      <div class="content-sub-title"># 5.select (유효성)</div>
      <v-select
        v-model="select2"
        :items="items"
        :rules="[(v) => !!v || 'Item is required']"
        label="Item"
        clearable
        required
      />

      <div class="content-sub-title"># 6.select (readonly)</div>
      <v-select v-model="select3" :items="items" readonly label="Read-only" />

      <div class="content-sub-title"># 7.select (여러개 동시, 힌트포함)</div>
      <v-select
        v-model="favorites"
        :items="states"
        label="Select"
        multiple
        hint="Pick your favorite states"
        persistent-hint
      />

      <div class="content-sub-title"># 8.checkbox (색상)</div>

      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="4" md="4">
            <v-checkbox
              v-model="ex4"
              label="red"
              color="red"
              value="red"
              hide-details
            />
            <v-checkbox
              v-model="ex4"
              label="red-darken-3"
              color="red-darken-3"
              value="red-darken-3"
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-checkbox
              v-model="ex4"
              label="indigo"
              color="indigo"
              value="indigo"
              hide-details
            />
            <v-checkbox
              v-model="ex4"
              label="indigo-darken-3"
              color="indigo-darken-3"
              value="indigo-darken-3"
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-checkbox
              v-model="ex4"
              label="orange"
              color="orange"
              value="orange"
              hide-details
            />
            <v-checkbox
              v-model="ex4"
              label="orange-darken-3"
              color="orange-darken-3"
              value="orange-darken-3"
              hide-details
            />
          </v-col>
        </v-row>

        <v-row class="mt-12">
          <v-col cols="12" sm="4" md="4">
            <v-checkbox
              v-model="ex4"
              label="primary"
              color="primary"
              value="primary"
              hide-details
            />
            <v-checkbox
              v-model="ex4"
              label="secondary"
              color="secondary"
              value="secondary"
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-checkbox
              v-model="ex4"
              label="success"
              color="success"
              value="success"
              hide-details
            />
            <v-checkbox
              v-model="ex4"
              label="info"
              color="info"
              value="info"
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-checkbox
              v-model="ex4"
              label="warning"
              color="warning"
              value="warning"
              hide-details
            />
            <v-checkbox
              v-model="ex4"
              label="error"
              color="error"
              value="error"
              hide-details
            />
          </v-col>
        </v-row>
      </v-container>

      <div class="content-sub-title"># 9.checkbox (여러개 선택)</div>

      <v-container fluid>
        <p>{{ selectedCheck }}</p>
        <v-checkbox v-model="selectedCheck" label="John" value="John" />
        <v-checkbox v-model="selectedCheck" label="Jacob" value="Jacob" />
      </v-container>

      <div class="content-sub-title"># 10.checkbox (Boolean)</div>

      <v-container fluid>
        <v-checkbox
          v-model="checkbox1"
          :label="`Checkbox 1: ${checkbox1.toString()}`"
        />
      </v-container>

      <div class="content-sub-title"># 11.checkbox (유효성)</div>
      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      />
    </v-form>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'FormComp1',
  setup: function () {
    const name1 = ref<string | null>(null)
    const name2 = ref<string | null>(null)
    const name3 = ref<string | null>('ABC')

    type RuleType = (v: string) => boolean | string

    const nameRules: Array<RuleType> = [
      (v: string) => !!v || 'Name is required',
      (v: string) =>
        (v && v.length <= 10) || 'Name must be less than 10 characters'
    ]

    const select = ref<string | null>(null)
    const select2 = ref<string | null>(null)
    const select3 = ref<string | null>('Item 1')

    const items = ref<Array<string>>(['Item 1', 'Item 2', 'Item 3', 'Item 4'])

    const checkbox = ref<boolean | null>(false)

    const favorites = ref<Array<string>>([])
    const states = ref<Array<string>>([
      'Alabama',
      'Alaska',
      'American Samoa',
      'Arizona',
      'Arkansas'
    ])

    const ex4 = ref<Array<string>>([
      'red',
      'indigo',
      'orange',
      'primary',
      'secondary',
      'success',
      'info',
      'warning',
      'error',
      'red darken-3',
      'indigo darken-3',
      'orange darken-3'
    ])

    const selectedCheck = ref<Array<string>>([])

    const checkbox1 = ref<boolean | null>(true)

    return {
      name1,
      name2,
      name3,
      nameRules,
      select,
      select2,
      select3,
      items,
      checkbox,
      favorites,
      states,
      ex4,
      selectedCheck,
      checkbox1
    }
  }
})
</script>

<style scoped></style>
