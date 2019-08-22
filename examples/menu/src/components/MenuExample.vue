<template>
  <tree-table
          class="table"
          :columns="columns"
          :table-data="tableData"
  >

    <template #leafTemplate="leafProps">
      <MenuLeaf v-bind="leafProps" />
    </template>

    <template #nodeTemplate="nodeProps">
      <MenuNode v-bind="nodeProps" />
    </template>

  </tree-table>
</template>

<script>
  import TreeTable from 'vue-tree-table-component'
  import MenuLeaf from './MenuLeaf'
  import MenuNode from './MenuNode'

  export default {
    name: 'MenuExample',
    components: {MenuNode, MenuLeaf, TreeTable},
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
    width: 25%;
    margin: auto;
    color: #0F084B;
  }
</style>