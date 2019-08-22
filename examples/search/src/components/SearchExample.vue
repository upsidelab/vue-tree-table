<template>
  <div>
    <div class="search">
      Search: <SearchInput :table-data="tableData" :event-hub="eventHub" />
    </div>
    <tree-table
            class="table"
            :columns="columns"
            :table-data="tableData"
    >
      <template #nodeTemplate="nodeProps">
        <SearchNode v-bind="nodeProps" :event-hub="eventHub" />
      </template>

      <template #leafTemplate="leafProps">
        <SearchLeaf v-bind="leafProps" :event-hub="eventHub" />
      </template>

    </tree-table>
  </div>
</template>

<script>
  import TreeTable from 'vue-tree-table-component'
  import {tableData, columns} from '../resources/data'
  import SearchNode from './SearchNode'
  import Vue from 'vue'
  import SearchInput from './SearchInput'
  import SearchLeaf from './SearchLeaf'


  export default {
    name: 'SearchExample',
    components: {SearchLeaf, SearchInput, SearchNode, TreeTable},
    data: function(){
      return {
        tableData,
        columns,
        eventHub: new Vue()
      }
    },
  }
</script>

<style scoped>
  .table{
    margin: auto;
  }
  .search{
    margin-left: -1rem;
    margin-bottom: 1rem;
    width: 40%;
    text-align: right;
    padding-right: 1rem;
    font-size: 16px;
  }
</style>