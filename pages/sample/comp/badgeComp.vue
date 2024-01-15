<template>
  <v-sheet width="`100%`" class="mx-auto">
    <v-row>
      <v-col cols="12">
        <div class="content-sub-title"># 1.dot</div>
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
      <v-col cols="12">
        <div class="content-sub-title"># 2.inline</div>
        <v-list border class="mx-auto" max-width="256">
          <v-list-item link prepend-icon="mdi-inbox-arrow-down" title="Inbox">
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

          <v-list-item link prepend-icon="mdi-alert-circle" title="Spam" />
        </v-list>
      </v-col>
      <v-col cols="12">
        <div class="content-sub-title"># 3.content</div>
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
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'BadgeComp',
  setup: function () {
    const step = ref<number>(1)
    return { step }
  }
})
</script>

<style scoped></style>
