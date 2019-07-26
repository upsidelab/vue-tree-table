<template>
  <TreeDefaultLeaf :row-data="rowData" :default-order="defaultOrder" :depth="depth" />
</template>

<script>
  import TreeDefaultLeaf from './TreeDefaultLeaf'
  export default {
    name: 'TreeLeaf',
    components: {TreeDefaultLeaf},
    props: {
      rowData: {
        type: Object,
        default: () => { return {} }
      },
      defaultOrder: {
        type: Array,
        default: () => { return {} }
      },
      depth: {
        type: Number,
        default: 0
      }
    }
  }
</script>

