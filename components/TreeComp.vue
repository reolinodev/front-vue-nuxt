<template>
  <v-layout>
    <Tree
      v-model:selectionKeys="selectedKey"
      v-model:expandedKeys="expandedKeys"
      selection-mode="single"
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
  children?: TreeNode[]
}

interface TreeDataItem {
  id: string
  lv: string
  label: string
  upperId?: string
}

interface TreeOption {
  rootTitle?: string
  filter?: boolean
  expand?: boolean
  checkbox?: boolean
}

const props = defineProps<{
  treeItems: { data: TreeDataItem[]; option: TreeOption }
}>()

const emits = defineEmits(['selectedTreeData'])

const nodes = ref<TreeNode[]>([
  {
    key: '0',
    label: 'No Data',
    style: { color: '#476cef' }
  }
])

const selectedKey = ref<string | null>(null)
const expandedKeys = ref<{ [key: string]: boolean }>({})
const treeData = ref<TreeDataItem[]>([])
const treeOption = ref<TreeOption>({})
const filterUse = ref<boolean>(false)

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
  if (
    treeOption.value.rootTitle !== '' &&
    treeOption.value.rootTitle !== undefined
  ) {
    label = treeOption.value.rootTitle
  }

  if (treeOption.value.filter !== undefined) {
    filterUse.value = treeOption.value.filter
  }

  const rootNode: TreeNode = {
    key: '0',
    label,
    children: []
  }

  const lv1Nodes: TreeNode[] = []

  const lv1Items = _.filter(treeData.value, { lv: '1' })
  const lv2Items = _.filter(treeData.value, { lv: '2' })

  for (let i = 0; i < lv1Items.length; i++) {
    const lv1Item = lv1Items[i]
    const lv1Id = lv1Item.id

    const lv1Node = {
      key: lv1Item.id,
      label: lv1Item.label,
      children: []
    }

    for (let j = 0; j < lv2Items.length; j++) {
      const lv2Item = lv2Items[j]

      if (lv2Item.upperId === lv1Id) {
        const lv2Node = {
          key: lv2Item.id,
          label: lv2Item.label,
          icon: 'pi pi-fw pi-file'
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
  () => selectedKey.value,
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
