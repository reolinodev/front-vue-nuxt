<template>
  <v-row justify="center">
    <v-col cols="12">
      <div class="content-sub-title"># 1.일반</div>
      <v-card class="mx-auto" max-width="300">
        <v-list :items="items" />
      </v-card>
    </v-col>
    <v-col cols="12">
      <div class="content-sub-title"># 2.그룹</div>
      <v-card class="mx-auto" max-width="300">
        <v-list :items="items2" />
      </v-card>
    </v-col>
    <v-col cols="12">
      <div class="content-sub-title"># 3.아이콘</div>
      <v-card class="mx-auto" max-width="300">
        <v-list :items="items3" />
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-list disabled>
        <div class="content-sub-title"># 4.disable</div>

        <v-list-subheader>REPORTS</v-list-subheader>

        <v-list-item v-for="(item, i) in items4" :key="i">
          <template #prepend>
            <v-icon :icon="item.icon" />
          </template>

          <v-list-item-title v-text="item.text" />
        </v-list-item>
      </v-list>
    </v-col>
    <v-col cols="12">
      <div class="content-sub-title"># 5.nav</div>

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
                  <v-btn size="small" variant="text" icon="mdi-menu-down" />
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
      <v-card class="mx-auto" width="300">
        <v-list v-model:opened="open">
          <v-list-item prepend-icon="mdi-home" title="Home" />

          <v-list-group value="Users">
            <template #activator="{ props }">
              <v-list-item
                v-bind="props"
                prepend-icon="mdi-account-circle"
                title="Users"
              />
            </template>

            <v-list-group value="Admin">
              <template #activator="{ props }">
                <v-list-item v-bind="props" title="Admin" />
              </template>

              <v-list-item
                v-for="([title, icon], i) in admins"
                :key="i"
                :title="title"
                :prepend-icon="icon"
                :value="title"
              />
            </v-list-group>

            <v-list-group value="Actions">
              <template #activator="{ props }">
                <v-list-item v-bind="props" title="Actions" />
              </template>

              <v-list-item
                v-for="([title, icon], i) in cruds"
                :key="i"
                :value="title"
                :title="title"
                :prepend-icon="icon"
              />
            </v-list-group>
          </v-list-group>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ListComp',
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

    return { items, items2, items3, items4, items5, open, admins, cruds }
  }
})
</script>

<style scoped></style>
