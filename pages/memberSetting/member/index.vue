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
                <v-btn color="primary" variant="text" @click="getMember()">
                  SEARCH
                </v-btn>

                <v-btn color="success" variant="text" @click="addMember()">
                  ADD
                </v-btn>
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
      </v-row>
    </v-card-item>
  </v-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { memberStore } from '@/stores/member'
import GridListComp from '@/components/GridListComp.vue'
import { ColumnDefs, GridRef } from '~/components/class/Grid'
import FloatLabel from 'primevue/floatlabel'

// todo 화면 전환 후 이전 기록이 남아 있는채로 이동해야 한다.
const router = useRouter()
const member = memberStore()

const rowData = ref([])
const columnDefs = ref([
  new ColumnDefs('No', 'no', 'number', { width: 120 }),
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
    valueFormatter: (params: string) => {
      // prettier-ignore
      return `(${params.value.substring(0, 3)}) ${params.value.substring(3, 7)}-${params.value.substring(7)}`
    }
  }),
  new ColumnDefs('Email', 'email', 'text', { flex: 1 })
])

const gridRef = ref(
  new GridRef(true, true, false, true, true, { clickField: ['loginId'] })
)

const loginId = ref<string | null>('')
const name = ref<string | null>('')

// 사용자 조회
const getMember = async (): Promise<void> => {
  member.getMembers()
  rowData.value = member.members
}

const addMember = () => {
  console.log('add')
}

onMounted(() => {
  getMember()
})

const cellClickData = (cellValue: any) => {
  router.push(`/memberSetting/member/${cellValue[0].id}`)
}
</script>

<style scoped></style>
