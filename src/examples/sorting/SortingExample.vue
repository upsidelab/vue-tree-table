<template>
  <tree-table
    class="table"
    :columns="columns"
    :tableData="tableData"
  >
    <template #headerTemplate="headerProps">
      <SortingHeader v-bind="headerProps" />
    </template>

    <template #nodeTemplate="nodeProps">
      <SortingNode v-bind="nodeProps" />
    </template>
  </tree-table>
</template>

<script>
    import TreeTable from '../../components/TreeTable'
    import SortingNode from './SortingNode'
    import SortingHeader from "./SortingHeader";
    import data from './data'

    export default {
        name: 'HelloWorld',
        components: {TreeTable, SortingNode, SortingHeader},
        props: {
        },
        data: function() {
            return {
                tableData: data.tableData,
                columns: data.columns
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
