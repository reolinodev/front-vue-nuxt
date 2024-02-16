<template>
  <v-row class="pt-5 pe-1" justify="center">
    <v-col class="pa-1" cols="12">
      <v-card min-height="900">
        <v-card-item width="100%">
          <v-row class="ma-auto">
            <v-col cols="3">
              <v-card-text># Basic</v-card-text>
              <TreeSelect
                v-model="selectedValue"
                :options="nodes"
                placeholder="Select Item"
                style="width: 100%"
              />
            </v-col>
            <v-col cols="3">
              <v-card-text># Multiple</v-card-text>
              <TreeSelect
                v-model="selectedValue2"
                :options="nodes"
                placeholder="Select Item"
                selection-mode="multiple"
                style="width: 100%"
              />
            </v-col>
            <v-col cols="3">
              <v-card-text># Check</v-card-text>
              <TreeSelect
                v-model="selectedValue3"
                :options="nodes"
                placeholder="Select Item"
                selection-mode="checkbox"
                style="width: 100%"
              />
            </v-col>
            <v-col cols="3">
              <v-card-text class="mb-4"># Float Check</v-card-text>
              <FloatLabel>
                <TreeSelect
                  v-model="selectedValue3"
                  :options="nodes"
                  placeholder="Select Item"
                  selection-mode="checkbox"
                  input-id="select-item"
                  style="width: 100%"
                />
                <label for="select-item">Select-item</label>
              </FloatLabel>
            </v-col>
            <v-col cols="3">
              <v-card-text># Casecade Select</v-card-text>
              <CascadeSelect
                v-model="selectedCity"
                :options="countries"
                option-label="cname"
                option-group-label="name"
                :option-group-children="['states', 'cities']"
                style="width: 100%"
                placeholder="Select a City"
              />
            </v-col>
            <v-col cols="9">
              <v-card-text class="mb-3"># Float Select</v-card-text>
              <FloatLabel>
                <CascadeSelect
                  v-model="selectedCity"
                  input-id="cs-city"
                  :options="countries"
                  option-label="cname"
                  option-group-label="name"
                  :option-group-children="['states', 'cities']"
                  style="width: 30%"
                  placeholder="Select a City"
                />
                <label for="cs-city">City</label>
              </FloatLabel>
            </v-col>

            <v-col cols="3">
              <v-card-text class="mb-5"># Tree Basic</v-card-text>
              <span style="color: #ffffff; margin: 5px">
                {{ selectedKeyVal }}</span>
              <Tree
                v-model:selectionKeys="selectedKey"
                selection-mode="single"
                :value="nodes2"
                class="w-full md:w-30rem"
              />
            </v-col>

            <v-col cols="3">
              <v-card-text class="mb-5"># Tree controll</v-card-text>
              <span style="color: #ffffff; margin: 5px">
                {{ selectedKeyVal }}</span>

              <div class="flex flex-wrap gap-5 mb-4">
                <v-btn color="primary" @click="expandAll">
                  Expand All
                  <v-icon end icon="mdi-checkbox-marked-circle" />
                </v-btn>
                <v-btn color="error" @click="collapseAll">
                  Collapse All
                  <v-icon end icon="mdi-checkbox-marked-circle" />
                </v-btn>
              </div>

              <Tree
                v-model:selectionKeys="selectedKey"
                v-model:expandedKeys="expandedKeys"
                selection-mode="single"
                :value="nodes2"
                class="w-full md:w-30rem"
              />
            </v-col>

            <v-col cols="3">
              <v-card-text class="mb-5"># Tree checkbox</v-card-text>
              <span style="color: #ffffff; margin: 5px">
                {{ selectedKeyVal2 }}</span>

              <Tree
                v-model:selectionKeys="selectedKey2"
                :value="nodes2"
                selection-mode="checkbox"
                class="w-full md:w-30rem"
              />
            </v-col>

            <v-col cols="3">
              <v-card-text class="mb-5"># Tree Filter</v-card-text>
              <Tree
                v-model:selectionKeys="selectedKey"
                selection-mode="single"
                :value="nodes"
                :filter="true"
                filter-mode="lenient"
                class="w-full md:w-30rem"
              />
            </v-col>
          </v-row>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import TreeSelect from 'primevue/treeselect'
import CascadeSelect from 'primevue/cascadeselect'
import FloatLabel from 'primevue/floatlabel'
import Tree from 'primevue/tree'
import Button from 'primevue/button'

