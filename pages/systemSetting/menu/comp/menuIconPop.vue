<template>
  <popup-comp
    :popup-open="menuIconPopup"
    :popup-title="`Icon`"
    :popup-width="`600`"
    :popup-type="`edit`"
    @call-back-popup="callBackPopup"
    @call-back-save="callBackSave"
  >
    <div class="text-left mb-3 pa-2" style='background: #ddd8e3;border-radius: 10px;opacity: 0.9'>
      <v-btn
          v-for="menuIcon in menuIcons"
          :key="menuIcon"
          class="v-icon--size-x-small ma-2"
          :color="getButtonColor(menuIcon)"
          :icon="menuIcon"
          @click="setActiveIcon(menuIcon)"
      />
    </div>

    <v-divider class='mb-3'></v-divider>

    <v-row>
      <v-col cols='10'>
        <v-text-field
            v-model="activeIcon"
            variant="filled"
            label="Icon"
        />
      </v-col>
      <v-col cols='2' class='pt-5'>
        <v-btn
            class="v-icon--size-x-small"
            color="#F50057"
            @click="clearMenuIcon()"
        >
          <v-icon icon='mdi-close-circle-outline'></v-icon>
        </v-btn>
      </v-col>
    </v-row>


  </popup-comp>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

const emits = defineEmits(['callBackMenuIconPopup', 'callBackMenuIconSave'])

const props = defineProps<{
  menuIconPopup: boolean
  icon: string
}>()

const menuIconPopup = ref<boolean>(<boolean>props.menuIconPopup)
const icon = ref<string>(<string>props.icon)
const activeIcon = ref<string>('')
const menuIcons = ref<string[]>([])

const getMenuIcons = function() {
  menuIcons.value = [
      'mdi-folder-account',
      'mdi-folder-wrench',
      'mdi-folder-pound',
      'mdi-account-box-edit-outline',
      'mdi-menu-open',
      'mdi-wall-fire',
      'mdi-application-braces-outline',
      'mdi-alert-box',
      'mdi-alert-circle-check-outline',
      'mdi-folder',
      'mdi-home-circle',
      'mdi-home',
      'mdi-land-rows-horizontal',
      'mdi-land-rows-vertical',
      'mdi-arrow-bottom-left-bold-box',
      'mdi-arrow-bottom-right-bold-box',
      'mdi-arrow-top-right-bold-box',
      'mdi-arrow-top-left-bold-box',
      'mdi-television',
      'mdi-television-play',
      'mdi-television-pause',
      'mdi-television-stop',
      'mdi-pencil-box',
      'mdi-pencil-box-outline',
  ]
}




const getButtonColor = (value: string) => {
  if (value === activeIcon.value) {
    return '#f34b81'; // 붉은색
  } else {
    return '#01579B'; // 기본 색상
  }
}

const setActiveIcon = (value: string) => {
  activeIcon.value = value;
}

const clearMenuIcon = () => {
  activeIcon.value = '';
}

const callBackPopup = (val:boolean) => {
  emits('callBackMenuIconPopup', val)
}

const callBackSave = () => {
  emits('callBackMenuIconSave', activeIcon.value)
  emits('callBackMenuIconPopup', false)
}

watch(
    () => props.menuIconPopup,
    (newValue) => {
      menuIconPopup.value = newValue
    }
)

watch(
    () => props.icon,
    (newValue) => {
      icon.value = newValue
      activeIcon.value = newValue
    }
)


onMounted(() => {
  getMenuIcons()
  activeIcon.value = props.icon
})
</script>

<style scoped></style>
