<template>
  <tree-table
    class="table"
    :columns="columns"
    :table-data="tableData"
  >
    <template #headerTemplate="headerProps">
      <SortingHeader
        v-bind="headerProps"
        :sort-table="sortTable"
      />
    </template>

    <template #nodeTemplate="nodeProps">
      <SortingNode v-bind="nodeProps" />
    </template>
  </tree-table>
</template>

<script>
    import TreeTable from '../../../../tree-table/src/package'
    import SortingNode from './SortingNode'
    import SortingHeader from "./SortingHeader";
    import data from '../resources/data'
    import sortData from "../utils/sortData";

    export default {
        name: 'SortingExample',
        components: {TreeTable, SortingNode, SortingHeader},
        props: {
        },
        data: function() {
            return {
                tableData: data.tableData,
                columns: data.columns
            }
        },
        methods: {
            sortTable(params) {
                sortData(this.tableData, params)
            },
        }
    }
</script>

<style scoped>
    .table{
        width: 50%;
        margin: auto;
    }
</style>
