<template>
  <div class="row">
    <div
      v-for="column in columns"
      :key="column.id"
      class="cell"
    >
      {{ column.label }}
      <div
        v-if="sortingKeys.includes(column.id)"
        class="controls"
      >
        <div @click="sortChildrenBy({key: column.id, asc: true})">
          ^
        </div>
        <div @click="sortChildrenBy({key: column.id, asc: false})">
          v
        </div>
      </div>
    </div>
  </div>
</template>


<script>
    import sortTable from "./sortTable";

    export default {
        name: 'SortingHeader',
        props: {
            columns: {
                type: Array,
                default: () => { return [] }
            },
            tableData: {
                type: Array,
                default: () => { return [] }
            },
        },
        computed: {
            columnsIds(){
                return this.columns.map(column => column.id);
            },
            sortingKeys(){
                return this.columnsIds.slice(0,2)
            }
        },
        methods : {
            sortChildrenBy(params) {
                sortTable(this.tableData, params)
            },
        }
    }
</script>

<style scoped>
    .row{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        padding-left: 15px;
        border: solid 0.5px silver;
        border-left: none;
        border-right: none;
        margin-top: -1px;
        background-color: aliceblue;
    }
    .controls{
        display: flex;
        margin-left: 5px;
    }
    .cell{
        flex-grow: 1;
        flex-basis: 0;
        display: flex;
        border: solid 0.5px silver;
        border-left: none;
        border-right: none;
        box-sizing: border-box;
        margin-top: -1px;
        text-align: left;
    }
</style>
