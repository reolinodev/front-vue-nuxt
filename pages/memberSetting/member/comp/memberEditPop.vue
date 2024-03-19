<template>
  <popup-comp
    :popup-open="memberEditPop"
    :popup-title="`Member Edit`"
    :popup-width="`600`"
    :popup-type="`edit`"
    @call-back-popup="callBackPopup"
    @call-back-save="saveConfirm"
  >
    <v-row justify="center">
      <v-col cols="12">
        <v-text-field
          v-model="loginId"
          label="Login Id *"
          disabled
        />
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="userNm"
          :error-messages="errors.userNm"
          label="Name *"
        />
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="mobileNo"
          :error-messages="errors.mobileNo"
          label="Mobile No *"
        />
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="email"
          :error-messages="errors.email"
          label="Email *"
        />
      </v-col>
      <v-col cols="12">
        <input-select-box-comp :items="useYnItems" :selected-value="useYn" />
      </v-col>
    </v-row>
  </popup-comp>
</template>

<script setup lang='ts'>
import { onMounted, ref, watch } from 'vue'
import InputSelectBoxComp from '@/components/InputSelectBoxComp.vue'
import { mainStore } from '@/stores/main'

interface Member {
  id: string
  loginId: string
  userNm: string
  mobileNo: string
  email: string
  useYn: string
  useYnLabel: string
}

const emits = defineEmits(['callBackMemberEditPopup', 'callBackMemberEditSave'])
const props = defineProps<{
  memberEditPop: boolean
  memberEditData: Member
}>()

const main = mainStore()

const memberEditPop = ref<boolean>(<boolean>props.memberEditPop)

const id = ref<string>('')
const loginId = ref<string>('')
const userNm = ref<string>('')
const email = ref<string>('')
const mobileNo = ref<string>('')
const useYn = ref<string>('')
const errors = ref({})

const useYnData = ref([
  { label: '사용', value: 'Y' },
  { label: '미사용', value: 'N' }
])

const useYnItems = ref({
  data: useYnData,
  option: {
    label: 'Use *'
  }
})

const setMemberEditData = (value:Member) => {
  id.value = value.id
  loginId.value = value.loginId
  userNm.value = value.userNm
  email.value = value.email
  mobileNo.value = value.mobileNo
  useYn.value = value.useYn

}

const callBackPopup = (val:boolean) => {
  emits('callBackMemberEditPopup', val)
}

const saveConfirm = () => {
  main.confirmAlertOption = {
    text: '저장 하시겠습니까?',
    fnc: save
  }
  main.isConfirmAlert = true
}

const save = () => {
  if (validation()) {
    const data = {
      id: id.value,
      loginId: loginId.value,
      userNm: userNm.value,
      email: email.value,
      mobileNo: mobileNo.value,
      useYn: useYn.value,
    }

    console.log('data', data)

    main.isLoading = true

    setTimeout(() => {
      main.isLoading = false

      main.alertOption = {
        title: 'Success',
        text: '정상적으로 수정 되었습니다.'
      }
      main.isAlert = true

      emits('callBackMemberEditSave')
      emits('callBackMemberEditPopup', false)
    }, 2000)

  } else {
    main.alertOption = {
      title: 'Warning',
      text: '입력하신 내용을 확인해주세요.'
    }
    main.isAlert = true
  }
}

const validation = (): boolean => {
  const error = {}
  let chk = true

  if (userNm.value === '') {
    error.userNm = 'Please enter the your name'
    chk = false
  }

  if (email.value === '') {
    error.email = 'Please enter the your email'
    chk = false
  }


  if (mobileNo.value === '') {
    error.mobileNo = 'Please enter the your mobile nunmber'
    chk = false
  }

  errors.value = error

  return chk
}

watch(
  () => props.memberEditPop,
  (newValue) => {
    memberEditPop.value = newValue
  }
)

watch(
  () => props.memberEditData,
  (newValue) => {
    setMemberEditData(newValue)
  }
)

onMounted(() => {

})

</script>

<style scoped></style>
