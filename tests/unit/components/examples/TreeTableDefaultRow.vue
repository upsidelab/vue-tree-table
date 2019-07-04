<template>
  <tree-table class="table" v-bind:data="tableData">
  </tree-table>
</template>

<script>
  import TreeTable from '../../../../src/components/TreeTable'
  import TreeRow from '../../../../src/components/TreeRow'

  export default {
    name: 'HelloWorld',
    components: {TreeTable, TreeRow},
    props: {
      tableData: Array
    }
  }
</script>
