<template>
  <tree-table class="table" v-bind:data="tableData">

    <template slot="headerTemplate">
      <TreeColumnHeader label="Surname" />
      <TreeColumnHeader label="Name" />
    </template>

    <template slot="rowTemplate" slot-scope="rowProps">
      <tree-row-with-order :rowData="rowProps.rowData" :order="['surname', 'name']" />
    </template>

  </tree-table>
</template>

<script>
import TreeTable from './TreeTable'
import TreeRowWithOrder from './TreeRowWithOrder'
import TreeColumnHeader from './TreeColumnHeader'

export default {
  name: 'HelloWorld',
  components: {TreeColumnHeader, TreeTable, TreeRowWithOrder},
  props: {
  },
  data: function(){
    return {
      tableData: [{name: 'Ziuta', surname: 'Kozak' }, {name: 'Koziolek', surname: 'Matolek'}]
    }
  }
}
</script>

<style scoped>
  .table{
    width: 40%;
    margin: auto;
  }
</style>
