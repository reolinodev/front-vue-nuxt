<template>
  <v-row class="pt-5 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%">
          <v-row class="ma-auto">
            <!-- 리스트 영역 시작 -->
            <v-col cols="12">
              <v-card-title class="pl-5 text-blue-accent-2">
                # List
              </v-card-title>
            </v-col>
            <v-col cols="4">
              <v-card-text>Basic</v-card-text>

              <v-card class="mx-auto" max-width="300">
                <v-list :items="items" />
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card-text>Group</v-card-text>
              <v-card class="mx-auto" max-width="300">
                <v-list :items="items2" />
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card-text>Icon</v-card-text>
              <v-card class="mx-auto" max-width="300">
                <v-list :items="items3" />
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card-text>disable</v-card-text>

              <v-list disabled>
                <v-list-subheader>REPORTS</v-list-subheader>

                <v-list-item v-for="(item, i) in items4" :key="i">
                  <template #prepend>
                    <v-icon :icon="item.icon" />
                  </template>

                  <v-list-item-title v-text="item.text" />
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="4">
              <v-card-text>Navigation</v-card-text>

              <v-card class="mx-auto" width="256">
                <v-layout>
                  <v-navigation-drawer permanent absolute>
                    <v-list>
                      <v-list-item
                        prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
                        title="John Leider"
                        subtitle="john@google.com"
                      >
                        <template #append>
                          <v-btn
                            size="small"
                            variant="text"
                            icon="mdi-menu-down"
                          />
                        </template>
                      </v-list-item>
                    </v-list>

                    <v-divider />

                    <v-list :lines="false" density="compact" nav>
                      <v-list-item
                        v-for="(item, i) in items5"
                        :key="i"
                        :value="item"
                        color="primary"
                      >
                        <template #prepend>
                          <v-icon :icon="item.icon" />
                        </template>

                        <v-list-item-title v-text="item.text" />
                      </v-list-item>
                    </v-list>
                  </v-navigation-drawer>

                  <v-main style="height: 354px" />
                </v-layout>
              </v-card>
            </v-col>

            <v-col cols="12">
              <v-card-title class="pl-5 text-blue-accent-2">
                # Expansion panels
              </v-card-title>
            </v-col>
            <v-col cols="3">
              <v-card-text>Basic</v-card-text>
              <v-expansion-panels>
                <v-expansion-panel
                  v-for="i in 3"
                  :key="i"
                  title="Item"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
              </v-expansion-panels>
            </v-col>
            <v-col cols="3">
              <v-card-text>Accordion</v-card-text>
              <v-expansion-panels variant="accordion">
                <v-expansion-panel
                  v-for="i in 3"
                  :key="i"
                  title="Item"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
              </v-expansion-panels>
            </v-col>
            <v-col cols="3">
              <v-card-text>Inset</v-card-text>

              <v-expansion-panels variant="inset" class="my-4">
                <v-expansion-panel
                  v-for="i in 3"
                  :key="i"
                  title="Item"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
              </v-expansion-panels>
            </v-col>
            <v-col cols="3">
              <v-card-text>Popout</v-card-text>

              <v-expansion-panels variant="popout" class="my-4">
                <v-expansion-panel
                  v-for="i in 3"
                  :key="i"
                  title="Item"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
              </v-expansion-panels>
            </v-col>

            <v-col cols="12">
              <v-card-title class="pl-5 text-blue-accent-2">
                # Banner
              </v-card-title>
            </v-col>
            <v-col cols="12" class="d-flex justify-lg-start ga-10">
              <v-banner
                lines="one"
                icon="mdi-lock"
                color="deep-purple-accent-4"
                class="my-4"
              >
                <v-banner-text> Banner with one line of text. </v-banner-text>

                <template #actions>
                  <v-btn>Action</v-btn>
                </template>
              </v-banner>

              <v-banner
                lines="two"
                icon="mdi-wifi-strength-alert-outline"
                color="warning"
              >
                <template #text> No Internet connection </template>

                <template #actions>
                  <v-btn> Dismiss </v-btn>

                  <v-btn> Retry </v-btn>
                </template>
              </v-banner>

              <v-banner lines="three" color="deep-purple-accent-4">
                <template #prepend>
                  <v-avatar
                    color="deep-purple-accent-4"
                    icon="mdi-account-filter"
                  />
                </template>

                <v-banner-text>
                  Banner with two lines of text. If the text is too long to fit
                  on two lines then an ellipsis will be used to hide the
                  remaining content. So this next line will be hidden.
                </v-banner-text>

                <v-banner-actions>
                  <v-btn>Action</v-btn>

                  <v-btn>Action</v-btn>
                </v-banner-actions>
              </v-banner>
            </v-col>
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
        title: 'Item #1',
        value: 1
      },
      {
        title: 'Item #2',
        value: 2
      },
      {
        title: 'Item #3',
        value: 3
      }
    ])

    const items2 = ref([
      { type: 'subheader', title: 'Group #1' },
      {
        title: 'Item #1',
        value: 1
      },
      {
        title: 'Item #2',
        value: 2
      },
      {
        title: 'Item #3',
        value: 3
      },
      { type: 'divider' },
      { type: 'subheader', title: 'Group #2' },
      {
        title: 'Item #4',
        value: 4
      },
      {
        title: 'Item #5',
        value: 5
      },
      {
        title: 'Item #6',
        value: 6
      }
    ])

    const items3 = ref([
      {
        title: 'Item #1',
        value: 1,
        props: {
          prependIcon: 'mdi-home'
        }
      },
      {
        title: 'Item #2',
        value: 2,
        props: {
          appendIcon: 'mdi-close'
        }
      },
      {
        title: 'Item #3',
        value: 3,
        props: {
          color: 'primary'
        }
      }
    ])

    const items4 = ref([
      { text: 'Real-Time', icon: 'mdi-clock' },
      { text: 'Audience', icon: 'mdi-account' },
      { text: 'Conversions', icon: 'mdi-flag' }
    ])

    const items5 = ref([
      { text: 'My Files', icon: 'mdi-folder' },
      { text: 'Shared with me', icon: 'mdi-account-multiple' },
      { text: 'Starred', icon: 'mdi-star' },
      { text: 'Recent', icon: 'mdi-history' },
      { text: 'Offline', icon: 'mdi-check-circle' },
      { text: 'Uploads', icon: 'mdi-upload' },
      { text: 'Backups', icon: 'mdi-cloud-upload' }
    ])

    const open = ref(['Users'])
    const admins = ref([
      ['Management', 'mdi-account-multiple-outline'],
      ['Settings', 'mdi-cog-outline']
    ])
    const cruds = ref([
      ['Create', 'mdi-plus-outline'],
      ['Read', 'mdi-file-outline'],
      ['Update', 'mdi-update'],
      ['Delete', 'mdi-delete']
    ])

    const step = ref<number>(1)

    return {
      items,
      items2,
      items3,
      items4,
      items5,
      open,
      admins,
      cruds,
      step
    }
  }
})
</script>

<style scoped></style>
