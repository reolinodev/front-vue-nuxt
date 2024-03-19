<template>
  <v-layout>
    <v-dialog v-model="isAlert" persistent width="500">
      <v-alert v-model="isAlert" :title="alertTitle" :icon="alertTitleIcon">
        <div class="pt-4">{{ alertText }}</div>

        <div class="d-flex justify-end pt-8 ga-2">
          <v-btn
            class="me-2 text-none"
            color="error"
            variant="outlined"
            prepend-icon="mdi-close-thick"
            width="120"
            @click="closeAlert()"
          >
            CLOSE
          </v-btn>
        </div>
      </v-alert>
    </v-dialog>
  </v-layout>
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue'
import { mainStore } from '@/stores/main'

interface AlertOption {
  text: string
  title?: string
  icon?: string
}

const main = mainStore()
const isAlert = computed(() => main.isAlert)
const alertOption = computed(() => main.alertOption)

const alertTitle = ref<string>('')
const alertText = ref<string>('')
const alertTitleIcon = ref<string>('')

// 얼럿 레이아웃 셋팅. 타이틀, 텍스트, 아이콘을 커스터마이징 할 수 있다.
const setAlert = (value: AlertOption) => {
  alertTitle.value = value.title !== undefined ? value.title : 'Notice'
  alertText.value = value.text
  alertTitleIcon.value =
    value.icon !== undefined ? value.icon : 'mdi-check-circle'
}

// 창을 닫는다.
const closeAlert = () => {
  main.isAlert = false
}

watch(
  () => alertOption.value,
  (newValue) => {
    setAlert(newValue)
  }
)

onMounted(() => {
  main.isAlert = false
})
</script>

<style scoped></style>
