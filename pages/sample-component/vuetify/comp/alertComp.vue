<template>
  <v-sheet width="`100%`" class="mx-auto">
    <div class="content-sub-title"># 1.얼럿팝업 형태</div>
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-alert closable title="Alert title" text="ABCDEFG" type="success" />
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-alert closable title="Alert title" text="ABCDEFG" type="info" />
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-alert closable title="Alert title" text="ABCDEFG" type="warning" />
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-alert closable title="Alert title" text="ABCDEFG" type="error" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-alert
          closable
          title="Alert title"
          text="ABCDEFG"
          type="success"
          variant="outlined"
        />
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-alert
          closable
          title="Alert title"
          text="ABCDEFG"
          type="success"
          variant="tonal"
        />
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-alert
          closable
          title="Alert title"
          text="ABCDEFG"
          type="success"
          variant="text"
        />
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-alert
          closable
          title="Alert title"
          text="ABCDEFG"
          type="success"
          variant="plain"
        />
      </v-col>
    </v-row>
    <div class="content-sub-title"># 2.일반얼럿</div>

    <div>
      <v-alert color="purple" variant="outlined">
        <template #title> Outlined Alert </template>

        Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi,
        condimentum viverra felis nunc et lorem. Duis vel nibh at velit
        scelerisque suscipit. Praesent blandit laoreet nibh. Aenean posuere,
        tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna
        dolor sagittis lacus. Etiam sollicitudin, ipsum eu pulvinar rutrum,
        tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros.
      </v-alert>

      <br>

      <v-alert type="success" variant="outlined">
        Praesent venenatis metus at tortor pulvinar varius. Aenean commodo
        ligula eget dolor. Praesent ac massa at ligula laoreet iaculis.
        Vestibulum ullamcorper mauris at ligula.
      </v-alert>

      <br>

      <v-alert variant="outlined" type="warning" prominent border="top">
        Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis,
        ipsum. Suspendisse non nisl sit amet velit hendrerit rutrum. Nullam vel
        sem. Pellentesque dapibus hendrerit tortor.
      </v-alert>

      <br>

      <v-alert
        v-model="alertChk"
        border="start"
        variant="tonal"
        closable
        close-label="Close Alert"
        color="deep-purple-accent-4"
        title="Closable Alert"
      >
        Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque.
        Cras dapibus. Vivamus consectetuer hendrerit lacus. Sed mollis, eros et
        ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna
        a orci. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam
        libero, non adipiscing dolor urna a orci. Curabitur blandit mollis
        lacus. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
        imperdiet, leo.
      </v-alert>

      <div v-if="!alertChk" class="text-center">
        <v-btn @click="alertChk = true"> Reset </v-btn>
      </div>
    </div>

    <br>

    <v-alert border="start" border-color="deep-purple accent-4" elevation="2">
      Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer turpis ut
      velit. Nulla facilisi.. Morbi mollis tellus ac sapien. Fusce vel dui.
      Praesent ut ligula non mi varius sagittis. Vivamus consectetuer hendrerit
      lacus. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
      nisi.
    </v-alert>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'AlertComp',
  setup: function () {
    const alertChk = ref(true)

    return {
      alertChk
    }
  }
})
</script>

<style scoped></style>
