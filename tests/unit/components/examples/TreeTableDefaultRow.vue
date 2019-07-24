<template>
  <tree-table class="table" :data="tableData" :columns="columns">
  </tree-table>
</template>

<script>
  import TreeTable from '../../../../src/components/TreeTable'
  import TreeRow from '../../../../src/components/TreeRow'

  export default {
    name: 'HelloWorld',
    components: {TreeTable, TreeRow},
    props: {
      tableData: Array,
      columns: Array
    }
  }
</script>
