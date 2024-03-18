<template>
  <v-card min-height="900">
    <v-card-item width="100%">
      <v-row class="ma-auto">
        <v-col cols="12" class="d-flex justify-end ga-2">
          <v-btn color="success" variant="flat" @click="addMember()">
            ADD
          </v-btn>
          <v-btn color="error" variant="flat" @click="delMember()"> DEL </v-btn>
          <v-btn color="primary" variant="flat" @click="confirmSaveMember()">
            SAVE
          </v-btn>
          <v-btn color="warning" variant="flat" @click="confirmMoveBack()">
            BACK
          </v-btn>
        </v-col>
        <v-col cols="12">
          <grid-list-comp
            ref="memberRef"
            :column-defs="memberColumnDefs"
            :row-data="memberData"
            :grid-ref="memberGridRef"
          />
        </v-col>
      </v-row>
    </v-card-item>
  </v-card>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import GridListComp from '~/components/GridListComp.vue'
import { mainStore } from '~/stores/main'
import { ColumnDefs, GridRef, GridValidOption } from '~/components/class/Grid'
import { useRouter } from 'vue-router'
import { gridValidation } from '~/utils/gridUtil'

const router = useRouter()
const main = mainStore()

const memberRef = ref({})
const memberData = ref<any[]>([])
const memberColumnDefs = ref([
  new ColumnDefs('Login Id *', 'loginId', 'text', {
    flex: 1,
    editable: true
  }),
  new ColumnDefs('Name *', 'userNm', 'text', { flex: 1, editable: true }),
  new ColumnDefs('Mobile No *', 'mobileNo', 'text', {
    flex: 1,
    editable: true
  }),
  new ColumnDefs('Email *', 'email', 'text', { flex: 1, editable: true })
])
const memberGridRef = ref(
  new GridRef(false, false, false, false, false, { height: 700 })
)

const addMember = () => {
  const newItems = [
    {
      loginId: '',
      userNm: '',
      mobileNo: '',
      email: ''
    }
  ]
  memberRef.value.addRow(newItems)
}

const delMember = () => {
  memberRef.value.delRow()
}

const confirmSaveMember = () => {
  main.confirmAlertOption = {
    text: '저장 하시겠습니까?',
    fnc: saveMember
  }
  main.isConfirmAlert = true
}

const saveMember = async (): Promise<void> => {
  const member = memberRef.value.saveRow()
  console.log('save', member)

  if (member.length === 0) {
    main.alertOption = {
      title: 'Warning',
      text: '저장할 항목이 존재하지 않습니다.'
    }
    main.isAlert = true
  } else if (validation(member)) {
    main.isLoading = true

    setTimeout(() => {
      main.isLoading = false

      main.alertOption = {
        title: 'Success',
        text: '정상적으로 저장 되었습니다.'
      }
      main.isAlert = true
      moveBack()
    }, 2000)
  }
}

const validation = (value: any) => {
  const filters = [
    new GridValidOption('Login Id', 'loginId', 'NULL|DUP'),
    new GridValidOption('Name', 'userNm', 'NULL'),
    new GridValidOption('Mobile No', 'mobileNo', 'NULL|DUP'),
    new GridValidOption('Email', 'email', 'NULL|DUP')
  ]

  return gridValidation(value, filters)
}

const confirmMoveBack = () => {
  main.confirmAlertOption = {
    text: '이전 화면으로 이동 하시겠습니까?',
    fnc: moveBack
  }
  main.isConfirmAlert = true
}

const moveBack = () => {
  router.push('/memberSetting/member')
}
onMounted(() => {})
</script>

<style scoped></style>

<style scoped></style>