export default defineComponent({
  components: {
    TreeSelect,
    CascadeSelect,
    Tree,
    FloatLabel,
    // eslint-disable-next-line vue/no-reserved-component-names
    Button
  },
  setup: function () {
    const selectedValue = ref(null)
    const selectedValue2 = ref(null)
    const selectedValue3 = ref(null)

    const nodes = [
      {
        key: '1',
        label: 'Node 1',
        data: 'node1',
        icon: 'pi pi-fw pi-inbox',
        children: [
          {
            key: '1-1',
            label: 'Node 1.1',
            data: 'node1.1',
            icon: 'pi pi-fw pi-cog'
          },
          {
            key: '1-2',
            label: 'Node 1.2',
            data: 'node1.2',
            icon: 'pi pi-fw pi-cog'
          }
        ]
      },
      {
        key: '2',
        label: 'Node 2',
        data: 'node2',
        icon: 'pi pi-fw pi-inbox',
        children: [
          {
            key: '2-1',
            label: 'Node 2.1',
            data: 'node2.1',
            icon: 'pi pi-fw pi-cog'
          },
          {
            key: '2-2',
            label: 'Node 2.2',
            data: 'node2.2',
            icon: 'pi pi-fw pi-cog'
          }
        ]
      }
    ]

    const selectedCity = ref()
    const countries = ref([
      {
        name: 'Australia',
        code: 'AU',
        states: [
          {
            name: 'New South Wales',
            cities: [
              { cname: 'Sydney', code: 'A-SY' },
              { cname: 'Newcastle', code: 'A-NE' },
              { cname: 'Wollongong', code: 'A-WO' }
            ]
          },
          {
            name: 'Queensland',
            cities: [
              { cname: 'Brisbane', code: 'A-BR' },
              { cname: 'Townsville', code: 'A-TO' }
            ]
          }
        ]
      },
      {
        name: 'Canada',
        code: 'CA',
        states: [
          {
            name: 'Quebec',
            cities: [
              { cname: 'Montreal', code: 'C-MO' },
              { cname: 'Quebec City', code: 'C-QU' }
            ]
          },
          {
            name: 'Ontario',
            cities: [
              { cname: 'Ottawa', code: 'C-OT' },
              { cname: 'Toronto', code: 'C-TO' }
            ]
          }
        ]
      },
      {
        name: 'United States',
        code: 'US',
        states: [
          {
            name: 'California',
            cities: [
              { cname: 'Los Angeles', code: 'US-LA' },
              { cname: 'San Diego', code: 'US-SD' },
              { cname: 'San Francisco', code: 'US-SF' }
            ]
          },
          {
            name: 'Florida',
            cities: [
              { cname: 'Jacksonville', code: 'US-JA' },
              { cname: 'Miami', code: 'US-MI' },
              { cname: 'Tampa', code: 'US-TA' },
              { cname: 'Orlando', code: 'US-OR' }
            ]
          },
          {
            name: 'Texas',
            cities: [
              { cname: 'Austin', code: 'US-AU' },
              { cname: 'Dallas', code: 'US-DA' },
              { cname: 'Houston', code: 'US-HO' }
            ]
          }
        ]
      }
    ])

    const nodes2 = ref([
      {
        key: '0',
        label: 'Documents',
        data: 'Documents Folder',
        icon: 'pi pi-fw pi-inbox',
        children: [
          {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
              {
                key: '0-0-0',
                label: 'Expenses.doc',
                icon: 'pi pi-fw pi-file',
                data: 'Expenses Document'
              },
              {
                key: '0-0-1',
                label: 'Resume.doc',
                icon: 'pi pi-fw pi-file',
                data: 'Resume Document'
              }
            ]
          },
          {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [
              {
                key: '0-1-0',
                label: 'Invoices.txt',
                icon: 'pi pi-fw pi-file',
                data: 'Invoices for this month'
              }
            ]
          }
        ]
      }
    ])

    const selectedKey = ref(null)
    const selectedKeyVal = ref(null)

    watch(selectedKey, (val) => {
      selectedKeyVal.value = Object.keys(val)[0]
    })

    const expandedKeys = ref({})

    const expandAll = () => {
      for (const node of nodes2.value) {
        expandNode(node)
      }

      expandedKeys.value = { ...expandedKeys.value }
    }

    const collapseAll = () => {
      expandedKeys.value = {}
    }

    const expandNode = (node) => {
      if (node.children && node.children.length) {
        expandedKeys.value[node.key] = true

        for (const child of node.children) {
          expandNode(child)
        }
      }
    }

    const selectedKey2 = ref(null)
    const selectedKeyVal2 = ref(null)

    watch(selectedKey2, (val) => {
      // todo 목적에 맞게 기능 정의가 필요
      const keys = Object.keys(val)
      for (let i = 0; i < keys.length; i++) {
        const ObjVal = val[keys[i]]
        console.log('selectedKey2', ObjVal)
      }

      selectedKeyVal2.value = Object.keys(val)
    })

    return {
      selectedValue,
      selectedValue2,
      selectedValue3,
      nodes,
      selectedCity,
      countries,
      nodes2,
      selectedKey,
      selectedKeyVal,
      expandedKeys,
      selectedKey2,
      selectedKeyVal2,
      expandAll,
      collapseAll
    }
  }
})
</script>

<style scoped></style>
