<template>
  <tree-node class="tree-row--red" :rowData="rowData" :defaultOrder="defaultOrder" />
</template>

<script>
  import TreeNode from '../../../../../src/components/TreeNode'

  export default {
    name: 'TreeNodeRed',
    components: {TreeNode},
    props: {
      rowData: Object,
      defaultOrder: Array
    }
  }
</script>

<style scoped>
.tree-row--red{
  background-color: red;
}
</style>