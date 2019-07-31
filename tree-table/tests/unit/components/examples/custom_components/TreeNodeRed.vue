<template>
  <tree-default-node class="tree-row--red" :row-data="rowData" :default-order="defaultOrder" :depth="depth" :on-open="onOpen"/>
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