<template>
  <tree-node class="tree-row--red" :rowData="rowData" :defaultOrder="defaultOrder" :depth="depth" />
</template>

<script>
  import TreeNode from '../../../../../src/components/TreeNode'

  export default {
    name: 'TreeNodeRed',
    components: {TreeNode},
    props: {
      rowData: Object,
      defaultOrder: Array,
      depth: Number
    }
  }
</script>

<style scoped>
.tree-row--red{
  background-color: red;
}
</style>