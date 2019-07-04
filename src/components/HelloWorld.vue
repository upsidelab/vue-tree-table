<template>
  <tree-table class="table" v-bind:data="tableData">
    <!--<header>-->
      <!--<column-header />-->
      <!--<column-header />-->
    <!--</header>-->
    <template slot="rowTemplate" slot-scope="rowProps">
      <tree-row-with-order :rowData="rowProps.rowData" :order="['surname', 'name']" />
    </template>
    <!--<footer />-->
  </tree-table>
</template>

<script>
import TreeTable from './TreeTable'
import TreeRowWithOrder from './TreeRowWithOrder'

export default {
  name: 'HelloWorld',
  components: {TreeTable, TreeRowWithOrder},
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
