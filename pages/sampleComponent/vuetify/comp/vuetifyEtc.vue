<template>
  <v-row class="pt-5 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%">
          <v-row class="ma-auto">
            <v-col cols="12">
              <v-card-title class="pl-5 text-blue-accent-2">
                # Auto Complete
              </v-card-title>
            </v-col>
            <v-col cols="4">
              <v-card-text>Basic</v-card-text>

              <v-autocomplete
                clearable
                label="Autocomplete"
                :items="[
                  'California',
                  'Colorado',
                  'Florida',
                  'Georgia',
                  'Texas',
                  'Wyoming'
                ]"
              />
            </v-col>
            <v-col cols="4">
              <v-card-text>Chip</v-card-text>
              <v-autocomplete
                chips
                label="Autocomplete"
                :items="[
                  'California',
                  'Colorado',
                  'Florida',
                  'Georgia',
                  'Texas',
                  'Wyoming'
                ]"
              />
            </v-col>
            <v-col cols="4">
              <v-card-text>Muliti</v-card-text>
              <v-autocomplete
                clearable
                label="Autocomplete"
                :items="[
                  'California',
                  'Colorado',
                  'Florida',
                  'Georgia',
                  'Texas',
                  'Wyoming'
                ]"
                multiple
              />
            </v-col>

            <v-col cols="12">
              <v-card-title class="pl-5 text-blue-accent-2">
                # Breadcrumbs
              </v-card-title>
            </v-col>

            <v-col cols="4">
              <v-card-text>Basic</v-card-text>

              <v-breadcrumbs :items="items">
                <template #title="{ item }">
                  {{ item.title.toUpperCase() }}
                </template>
              </v-breadcrumbs>
            </v-col>

            <v-col cols="4">
              <v-card-text>Divider</v-card-text>

              <v-breadcrumbs :items="items" divider="-" />

              <v-breadcrumbs :items="items" divider="." />
            </v-col>
            <v-col cols="4">
              <v-card-text>Custom</v-card-text>

              <v-breadcrumbs :items="items">
                <template #divider>
                  <v-icon icon="mdi-chevron-right" />
                </template>
                <template #title="{ item }">
                  {{ item.title.toUpperCase() }}
                </template>
              </v-breadcrumbs>
            </v-col>

            <v-col cols="12">
              <v-card-title class="pl-5 text-blue-accent-2">
                # Paging
              </v-card-title>
            </v-col>
            <v-col cols="4">
              <v-pagination v-model="page" :length="4" rounded="circle" />
            </v-col>
            <v-col cols="4">
              <v-pagination v-model="page" :length="4" rounded="0" />
            </v-col>
            <v-col cols="4">
              <v-pagination
                v-model="page"
                :length="4"
                prev-icon="mdi-menu-left"
                next-icon="mdi-menu-right"
              />
            </v-col>
            <v-col cols="6">
              <v-container class="max-width">
                <v-pagination v-model="page" class="my-4" :length="15" />
              </v-container>
            </v-col>

            <v-col cols="12">
              <v-card-title class="pl-5 text-blue-accent-2">
                # Parallax
              </v-card-title>
            </v-col>

            <v-col cols="12">
              <v-parallax
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
              >
                <div
                  class="d-flex flex-column fill-height justify-center align-center text-white"
                >
                  <h1 class="text-h4 font-weight-thin mb-4">Vuetify</h1>
                  <h4 class="subheading">Build your application today!</h4>
                </div>
              </v-parallax>
            </v-col>
            <!-- parallax 영역 종료 -->
          </v-row>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup: function () {
    const items = ref([
      {
        title: 'Dashboard',
        disabled: false,
        href: 'breadcrumbs_dashboard'
      },
      {
        title: 'Link 1',
        disabled: false,
        href: 'breadcrumbs_link_1'
      },
      {
        title: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2'
      }
    ])

    const page = ref(1)

    return { items, page }
  }
})
</script>
<style scoped></style>
