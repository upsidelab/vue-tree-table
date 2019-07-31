<template>
  <tree-table class="table" :table-data="tableData" :columns="columns"/>
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
