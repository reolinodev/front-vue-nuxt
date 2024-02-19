<template>
  <v-row class="pt-5 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%">
          <v-row class="ma-auto">
            <v-col cols="12">
              <v-card-title class="pl-5 pb-3 text-blue-accent-2">
                # Divider
              </v-card-title>
              <v-divider class="border-opacity-75" color="warning" />
            </v-col>

            <v-col cols="12">
              <v-card-title class="pl-5 text-blue-accent-2">
                # Badge
              </v-card-title>
            </v-col>

            <v-col cols="4">
              <v-card-text>Dot</v-card-text>
              <v-toolbar title="Application" color="grey-lighten-3">
                <v-btn stacked>
                  <v-badge color="error" dot>
                    <v-icon icon="mdi-newspaper-variant-outline" />
                  </v-badge>
                  News
                </v-btn>

                <v-btn stacked>
                  <v-badge dot color="error">
                    <v-icon icon="mdi-post" />
                  </v-badge>
                  Blog
                </v-btn>

                <v-btn stacked variant="tonal">
                  <v-icon icon="mdi-login" />
                  Login
                </v-btn>
              </v-toolbar>
            </v-col>

            <v-col cols="4">
              <v-card-text>Inline</v-card-text>

              <v-list border class="mx-auto" max-width="256">
                <v-list-item
                  link
                  prepend-icon="mdi-inbox-arrow-down"
                  title="Inbox"
                >
                  <template #append>
                    <v-badge color="error" content="6" inline />
                  </template>
                </v-list-item>

                <v-list-item link prepend-icon="mdi-send" title="Sent Mail" />

                <v-list-item link prepend-icon="mdi-delete" title="Trash">
                  <template #append>
                    <v-badge color="info" content="12" inline />
                  </template>
                </v-list-item>

                <v-list-item
                  link
                  prepend-icon="mdi-alert-circle"
                  title="Spam"
                />
              </v-list>
            </v-col>

            <v-col cols="4">
              <v-card-text>Content</v-card-text>

              <v-toolbar color="blue-grey-darken-3">
                <v-spacer />

                <v-btn class="text-none" stacked>
                  <v-badge dot color="success">
                    <v-icon>mdi-home-outline</v-icon>
                  </v-badge>
                </v-btn>

                <v-btn class="text-none" stacked>
                  <v-icon>mdi-account-multiple-outline</v-icon>
                </v-btn>

                <v-btn class="text-none" stacked>
                  <v-badge content="9+" color="error">
                    <v-icon>mdi-store-outline</v-icon>
                  </v-badge>
                </v-btn>

                <v-btn class="text-none" stacked>
                  <v-badge content="2" color="error">
                    <v-icon>mdi-bell-outline</v-icon>
                  </v-badge>
                </v-btn>

                <v-btn class="text-none" stacked>
                  <v-icon>mdi-menu</v-icon>
                </v-btn>

                <v-spacer />
              </v-toolbar>
            </v-col>

            <v-col cols="12">
              <v-card-title class="pl-5 text-blue-accent-2">
                # Toolbar
              </v-card-title>
            </v-col>
            <v-col cols="12">
              <v-toolbar
                dark
                prominent
                image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
              >
                <v-app-bar-nav-icon />

                <v-toolbar-title>Vuetify</v-toolbar-title>

                <v-spacer />

                <v-btn icon>
                  <v-icon>mdi-export</v-icon>
                </v-btn>
              </v-toolbar>
            </v-col>

            <v-col cols="12">
              <v-card-title class="pl-5 text-blue-accent-2">
                # Menu
              </v-card-title>
            </v-col>
            <v-col cols="3">
              <v-card-text>Open on hover</v-card-text>

              <v-menu open-on-hover>
                <template #activator="{ props }">
                  <v-btn color="primary" v-bind="props"> Dropdown </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>
            <v-col cols="3">
              <v-card-text>Transition default</v-card-text>

              <v-menu transition="scale-transition">
                <template #activator="{ props }">
                  <v-btn color="primary" v-bind="props">
                    Scale Transition
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>
            <v-col cols="3">
              <v-card-text>Transition y</v-card-text>

              <v-menu transition="slide-y-transition">
                <template #activator="{ props }">
                  <v-btn color="primary" v-bind="props">
                    Slide Y Transition
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>

            <v-col cols="3">
              <v-card-text>popover menu</v-card-text>

              <v-menu
                v-model="menu"
                :close-on-content-click="false"
                location="end"
              >
                <template #activator="{ props }">
                  <v-btn color="indigo" v-bind="props"> Menu as Popover </v-btn>
                </template>

                <v-card min-width="300">
                  <v-list>
                    <v-list-item
                      prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
                      title="John Leider"
                      subtitle="Founder of Vuetify"
                    >
                      <template #append>
                        <v-btn
                          variant="text"
                          :class="fav ? 'text-red' : ''"
                          icon="mdi-heart"
                          @click="fav = !fav"
                        />
                      </template>
                    </v-list-item>
                  </v-list>

                  <v-divider />

                  <v-list>
                    <v-list-item>
                      <v-switch
                        v-model="message"
                        color="purple"
                        label="Enable messages"
                        hide-details
                      />
                    </v-list-item>

                    <v-list-item>
                      <v-switch
                        v-model="hints"
                        color="purple"
                        label="Enable hints"
                        hide-details
                      />
                    </v-list-item>
                  </v-list>

                  <v-card-actions>
                    <v-spacer />

                    <v-btn variant="text" @click="menu = false"> Cancel </v-btn>
                    <v-btn color="primary" variant="text" @click="menu = false">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-menu>
            </v-col>

            <v-col cols="12">
              <v-card-title class="pl-5 text-blue-accent-2">
                # Scroll
              </v-card-title>
            </v-col>
            <v-col cols="6">
              <v-card-text>Inline Scroll</v-card-text>

              <v-virtual-scroll :items="scrollItems" height="200">
                <template #default="{ item }">
                  <v-list-item
                    :title="`Employee Name`"
                    :subtitle="`Badge #${item}`"
                  >
                    <template #prepend>
                      <v-icon class="bg-primary">mdi-account</v-icon>
                    </template>

                    <template #append>
                      <v-btn icon="mdi-pencil" size="x-small" variant="tonal" />
                    </template>
                  </v-list-item>
                </template>
              </v-virtual-scroll>
            </v-col>
            <v-col cols="6">
              <v-card-text>Infinite Scroll</v-card-text>

              <v-infinite-scroll height="300" mode="manual" @load="load">
                <template v-for="(item, index) in scrollItems" :key="item">
                  <div
                    :class="[
                      'px-2',
                      index % 2 === 0 ? 'bg-grey-lighten-2' : ''
                    ]"
                  >
                    Item number {{ item }}
                  </div>
                </template>
              </v-infinite-scroll>
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
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' }
    ])

    const fav = ref(true)
    const menu = ref(false)
    const message = ref(false)
    const hints = ref(true)

    const scrollItems = ref(Array.from({ length: 50 }, (k, v) => v + 1))

    const api = async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            Array.from(
              { length: 10 },
              (k, v) => v + scrollItems.value.at(-1) + 1
            )
          )
        }, 1000)
      })
    }

    const load = async ({ done }) => {
      try {
        // Perform API call
        const res = await api()

        // Update the reactive property 'items'
        scrollItems.value.push(...res)

        done('ok')
      } catch (error) {
        console.error('Error:', error)
        done('error') // Handle error state as needed
      }
    }

    return {
      items,
      fav,
      menu,
      hints,
      message,
      scrollItems,
      api,
      load
    }
  }
})
</script>
