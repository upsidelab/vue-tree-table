<template>
  <tree-table class="table" v-bind:data="tableData">
    <template slot="rowTemplate" slot-scope="rowProps">
      <tree-row-with-order :rowData="rowProps.rowData" :order="['surname', 'name']" />
    </template>
  </tree-table>
</template>

<script>
  import TreeTable from '../../../../src/components/TreeTable'
  import TreeRowWithOrder from '../../../../src/components/TreeRowWithOrder'

  export default {
    name: 'HelloWorld',
    components: {TreeTable, TreeRowWithOrder},
    props: {
      tableData: Array
    }
  }
</script>
