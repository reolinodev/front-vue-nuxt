<template>
  <v-row class="pt-2 pe-5 h-auto" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%">
          <v-row class="ma-auto">
            <v-col cols="12">
              <v-card-title class="pl-5 text-blue-accent-2">
                # Click
              </v-card-title>
            </v-col>
            <v-col cols="12">
              <div ref="dropdown" class="dropdown">
                <strong class="dropdown-label" @click="show = !show">
                  Click me to open!
                </strong>
                <p v-if="show" class="dropdown-content">HI</p>
              </div>
            </v-col>

            <v-col cols="12">
              <v-card-title class="pl-5 text-blue-accent-2">
                # Sort
              </v-card-title>
            </v-col>

            <v-col cols="12">
              <div class="d-flex ga-2">
                <v-btn color="info" @click="sortAsc">Sort A-Z ↑</v-btn>
                <v-btn color="warning" @click="sortDesc">Sort Z-A ↓</v-btn>
              </div>
              <ul ref="sortItems" class="pa-5">
                <li v-for="item in items" :key="item">
                  {{ item }}
                </li>
              </ul>
            </v-col>

            <v-col cols="12">
              <div class="d-flex ga-2">
                <v-btn color="info" @click="addItem">Add Item</v-btn>
                <v-btn color="warning" @click="removeItem">remove Item</v-btn>
              </div>
              <ul ref="orderItems" class="pa-5">
                <li v-for="item in items2" :key="item">
                  {{ item }}
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import autoAnimate from '@formkit/auto-animate'
import { useAutoAnimate } from '@formkit/auto-animate/vue'

// click example
const dropdown = ref()
const show = ref(false)

onMounted(() => {
  autoAnimate(dropdown.value, { easing: 'ease-in-out', duration: 500 })
})

// sort example
const items = ref(['React', 'Vue', 'Svelte', 'Angular'])
const [sortItems] = useAutoAnimate({ easing: 'ease-in-out', duration: 500 })

function sortAsc() {
  items.value.sort()
}
function sortDesc() {
  items.value.sort().reverse()
}

// add remove example
const items2 = ref([1, 2, 3, 4, 5])
const [orderItems] = useAutoAnimate({ easing: 'ease-in-out', duration: 700 })

function addItem() {
  const randomNumber = Math.floor(Math.random() * 100) + 1
  items2.value.push(randomNumber)
}
function removeItem() {
  items2.value.shift()
}
</script>
