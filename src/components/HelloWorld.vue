<template>
  <tree-table
    class="table"
    :columns="columns"
    :data="tableData"
  >
    <!--<template slot="headerTemplate" slot-scope="headerProps">-->
    <!--<TreeTableHeaderRed :columns="headerProps.columns" />-->
    <!--</template>-->

    <!--<template slot="leafTemplate" slot-scope="leafProps">-->
      <!--<tree-node-red :rowData="leafProps.rowData" :defaultOrder="leafProps.defaultOrder" :depth="leafProps.depth"/>-->
    <!--</template>-->

    <!--<template slot="rowTemplate" slot-scope="rowProps">-->
    <!--<tree-row-red :rowData="rowProps.rowData" :defaultOrder="rowProps.defaultOrder"/>-->
    <!--</template>-->
  </tree-table>
</template>

<script>
import TreeTable from './TreeTable'
import TreeNodeRed from '../../tests/unit/components/examples/custom_components/TreeNodeRed'

export default {
  name: 'HelloWorld',
  components: {TreeTable, TreeNodeRed},
  props: {
  },
  data: function(){
    return {
      tableData: [
        {name: 'Ziuta', surname: 'Kozak', children: [
          {name: 'Czerwony Kapturek', surname: 'Kozak'}
          ]},
        {name: 'Koziolek', surname: 'Matolek', children: [
            { name: 'Timon', surname: 'Matolek', children: [ {name: 'Timon Junior', surname: 'Matolek'} ]}
          ]},
        {name: 'Pumba', surname: 'unknown'}
        ],
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
