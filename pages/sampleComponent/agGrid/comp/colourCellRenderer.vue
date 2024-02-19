<template>
  <div v-if="params.value === '(Select All)'">{{ params.value }}</div>
  <span
v-else :style="{ color: removeSpaces(params.valueFormatted) }"
    >{{ params.valueFormatted }}
  </span>
</template>
<script setup lang="ts">
const removeSpaces = (str) => {
  return str ? str.replace(/\s/g, '') : str
}
</script>

<style scoped></style>
