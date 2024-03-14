<template>
  <v-layout>
    <v-dialog v-model="isConfirmAlert" persistent width="500">
      <v-alert
        v-model="isConfirmAlert"
        :title="alertTitle"
        :icon="alertTitleIcon"
      >
        <div class="pt-4">{{ alertText }}</div>

        <div class="d-flex justify-end pt-8 ga-2">
          <v-btn
            class="me-2 text-none"
            color="success"
            variant="outlined"
            prepend-icon="mdi-check"
            width="120"
            @click="closeAlert()"
          >
            CLOSE
          </v-btn>

          <v-btn
            class="me-2 text-none"
            color="primary"
            variant="outlined"
            prepend-icon="mdi-check"
            width="120"
            @click="save"
          >
            SAVE
          </v-btn>
        </div>
      </v-alert>
    </v-dialog>
  </v-layout>
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue'
import { mainStore } from '@/stores/main'

interface ConfirmAlertOption {
  text: string
  title?: string
  icon?: string
  fnc?: any
}

const main = mainStore()
const isConfirmAlert = computed(() => main.isConfirmAlert)
const alertOption = computed(() => main.confirmAlertOption)

const alertTitle = ref<string>('')
const alertText = ref<string>('')
const alertTitleIcon = ref<string>('')

// 컨펌 얼럿 레이아웃 셋팅. 타이틀, 텍스트, 아이콘을 커스터마이징 할 수 있다.
const setAlert = (value: ConfirmAlertOption) => {
  alertTitle.value = value.title !== undefined ? value.title : 'Confrim'
  alertText.value = value.text
  alertTitleIcon.value =
    value.icon !== undefined ? value.icon : 'mdi-alert-circle-outline'
}

// 창을 닫는다.
const closeAlert = () => {
  main.isConfirmAlert = false
}

// 저장 이벤트. 창을 닫고 상위 컴퍼넌트에서 전달한 메서드를 실행한다.
const save = () => {
  main.isConfirmAlert = false
  main.confirmAlertOption.fnc()
}

watch(
  () => alertOption.value,
  (newValue) => {
    setAlert(newValue)
  }
)

onMounted(() => {
  main.isConfirmAlert = false
})
</script>

<style scoped></style>
