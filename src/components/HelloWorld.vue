<template>
  <tree-table
    class="table"
    :columns="columns"
    :data="tableData"
  >
    <!--<template slot="headerTemplate" slot-scope="headerProps">-->
    <!--<TreeColumnHeaderRed :columnData="headerProps.columnData" />-->
    <!--</template>-->

    <!--<template slot="rowTemplate" slot-scope="rowProps">-->
    <!--<tree-row-red :rowData="rowProps.rowData" :defaultOrder="rowProps.defaultOrder"/>-->
    <!--</template>-->
  </tree-table>
</template>

<script>
import TreeTable from './TreeTable'

export default {
  name: 'HelloWorld',
  components: {TreeTable},
  props: {
  },
  data: function(){
    return {
      tableData: [{name: 'Ziuta', surname: 'Kozak' }, {name: 'Koziolek', surname: 'Matolek'}],
      columns: [{label: 'Name', id: 'name'}, {label: 'Surname', id: 'surname'}]
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
