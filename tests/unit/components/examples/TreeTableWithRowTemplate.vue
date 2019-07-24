<template>
  <tree-table class="table" :data="tableData" :columns="columns">
    <template slot="rowTemplate" slot-scope="rowProps">
      <tree-row-red :rowData="rowProps.rowData" :defaultOrder="rowProps.defaultOrder" />
    </template>
  </tree-table>
</template>

<script>
  import TreeTable from '../../../../src/components/TreeTable'
  import TreeRowRed from './custom_components/TreeRowRed'

  export default {
    name: 'HelloWorld',
    components: {TreeTable, TreeRowRed},
    props: {
      tableData: Array,
      columns: Array
    }
  }
</script>
