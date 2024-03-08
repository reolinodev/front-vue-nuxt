<template>
  <v-dialog v-model="popupOpen" persistent :width="popupWidth">
    <v-card>
      <v-toolbar flat color="indigo" dark>
        <v-btn icon @click="closePopup">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>{{ popupTitle }}</v-toolbar-title>
      </v-toolbar>

      <v-card-text>
        <slot />
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-btn color="error" @click="closePopup"> close </v-btn>
        <v-spacer />
        <v-btn v-if="popupType === 'save'" color="primary" @click="saveEvent">
          save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  popupOpen: boolean
  popupTitle: string
  popupWidth: string
  popupType: string
}>()

const emits = defineEmits(['callBackPopup', 'callBackSave'])

const popupOpen = ref<boolean>(props.popupOpen)
const popupTitle = ref<string>(props.popupTitle)
const popupWidth = ref<string>(props.popupWidth)
const popupType = ref<string>(props.popupType)

const closePopup = () => {
  popupOpen.value = false
  emits('callBackPopup', false)
}

const saveEvent = () => {
  emits('callBackSave')
}

watch(
  () => props.popupOpen,
  (newValue) => {
    popupOpen.value = newValue
  }
)

watch(
  () => props.popupTitle,
  (newValue) => {
    popupTitle.value = newValue
  }
)

watch(
  () => props.popupWidth,
  (newValue) => {
    popupWidth.value = newValue
  }
)

watch(
  () => props.popupType,
  (newValue) => {
    popupType.value = newValue
  }
)
</script>

<style scoped></style>
