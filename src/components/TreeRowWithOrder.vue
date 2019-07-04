<template>
  <tree-row v-bind:rowData="rowData" v-bind:defaultOrder="order" />
</template>

<script>
  import TreeRow from './TreeRow'

  export default {
    name: 'TreeRowWithOrder',
    components: {TreeRow},
    props: {
      rowData: Object,
      order: Array
    }
  }
</script>

<style scoped>

</style>