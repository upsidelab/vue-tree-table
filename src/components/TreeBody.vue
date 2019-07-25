<template>
  <div>
    <slot
      v-for="rowData in data"
      :rowData="rowData"
      :defaultOrder="columns"
      name="rowTemplate"
    >
      <tree-node
        v-if="!isLeaf(rowData)"
        :row-data="rowData"
        :depth="0"
        :default-order="columns"
      />
      <tree-leaf
        v-if="isLeaf(rowData)"
        :row-data="rowData"
        :depth="0"
        :default-order="columns"
      />
    </slot>
  </div>
</template>

<script>
  import TreeNode from './TreeNode'
  import TreeLeaf from './TreeLeaf'
  import isLeafFunc from '../utils/isLeaf'

  export default {
    name: 'TreeBody',
    components: {TreeLeaf, TreeNode},
    props: {
      data: {
        type: Array,
        default: function(){ return [] }
      },
      columns: {
        type: Array,
        default: function(){ return [] }
      },
    },
    methods: {
      isLeaf(rowData){
        return isLeafFunc(rowData)
      }
    }
  }
</script>

<style scoped>
</style>