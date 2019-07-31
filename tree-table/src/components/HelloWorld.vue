<template>
  <tree-table
    class="table"
    :columns="columns"
    :table-data="tableData"
  >
    <!--<template #headerTemplate="headerProps">-->
    <!--{{headerProps}}-->
    <!--</template>-->

    <!--<template #leafTemplate="leafProps">-->
    <!--{{leafProps}}-->
    <!--</template>-->

    <!--<template #nodeTemplate="nodeProps">-->
    <!--{{nodeProps}}-->
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
