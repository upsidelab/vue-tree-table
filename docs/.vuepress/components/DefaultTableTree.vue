<template>
  <tree-table
          class="table"
          :columns="columns"
          :table-data="tableData" />
</template>

<script>
  import TreeTable from '../../../tree-table/src/components/TreeTable'
  import { uuid} from 'vue-uuid'

  export default {
    name: 'DefaultTableTree',
    components: {TreeTable},
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
    width: 60%;
    margin: auto;
  }
</style>
