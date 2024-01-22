<template>
  <v-row justify="center">
    <v-col cols="12">
      <div class="content-sub-title"># 1.TITLE</div>

      <v-breadcrumbs :items="items">
        <template #title="{ item }">
          {{ item.title.toUpperCase() }}
        </template>
      </v-breadcrumbs>
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-layout>
          <v-navigation-drawer
            v-model="drawer"
            :rail="rail"
            permanent
            @click="rail = false"
          >
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
              title="John Leider"
              nav
            >
              <template #append>
                <v-btn
                  variant="text"
                  icon="mdi-chevron-left"
                  @click.stop="rail = !rail"
                />
              </template>
            </v-list-item>

            <v-divider />

            <v-list density="compact" nav>
              <v-list-item
                prepend-icon="mdi-home-city"
                title="Home"
                value="home"
              />
              <v-list-item
                prepend-icon="mdi-account"
                title="My Account"
                value="account"
              />
              <v-list-item
                prepend-icon="mdi-account-group-outline"
                title="Users"
                value="users"
              />
            </v-list>
          </v-navigation-drawer>
          <v-main style="height: 250px" />
        </v-layout>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-layout>
          <v-navigation-drawer
            class="bg-deep-purple"
            theme="dark"
            location="right"
            permanent
          >
            <v-list color="transparent">
              <v-list-item
                prepend-icon="mdi-view-dashboard"
                title="Dashboard"
              />
              <v-list-item prepend-icon="mdi-account-box" title="Account" />
              <v-list-item prepend-icon="mdi-gavel" title="Admin" />
            </v-list>

            <template #append>
              <div class="pa-2">
                <v-btn block> Logout </v-btn>
              </div>
            </template>
          </v-navigation-drawer>
          <v-main style="height: 400px" />
        </v-layout>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'EtcComp2',
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

    const drawer = ref(true)
    const rail = ref(true)

    return { items, drawer, rail }
  }
})
</script>
<style scoped></style>
