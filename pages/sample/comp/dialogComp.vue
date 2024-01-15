<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="1024">
      <template #activator="{ props }">
        <v-btn color="primary" v-bind="props"> 팝업폼#1 </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal first name*" required />
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal middle name"
                  hint="example of helper text only on focus"
                />
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                />
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" required />
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*" type="password" required />
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="[
                    'Skiing',
                    'Ice hockey',
                    'Soccer',
                    'Basketball',
                    'Hockey',
                    'Reading',
                    'Writing',
                    'Coding',
                    'Basejump'
                  ]"
                  label="Interests"
                  multiple
                />
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog2" persistent width="600">
      <template #activator="{ props }">
        <v-btn color="warning" v-bind="props" style="margin-left: 10px">
          팝업폼#2
        </v-btn>
      </template>
      <v-card color="#5e6066" theme="dark" variant="flat">
        <v-sheet>
          <v-card-item>
            <template #prepend>
              <v-card-title>
                <v-icon icon="mdi-pencil-box" start />
                사용자
              </v-card-title>
            </template>

            <v-divider vertical class="mx-2" />

            <v-btn
              class="text-none text-subtitle-1"
              color="#5865f2"
              size="small"
              variant="flat"
            >
              등록
            </v-btn>

            <template #append>
              <v-btn
                icon="$close"
                size="large"
                variant="text"
                @click="dialog2 = false"
              />
            </template>
          </v-card-item>

          <v-divider />

          <v-card-item style="padding: 0">
            <v-card class="ma-4" variant="flat">
              <v-card-item>
                <v-form ref="form">
                  <v-text-field
                    v-model="name"
                    :counter="10"
                    label="Name"
                    required
                  />

                  <v-select
                    v-model="select"
                    :items="items"
                    :rules="[(v) => !!v || 'Item is required']"
                    label="Item"
                    required
                  />
                </v-form>
              </v-card-item>

              <div class="pa-4 d-flex align-right">
                <v-spacer />
                <v-btn
                  class="me-2 text-none"
                  color="error"
                  variant="outlined"
                  prepend-icon="mdi-close-thick"
                  @click="dialog2 = false"
                >
                  Cancel
                </v-btn>

                <v-btn
                  class="me-2 text-none"
                  color="success"
                  variant="outlined"
                  prepend-icon="mdi-check"
                  @click="dialog2 = false"
                >
                  Save
                </v-btn>
              </div>
            </v-card>
          </v-card-item>
        </v-sheet>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog6" persistent width="600">
      <template #activator="{ props }">
        <v-btn color="error" v-bind="props" style="margin-left: 10px">
          팝업폼#3
        </v-btn>
      </template>
      <v-card>
        <v-toolbar flat color="blue-grey" dark>
          <v-toolbar-title>Submit a post</v-toolbar-title>
        </v-toolbar>

        <v-card-text>
          <v-text-field
            variant="filled"
            label="Title"
            model-value="My new post"
          />

          <v-textarea
            variant="filled"
            label="Text"
            model-value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"
          />

          <v-divider class="my-2" />

          <v-item-group multiple selected-class="bg-purple">
            <div class="text-caption mb-2">Tags</div>
            <v-item v-for="n in 8" :key="n" v-slot="{ selectedClass, toggle }">
              <v-chip :class="selectedClass" @click="toggle">
                Tag {{ n }}
              </v-chip>
            </v-item>
          </v-item-group>
        </v-card-text>

        <v-divider />

        <v-card-actions>
          <v-spacer />
          <v-btn color="success" @click="dialog6 = false"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog7" persistent width="600">
      <template #activator="{ props }">
        <v-btn color="error" v-bind="props" style="margin-left: 10px">
          팝업폼#4
        </v-btn>
      </template>

      <v-card class="mx-auto" max-width="400">
        <v-toolbar flat color="deep-purple-accent-4" dark>
          <v-btn icon @click="dialog7 = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Filter results</v-toolbar-title>
        </v-toolbar>

        <v-card-text>
          <h2 class="text-h6 mb-2">Choose amenities</h2>

          <v-chip-group v-model="amenities" column multiple>
            <v-chip filter variant="outlined"> Elevator </v-chip>
            <v-chip filter variant="outlined"> Washer / Dryer </v-chip>
            <v-chip filter variant="outlined"> Fireplace </v-chip>
            <v-chip filter variant="outlined"> Wheelchair access </v-chip>
            <v-chip filter variant="outlined"> Dogs ok </v-chip>
            <v-chip filter variant="outlined"> Cats ok </v-chip>
          </v-chip-group>
        </v-card-text>

        <v-card-text>
          <h2 class="text-h6 mb-2">Choose neighborhoods</h2>

          <v-chip-group v-model="neighborhoods" column multiple>
            <v-chip filter variant="outlined"> Snowy Rock Place </v-chip>
            <v-chip filter variant="outlined"> Honeylane Circle </v-chip>
            <v-chip filter variant="outlined"> Donna Drive </v-chip>
            <v-chip filter variant="outlined"> Elaine Street </v-chip>
            <v-chip filter variant="outlined"> Court Street </v-chip>
            <v-chip filter variant="outlined"> Kennedy Park </v-chip>
          </v-chip-group>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog3" persistent width="500">
      <template #activator="{ props }">
        <v-btn color="success" v-bind="props" style="margin-left: 10px">
          성공 얼럿
        </v-btn>
      </template>
      <v-alert v-model="alert3" closable title="성공" icon="mdi-check-circle">
        <div style="padding-top: 10px">데이터 생성에 성공하였습니다.</div>

        <div class="alert-button-container">
          <v-btn
            class="me-2 text-none"
            color="success"
            variant="outlined"
            prepend-icon="mdi-check"
            width="100"
            @click="dialog3 = false"
          >
            OK
          </v-btn>
        </div>
      </v-alert>
    </v-dialog>

    <v-dialog v-model="dialog4" persistent width="500">
      <template #activator="{ props }">
        <v-btn color="warning" v-bind="props" style="margin-left: 10px">
          컨펌 얼럿
        </v-btn>
      </template>
      <v-alert
        v-model="alert4"
        closable
        title="확인"
        icon="mdi-alert-circle-check"
      >
        <div style="padding-top: 10px">입력을 완료하시겠습니까?</div>

        <div class="alert-button-container">
          <v-btn
            class="me-2 text-none"
            color="error"
            variant="outlined"
            prepend-icon="mdi-close-thick"
            width="100"
            @click="dialog4 = false"
          >
            취소
          </v-btn>

          <v-btn
            class="me-2 text-none"
            color="success"
            variant="outlined"
            prepend-icon="mdi-check"
            width="100"
            @click="dialog4 = false"
          >
            저장
          </v-btn>
        </div>
      </v-alert>
    </v-dialog>

    <v-dialog v-model="dialog5" persistent width="500">
      <template #activator="{ props }">
        <v-btn color="error" v-bind="props" style="margin-left: 10px">
          오류 얼럿
        </v-btn>
      </template>
      <v-alert v-model="alert5" closable title="경고" icon="mdi-alert-circle">
        <div style="padding-top: 10px">데이터 생성에 실패하였습니다.</div>

        <div class="alert-button-container">
          <v-btn
            class="me-2 text-none"
            color="error"
            variant="outlined"
            prepend-icon="mdi-close-thick"
            width="100"
            @click="dialog5 = false"
          >
            확인
          </v-btn>
        </div>
      </v-alert>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'DialogComp',
  setup: function () {
    const form = ref<any>(null)
    const dialog = ref<boolean>(false)
    const dialog2 = ref<boolean>(false)
    const dialog3 = ref<boolean>(false)
    const dialog4 = ref<boolean>(false)
    const dialog5 = ref<boolean>(false)
    const dialog6 = ref<boolean>(false)
    const dialog7 = ref<boolean>(false)

    const alert3 = ref<boolean>(true)
    const alert4 = ref<boolean>(true)
    const alert5 = ref<boolean>(true)

    const amenities = ref([1, 4])
    const neighborhoods = ref([1])

    const name = ref('')
    const nameRules = [
      (v: string) => !!v || 'Name is required',
      (v: string) =>
        (v && v.length <= 10) || 'Name must be less than 10 characters'
    ]
    const select = ref<string | null>(null)

    const items: Array<string> = ['Item 1', 'Item 2', 'Item 3', 'Item 4']

    watch(alert3, (val) => {
      if (!val) {
        dialog3.value = false
      }
    })
    watch(dialog3, (val) => {
      if (val) {
        alert3.value = true
      }
    })

    watch(alert4, (val) => {
      if (!val) {
        dialog4.value = false
      }
    })
    watch(dialog4, (val) => {
      if (val) {
        alert4.value = true
      }
    })

    watch(alert5, (val) => {
      if (!val) {
        dialog5.value = false
      }
    })
    watch(dialog5, (val) => {
      if (val) {
        alert5.value = true
      }
    })

    return {
      name,
      nameRules,
      select,
      items,
      form,
      dialog,
      dialog2,
      dialog3,
      dialog4,
      dialog5,
      dialog6,
      dialog7,
      alert3,
      alert4,
      alert5,
      amenities,
      neighborhoods
    }
  }
})
</script>

<style scoped></style>
