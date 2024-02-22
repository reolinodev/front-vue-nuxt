# 그리드 컴퍼넌트 사용법

## 1. 사용된 그리드
[AG Grid 공식홈](https://www.ag-grid.com/)

## 2. 개발 컴퍼넌트 및 개발 내용
1. GridListComp.vue
   1. 기본적인 데이터 출력
      1. Cell 별 스타일 지정
      2. 포맷터 처리
      3. pin 처리 방법
   2. 특정 컬럼 선택 이벤트
   3. 체크박스 선택 이벤트
      1. 선택할수 있는 로우 지정
   4. 페이징처리
   5. 필터처리
      1. 전체 컬럼 필터처리
      2. 개별 컬럼 필터처리
      3. 필터 히든 처리
   6. CSV Import 
2. GridEditorComp.vue
   1. 로우 에디팅 기능 및 데이터 처리

## 3. GridListComp 사용방법
기본적으로 각 컴퍼넌트를 호출 하고 그리드 옵션, 컬럼 정의내용, 로우데이터를 넘겨주고 이벤트를
콜백으로 받습니다.

#### 1. 기본적인 데이터 출력
``` vue
<template>
    <grid-list-comp
        :column-defs="columnDefs"
        :row-data="rowData"
        :grid-ref="gridRef"
        @call-back-data="callBackData"
    />
</template>

```
```typescript
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import GridListComp from '~/components/GridListComp.vue'

export default defineComponent({
  components: { GridListComp },
  setup: function () {
    //로우 데이터
    const rowData = ref([])
    
    // 컬럼정의
    const columnDefs = ref([
      { headerName: 'No', field: 'no', type: 'number', width: '80' },
      { headerName: 'ID', field: 'id', type: 'number', flex: 1, hide: true },
      { headerName: 'Login Id', field: 'loginId', type: 'text', flex: 1},
      { headerName: 'Name', field: 'userNm', type: 'text', flex: 1 },
      { headerName: 'Mobile No', field: 'mobileNo', type: 'text', flex: 1 },
      { headerName: 'Email', field: 'email', type: 'text', flex: 1 }
    ])
    
    //그리드 옵션
    const gridRef = ref({
      clickEventUse: false, // 클릭 이벤트 사용
      clickField: [], // 클릭 이벤트에 사용할 컬럼
      pagingUse: true, // 페이징 사용여부
      checkBoxUse: false, // 체크박스 사용여부
      isRowSelectable: null, // 체크박스시 사용가능한 로우 지정
      excelExportUse: false, // 엑셀다운로드 사용여부
      defaultColDef: null // 필터 옵션
    })

    onMounted(() => {
      // 로우 데이터 처리
      rowData.value = 외부데이터
    })
    
    // 그리드 클릭시 선택된 셀정보 반환
    const callBackData = (value: any) => {
      console.log('callBackData', value)
    }

    return {
      columnDefs,
      rowData,
      gridRef,
      cellClickData,
      callBackData
    }
  }
})
</script>
```
#### 1-1. Cell 별 스타일 지정
columnDefs내 각 헤더에 cellStyle 옵션을 사용합니다.
```typescript
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
      {
        headerName: 'Login Id',
        field: 'loginId',
        type: 'text',
        flex: 1,
        cellStyle: {
          'text-decoration': 'underline',
          color: '#2196f3'
        }
      },
    ])

```
#### 1-2 포맷터 처리
```typescript
    const columnDefs = ref([
      // 숫자를 세자리 마다 쉼표로 구분  
      { field: 'number', valueFormatter: params => params.value.toLocaleString() }, 
      //전화 번호 형태
      {
         headerName: 'Mobile No',
         field: 'mobileNo',
         type: 'text',
         flex: 1,
         valueFormatter: (params: string) => {
            // prettier-ignore
            return `(${params.value.substring(0, 3)}) ${params.value.substring(3, 7)}-${params.value.substring(7)}`
         }
      },    
  ]
```

#### 1-3 핀 처리
columnDefs내 각 헤더에 pinned 옵션을 사용합니다. (left, right)
```typescript
    const columnDefs = ref([
      {
        headerName: 'No',
        field: 'no',
        type: 'number',
        width: '80',
        pinned: 'left'
      },
    ])

```
#### 2. 특정 컬럼 선택 이벤트
특정 컬럼을 눌렀을때만 이벤트가 발생하게 끔 하기 위한 기능입니다. 주의점은 체크박스 기능과 혼용해서 사용할 수 없습니다. (이벤트 중복 발생)
또 call-back-data 대신에 cell-click-data를 사용하세요.

```vue
 <grid-list-comp
    :column-defs="columnDefs"
    :row-data="rowData"
    :grid-ref="gridRef"
    @cell-click-data="cellClickData"
/>
```
```typescript
    //그리드 옵션
    const gridRef = ref({
      clickEventUse: true, // 클릭 이벤트 사용
      clickField: ['loginId'], // 클릭 이벤트에 사용할 컬럼
      pagingUse: true, // 페이징 사용여부
      checkBoxUse: false, // 체크박스 사용여부
      isRowSelectable: null, // 체크박스시 사용가능한 로우 지정
      excelExportUse: false, // 엑셀다운로드 사용여부
      defaultColDef: null // 필터 옵션
    })

    const columnDefs = ref([
      {
        headerName: 'No', field: 'no', type: 'number', width: '80', 
        cellStyle: {'text-align': 'center'}
      },
      { headerName: 'ID', field: 'id', type: 'number', flex: 1, hide: true },
      { headerName: 'Login Id', field: 'loginId', type: 'text', flex: 1,
        cellStyle: { 'text-decoration': 'underline', color: '#2196f3'}
      }
    ])

    const cellClickData = (value: any) => {
      console.log('cellClickData', value)
    }
```

#### 3. 체크박스 선택 이벤트
체크박스는 기본적으로 다중 선택 입니다. gridRef와 columnDef를 아래와 같이 작성해주세요. No 컬럼 상단에 체크박스가 생깁니다.
```typescript
   //그리드 옵션
    const gridRef = ref({
      clickEventUse: false, // 클릭 이벤트 사용
      clickField: [], // 클릭 이벤트에 사용할 컬럼
      pagingUse: true, // 페이징 사용여부
      checkBoxUse: true, // 체크박스 사용여부
      isRowSelectable: null, // 체크박스시 사용가능한 로우 지정
      excelExportUse: false, // 엑셀다운로드 사용여부
      defaultColDef: null // 필터 옵션
    })

    const columnDefs = ref([
      {
        headerName: 'No', field: 'no', type: 'number', width: '80',
        cellStyle: {
          'text-align': 'center'
        },
        headerCheckboxSelection: true,
        checkboxSelection: true,
        showDisabledCheckboxes: true //isRowSelectable 기능과 혼용
      },
    ])
```
#### 3. 체크박스 선택할수 있는 로우 지정
isRowSelectable에 조건에 해당하는 메소드를 넣어줘야 합니다. 

```typescript
    //데이터 조건문
    const isRowSelectable = (params: any) => {
      return params.data.userNm === 'Kim1'
    }

   //그리드 옵션
    const gridRef = ref({
      clickEventUse: false, // 클릭 이벤트 사용
      clickField: [], // 클릭 이벤트에 사용할 컬럼
      pagingUse: true, // 페이징 사용여부
      checkBoxUse: true, // 체크박스 사용여부
      isRowSelectable, // 체크박스시 사용가능한 로우 지정
      excelExportUse: false, // 엑셀다운로드 사용여부
      defaultColDef: null // 필터 옵션
    })

    const columnDefs = ref([
      {
        headerName: 'No', field: 'no', type: 'number', width: '80',
        cellStyle: {
          'text-align': 'center'
        },
        headerCheckboxSelection: true,
        checkboxSelection: true,
        showDisabledCheckboxes: true //isRowSelectable 기능과 혼용
      },
    ])
```

#### 4. 페이징처리
gridRef의 pagingUse를 수정하세요. true, false 입니다.

```typescript
   //그리드 옵션
    const gridRef = ref({
      clickEventUse: false, // 클릭 이벤트 사용
      clickField: [], // 클릭 이벤트에 사용할 컬럼
      pagingUse: true, // 페이징 사용여부
      checkBoxUse: false, // 체크박스 사용여부
      isRowSelectable:  null // 체크박스시 사용가능한 로우 지정
      excelExportUse: false, // 엑셀다운로드 사용여부
      defaultColDef: null // 필터 옵션
    })
```
#### 5. 필터처리
필터는 defaultColDef를 수정하세요.필터 옵션에 따라 처리 방법이 다릅니다.

#### 5-1. 전체 컬럼 필터처리
```typescript
    //필터 옵션
    const defaultColDef = ref({
      minWidth: 150, //최소 넓이
      filter: true, // 전체필터
      floatingFilter: true // 필터 플롯팅
    })

    //그리드 옵션
    const gridRef = ref({
      clickEventUse: false, // 클릭 이벤트 사용
      clickField: [], // 클릭 이벤트에 사용할 컬럼
      pagingUse: true, // 페이징 사용여부
      checkBoxUse: false, // 체크박스 사용여부
      isRowSelectable:  null // 체크박스시 사용가능한 로우 지정
      excelExportUse: false, // 엑셀다운로드 사용여부
      defaultColDef // 필터 옵션
    })
```
#### 5-2. 개별 컬럼 필터처리
```typescript
    //필터 옵션
    const defaultColDef = ref({
      filter: false, // 전체필터
      floatingFilter: true // 필터 플롯팅
    })

    //그리드 옵션
    const gridRef = ref({
      clickEventUse: false, // 클릭 이벤트 사용
      clickField: [], // 클릭 이벤트에 사용할 컬럼
      pagingUse: true, // 페이징 사용여부
      checkBoxUse: false, // 체크박스 사용여부
      isRowSelectable:  null // 체크박스시 사용가능한 로우 지정
      excelExportUse: false, // 엑셀다운로드 사용여부
      defaultColDef  // 필터 옵션
    })

    const columnDefs = ref([
      {
        headerName: 'No', field: 'no', type: 'number', width: '80',
        cellStyle: {'text-align': 'center'},
        filter: 'agNumberColumnFilter'
      },
      {
        headerName: 'Login Id', field: 'loginId', type: 'text', flex: 1,
        filter: 'agTextColumnFilter'
      }
    ])

```

#### 5-3. 필터 히든 처리
floatingFilter를 false로 수정합니다.

```typescript
    //필터 옵션
    const defaultColDef = ref({
      filter: true, // 전체필터
      floatingFilter: false // 필터 플롯팅
    })
```


#### 6. CSV Import
CSV import는 gridRef의 excelExportUse 수정하세요. true, false 입니다.
```typescript
   //그리드 옵션
    const gridRef = ref({
      clickEventUse: false, // 클릭 이벤트 사용
      clickField: [], // 클릭 이벤트에 사용할 컬럼
      pagingUse: true, // 페이징 사용여부
      checkBoxUse: false, // 체크박스 사용여부
      isRowSelectable:  null // 체크박스시 사용가능한 로우 지정
      excelExportUse: true, // 엑셀다운로드 사용여부
      defaultColDef: null // 필터 옵션
    })
```
