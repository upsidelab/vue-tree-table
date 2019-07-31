<template>
  <tree-table class="table" :table-data="tableData" :columns="columns">
    <template #rowTemplate="rowProps">
      <tree-node-red v-bind="rowProps" />
    </template>
  </tree-table>
</template>

<script>
  import TreeTable from '../../../../src/components/TreeTable'
  import TreeNodeRed from './custom_components/TreeNodeRed'

  export default {
    name: 'HelloWorld',
    components: {TreeTable, TreeNodeRed},
    props: {
      tableData: Array,
      columns: Array
    }
  }
</script>
