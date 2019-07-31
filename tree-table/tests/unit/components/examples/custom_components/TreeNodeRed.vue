<template>
  <tree-default-node class="tree-row--red" :rowData="rowData" :defaultOrder="defaultOrder" :depth="depth" :onOpen="onOpen"/>
</template>

<script>
  import TreeDefaultNode from '../../../../../src/components/TreeDefaultNode'

  export default {
    name: 'TreeNodeRed',
    components: {TreeDefaultNode},
    props: {
      rowData: Object,
      defaultOrder: Array,
      depth: Number,
      isOpen: Boolean,
      onOpen: Function
    }
  }
</script>

<style scoped>
.tree-row--red{
  background-color: red;
}
</style>