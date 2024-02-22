<template>
  <v-card min-height="900">
    <v-card-item width="100%">
      <v-row class="ma-auto">
        <v-card class="search-bar">
          <v-col cols="2">
            <v-text-field v-model="loginId" label="LOGIN ID" clearable />
          </v-col>
          <v-col cols="2">
            <v-text-field v-model="name" label="Name" clearable />
          </v-col>
          <v-col cols="2">
            <v-text-field v-model="mobileNo" label="Mobile No" clearable />
          </v-col>
          <v-col cols="2">
            <v-text-field v-model="email" label="Email" clearable />
          </v-col>
          <v-col cols="4" class="d-flex justify-end ga-3">
            <v-btn color="primary" size="x-large" variant="outlined">
              Search
              <v-icon end icon="mdi-magnify" />
            </v-btn>

            <NuxtLink to="/memberSetting/member/write">
              <v-btn color="success" size="x-large" variant="outlined">
                Add
                <v-icon end icon="mdi-plus-circle" />
              </v-btn>
            </NuxtLink>
          </v-col>
        </v-card>

        <v-col cols="12">
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

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { memberStore } from '@/stores/member'
import GridListComp from '@/components/GridListComp.vue'

export default defineComponent({
  components: { GridListComp },
  setup: function () {
    const router = useRouter()
    const member = memberStore()
    const rowData = ref([])
    const columnDefs = ref([
      {
        headerName: 'No',
        field: 'no',
        type: 'number',
        width: '80',
        cellStyle: {
          'text-align': 'center'
        }
      },
      { headerName: 'ID', field: 'id', type: 'number', flex: 1, hide: true },
      {
        headerName: 'Login Id',
        field: 'loginId',
        type: 'text',
        flex: 1,
        filter: 'agTextColumnFilter',
        cellStyle: {
          'text-decoration': 'underline',
          color: '#2196f3'
        }
      },
      {
        headerName: 'Name',
        field: 'userNm',
        type: 'text',
        flex: 1,
        filter: 'agTextColumnFilter'
      },
      {
        headerName: 'Mobile No',
        field: 'mobileNo',
        type: 'text',
        flex: 1,
        filter: 'agTextColumnFilter',
        valueFormatter: (params: string) => {
          // prettier-ignore
          return `(${params.value.substring(0, 3)}) ${params.value.substring(3, 7)}-${params.value.substring(7)}`
        }
      },
      {
        headerName: 'Email',
        field: 'email',
        type: 'text',
        flex: 1,
        filter: 'agTextColumnFilter'
      }
    ])

    const isRowSelectable = (params: any) => {
      return params.data.userNm === 'Kim1'
    }

    const defaultColDef = ref({
      filter: false, // 전체필터
      floatingFilter: true // 필터 플롯팅
    })

    const gridRef = ref({
      clickEventUse: true, // 클릭 이벤트 사용
      clickField: ['loginId'], // 클릭 이벤트에 사용할 컬럼
      pagingUse: true, // 페이징 사용여부
      checkBoxUse: false, // 체크박스 사용여부
      isRowSelectable, // 체크박스시 사용가능한 로우 지정
      excelExportUse: true, // 엑셀다운로드 사용여부
      defaultColDef // 필터 옵션
    })

    const loginId = ref<string | null>('')
    const name = ref<string | null>('')
    const mobileNo = ref<string | null>('')
    const email = ref<string | null>('')

    onMounted(() => {
      member.getMembers()
      rowData.value = member.members
    })

    const cellClickData = (cellValue: any) => {
      router.push(`/memberSetting/member/${cellValue[0].id}`)
    }

    return {
      columnDefs,
      rowData,
      gridRef,
      loginId,
      name,
      mobileNo,
      email,
      cellClickData
    }
  }
})
</script>

<style scoped></style>
