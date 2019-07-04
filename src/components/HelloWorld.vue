<template>
  <tree-table class="table" v-bind:data="tableData">
    <!--<header>-->
      <!--<column-header />-->
      <!--<column-header />-->
    <!--</header>-->
    <!--<body-template>-->
      <!--<row-template />-->
    <!--</body-template>-->
    <!--<footer />-->
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
      tableData: [{name: 'Ziuta', surname: 'Kozak' }, {name: 'Koziolek', surname: 'Matolek'}]
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
