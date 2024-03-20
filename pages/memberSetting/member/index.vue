<template>
  <v-card min-height="900">
    <v-card-item width="100%">
      <v-row class="ma-auto">
        <v-col cols="12">
          <v-row class="ma-auto">
            <v-col cols="12" class="d-flex" style="height: 80px">
              <v-col cols="8" class="d-flex ga-2">
                <FloatLabel>
                  <InputText
                    id="username"
                    v-model="loginId"
                    class="search-input"
                  />
                  <label for="username">ID</label>
                </FloatLabel>
                <FloatLabel>
                  <InputText
                    id="username"
                    v-model="name"
                    class="search-input"
                  />
                  <label for="username">Name</label>
                </FloatLabel>
              </v-col>
              <v-col cols="4" class="d-flex justify-end ga-2">
                <v-btn color="primary" @click="getMember()"> SEARCH </v-btn>

                <v-btn color="success" @click="addMember()"> ADD </v-btn>
              </v-col>
            </v-col>
          </v-row>

          <v-divider class="border-opacity-75 pt-0" color="#ffffff" />

          <grid-list-comp
            :column-defs="columnDefs"
            :row-data="rowData"
            :grid-ref="gridRef"
            @cell-click-data="cellClickData"
          />
        </v-col>
        <member-edit-pop
          :member-edit-pop="memberEditPop"
          :member-edit-data="memberEditData"
          @call-back-member-edit-popup="handleMemberEditPopup"
          @call-back-member-edit-save="handleMemberEditSave"
        />
      </v-row>
    </v-card-item>
  </v-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Member, memberStore } from '@/stores/member'
import FloatLabel from 'primevue/floatlabel'
import { ColumnDefs, GridRef } from '~/components/class/Grid'
import GridListComp from '@/components/GridListComp.vue'
import MemberEditPop from '@/pages/memberSetting/member/comp/memberEditPop.vue'

const router = useRouter()
const member = memberStore()

const rowData = ref<any>([])
const columnDefs = ref<ColumnDefs[]>([
  new ColumnDefs('No', 'no', 'number', { width: '120' }),
  new ColumnDefs('ID', 'id', 'text', { flex: 1, hide: true }),
  new ColumnDefs('Login Id', 'loginId', 'text', {
    flex: 1,
    cellStyle: {
      'text-decoration': 'underline',
      color: '#2196f3'
    }
  }),
  new ColumnDefs('Name', 'userNm', 'text', { flex: 1 }),
  new ColumnDefs('Mobile No', 'mobileNo', 'text', {
    flex: 1,
    valueFormatter: (params: any) => {
      // prettier-ignore
      return `(${params.value.substring(0, 3)}) ${params.value.substring(3, 7)}-${params.value.substring(7)}`
    }
  }),
  new ColumnDefs('Email', 'email', 'text', { flex: 1 }),
  new ColumnDefs('Use', 'useYn', 'text', { flex: 1, hide: true }),
  new ColumnDefs('Use', 'useYnLabel', 'text', { flex: 1 })
])

const gridRef = ref<GridRef>(
  new GridRef(true, true, false, true, true, { clickField: ['loginId'] })
)

const loginId = ref<string>('')
const name = ref<string>('')
const memberEditPop = ref<boolean>(false)
const memberEditData = ref<Member>({
  id: '',
  loginId: '',
  userNm: '',
  mobileNo: '',
  email: '',
  useYn: '',
  useYnLabel: ''
})

// 사용자 조회
const getMember = async (): Promise<void> => {
  member.getMembers()
  rowData.value = member.members
}

const addMember = () => {
  router.push('/memberSetting/member/write')
}

const handleMemberEditSave = () => {
  member.getMembers()
}

const handleMemberEditPopup = (value: boolean) => {
  memberEditPop.value = value
}

onMounted(() => {
  getMember()
})

const cellClickData = (cellValue: any) => {
  const cellData = cellValue[0]
  memberEditData.value = {
    id: cellData.id,
    loginId: cellData.loginId,
    userNm: cellData.userNm,
    mobileNo: cellData.mobileNo,
    email: cellData.email,
    useYn: cellData.useYn,
    useYnLabel: cellData.useYnLabel
  }
  memberEditPop.value = true
}
</script>

<style scoped></style>
