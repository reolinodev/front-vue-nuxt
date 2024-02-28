#  컴퍼넌트 

## 1. 개발된 컴퍼넌트
1. PopupComp.vue : 팝업 컴퍼넌트
2. CalendarInputComp.vue : 입력시 달력이 호출 되는 컴퍼넌트

## 2. 컴퍼넌트 사용법
### 2-1. PopupComp.vue
#### a. 코드
```vue

  <popup-comp
    :popup-open="popupOpen"
    :popup-title="`title`"
    :popup-width="`600`"
    :popup-type="`save`"
    @call-back-popup="callBackPopup"
    @call-back-save="callBackSave"
  >
    <H1>TEST</H1>
  </popup-comp>  

```
```typescript
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

const emits = defineEmits(['eventName', 'callBackPopup'])

const props = defineProps<{
   popupOpen: boolean | null
}>()

const popupOpen = ref<boolean>(props.popupOpen)

watch(
  () => props.popupOpen,
  (newValue) => {
      popupOpen.value = newValue
  }
)

const callBackPopup = (val) => {
  emits('callBackPopup', val)
}

const callBackSave = () => {
  // todo 이벤트 실행 후 종료시 양뱡향으로 종료 여부를 전달해야 한다.
    popupOpen.value = false
  emits('callBackSchedulePopup', false)
}
</script>
```
#### b. 설명
- PopupComp안에 slot을 사용하기 때문에 popup-comp을 호출하고 안에 넣으면 된다. 
- 부모 컴퍼넌트에서 하위의 하위의 컴퍼넌트를 사용하기 때문에 props와 emit 사용에 주의 해야 한다.
- popupWidth를 넣지 않으면 전체 화면 사이즈의 팝업이 호출 된다.
- popupType에 save를 넣지않으면 close 버튼만 나온다. save가 아니면 callBackSave emit을 받지
않으면 된다. 


### 2-2.CalendarInputComp.vue
#### a.코드
```vue

<CalendarInputComp
    :input-date="date"
    :show-icon="true"
    :show-on-focus="true"
    @call-back-calendar-input="callBackCalendarInput"
/>

```

```typescript
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import CalendarInputComp from '~/components/CalendarInputComp.vue'

const date = ref<string | null>(getCurrentDateFormat('YYYY-MM-DD'))
const selectedDate = ref<string | null>(date.value)

const callBackCalendarInput = (val: string) => {
    selectedDate.value = val
}
</script>
```
#### b. 설명
- input-date에는 값을 넣어주면 해당 값이 선택된다.
- show-icon을 false로 하면 달력 아이콘이 사라진다.
- show-on-focus를 true롷 하면 직접 입력이 가능하며 false는 원래대로 돌아온다.
- callBackCalendarInput를 선택하면 선택한 날자를 반환한다.
