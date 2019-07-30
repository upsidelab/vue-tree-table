<template>
  <tree-table class="table" :data="tableData" :columns="columns">
  </tree-table>
</template>

<script>
  import TreeTable from '../../../../src/components/TreeTable'
  import TreeNode from '../../../../src/components/TreeNode'

  export default {
    name: 'HelloWorld',
    components: {TreeTable, TreeNode},
    props: {
      tableData: Array,
      columns: Array
    }
  }
</script>
