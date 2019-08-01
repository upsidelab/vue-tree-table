<template>
  <div>
    <tree-table
            class="table"
            :columns="columns"
            :table-data="paginatedData"
    />
    <div class="pagination">
      <div class="pagination--button" v-if="!isFirstPage()" v-on:click="prevPage()">Prev</div>
      <div class="pagination--button" v-if="!isLastPage()" v-on:click="nextPage()">Next</div>
    </div>
  </div>
</template>

<script>
  import TreeTable from '../../../../tree-table/src/package'
  import {tableData, columns} from '../resources/data'

  export default {
    name: 'PaginationExample',
    components: {TreeTable},
    data: function(){
      return {
        tableData,
        columns,
        currentPage: 0,
        recordsPerPage: 3
      }
    },
    computed: {
      paginatedData: function () {
        const firstIndexOnPage = this.currentPage*this.recordsPerPage
        const firstIndexOnNextPage = (this.currentPage+1)*this.recordsPerPage
        return this.tableData.slice(firstIndexOnPage, firstIndexOnNextPage)
      }
    },
    methods: {
      nextPage(){
        this.currentPage = this.currentPage+1
      },
      prevPage(){
        this.currentPage = this.currentPage-1
      },
      isFirstPage(){
        return this.currentPage == 0
      },
      isLastPage(){
        const firstIndexOnNextPage = (this.currentPage+1)*this.recordsPerPage
        return firstIndexOnNextPage > this.tableData.length;
      }
    }
  }
</script>

<style scoped>
  .table{
    width: 40%;
    margin: auto;
  }

  .pagination{
    display: flex;
    width: 10%;
    margin: auto;
  }

  .pagination--button{
    margin: 5px;
  }
</style>