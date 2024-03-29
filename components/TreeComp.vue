<template>
  <v-layout>
    <Tree
      v-model:selectionKeys="selectedKeys"
      v-model:expandedKeys="expandedKeys"
      :selection-mode="selectionMode"
      :value="nodes"
      :filter="filterUse"
      style="width: 100%"
    />
  </v-layout>
</template>

<script setup lang="ts">
import Tree from 'primevue/tree'
import _ from 'lodash'
import { ref, watch } from 'vue'

interface TreeNode {
  key: string
  label: string
  style?: { [key: string]: string }
  icon?: string
  children?: TreeNode[]
}

export interface TreeData {
  id: string
  lv: string
  label: string
  upperId?: string
  useYn?: string
  navYn?: string
}

interface TreeOption {
  rootTitle?: string
  filter?: boolean
  expand?: boolean
  selectionMode?: SelectionMode
}

export interface TreeItem {
  data: TreeData[]
  option: TreeOption
}

interface TreeNodeSelectionState {
  checked: boolean
  partialChecked: boolean
}

const props = defineProps<{
  treeItems: TreeItem
}>()

const emits = defineEmits(['selectedTreeData'])

const nodes = ref<TreeNode[]>([
  {
    key: '0',
    label: 'No Data',
    style: { color: '#476cef' }
  }
])

type SelectedKeys = Record<string, TreeNodeSelectionState>
const selectedKeys = ref<SelectedKeys>({})
const expandedKeys = ref<{ [key: string]: boolean }>({})
const treeData = ref<TreeData[]>([])
const treeOption = ref<TreeOption>({})
const filterUse = ref<boolean>(false)

type SelectionMode = 'single' | 'multiple' | 'checkbox' | undefined
const selectionMode = ref<SelectionMode>('single')

const expandAllNodes = () => {
  for (const node of nodes.value) {
    expandNode(node)
  }
  expandedKeys.value = { ...expandedKeys.value }
}

const expandNode = (node: TreeNode) => {
  if (node.children && node.children.length) {
    expandedKeys.value[node.key] = true
    for (const child of node.children) {
      expandNode(child)
    }
  }
}

const setNode = () => {
  let label: string = 'ROOT'
  selectedKeys.value = {}

  if (
    treeOption.value.rootTitle !== '' &&
    treeOption.value.rootTitle !== undefined
  ) {
    label = treeOption.value.rootTitle
  }

  if (treeOption.value.filter !== undefined) {
    filterUse.value = treeOption.value.filter
  }

  if (treeOption.value.selectionMode !== undefined) {
    selectionMode.value = treeOption.value.selectionMode
  }

  const rootNode: TreeNode = {
    key: '0',
    label,
    style: { color: '#476cef' },
    children: []
  }

  const lv1Nodes: TreeNode[] = []

  const lv1Items = _.filter(treeData.value, { lv: '1' })
  const lv2Items = _.filter(treeData.value, { lv: '2' })

  for (let i = 0; i < lv1Items.length; i++) {
    const lv1Item = lv1Items[i]
    const lv1Id = lv1Item.id

    if (selectionMode.value === 'checkbox' && lv1Item.useYn === 'Y') {
      selectedKeys.value[lv1Id] = { checked: true, partialChecked: false }
    }

    const lv1Node: TreeNode = {
      key: lv1Item.id,
      label: lv1Item.label,
      style: { color: '#0dacbb' },
      children: []
    }

    for (let j = 0; j < lv2Items.length; j++) {
      const lv2Item = lv2Items[j]
      const lv2Id = lv2Item.id

      if (selectionMode.value === 'checkbox' && lv2Item.useYn === 'Y') {
        selectedKeys.value[lv2Id] = { checked: true, partialChecked: false }
      }

      if (lv2Item.upperId === lv1Id) {
        const lv2Node: TreeNode = {
          key: lv2Id,
          label: lv2Item.label,
          icon: 'pi pi-fw pi-file'
        }

        if (!lv1Node.children) {
          lv1Node.children = []
        }
        lv1Node.children.push(lv2Node)
      }
    }

    lv1Nodes.push(lv1Node)
  }

  rootNode.children = lv1Nodes

  nodes.value = [rootNode]

  if (treeOption.value.expand !== undefined && treeOption.value.expand) {
    expandAllNodes()
  }
}

const getSelectedData = (val: any) => {
  const keys = Object.keys(val)
  const selectedData = []
  for (let i = 0; i < keys.length; i++) {
    const id = keys[i]
    selectedData.push(_.filter(treeData.value, { id }))
  }

  emits('selectedTreeData', selectedData)
}

watch(
  () => selectedKeys.value,
  (newValue) => {
    getSelectedData(newValue)
  }
)

watch(
  () => props.treeItems,
  (newValue) => {
    treeData.value = newValue.data
    treeOption.value = newValue.option
    setNode()
  }
)
</script>

<style scoped></style>
