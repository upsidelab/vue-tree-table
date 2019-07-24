<template>
  <tree-row class="tree-row--red" :rowData="rowData" :defaultOrder="defaultOrder" />
</template>

<script>
  import TreeRow from '../../../../../src/components/TreeRow'

  export default {
    name: 'TreeRowRed',
    components: {TreeRow},
    props: {
      rowData: Object,
      defaultOrder: Array
    }
  }
</script>

<style scoped>
.tree-row--red{
  background-color: red;
}
</style>