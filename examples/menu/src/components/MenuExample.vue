<template>
  <tree-table
          class="table"
          :columns="columns"
          :table-data="tableData"
  >

    <template #leafTemplate="leafProps">
      <MenuLeaf v-bind="leafProps" />
    </template>

  </tree-table>
</template>

<script>
  import TreeTable from '../../../../tree-table/src/package'
  import MenuLeaf from './MenuLeaf'

  export default {
    name: 'MenuExample',
    components: {MenuLeaf, TreeTable},
    data: function(){
      return {
        tableData: [
          {label: 'First Category', children: [ {label: 'First Category Page', href: "#first-category-page"}]},
          {label: 'Second Category', children: [ {label: 'Second Category Page', href: "#second-category-page"}]},
          {label: 'No category page', href: "#no-category-page"},
        ],
        columns: [{label: 'Menu', id: 'label'}]
      }
    }
  }
</script>

<style scoped>
  .table{
    width: 15%;
    margin: auto;
  }
</style>