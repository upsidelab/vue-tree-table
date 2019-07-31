<template>
  <tree-table class="table" :tableData="tableData" :columns="columns">
    <template slot="rowTemplate" slot-scope="rowProps">
      <tree-node-red :rowData="rowProps.rowData" :defaultOrder="rowProps.defaultOrder" />
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
