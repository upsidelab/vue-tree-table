<template>
  <div>
    <slot
      v-for="rowData in data"
      :rowData="rowData"
      :defaultOrder="columns"
      name="rowTemplate"
    >
      <tree-node
        :row-data="rowData"
        :default-order="columns"
      />
    </slot>
  </div>
</template>

<script>
  import TreeNode from './TreeNode'
  export default {
    name: 'TreeBody',
    components: {TreeNode},
    props: {
      data: {
        type: Array,
        default: function(){ return [] }
      },
      columns: {
        type: Array,
        default: function(){ return [] }
      },
    }
  }
</script>

<style scoped>
</style>