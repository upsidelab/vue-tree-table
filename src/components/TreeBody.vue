<template>
  <div>
    <slot
      v-for="rowData in data"
      :rowData="rowData"
      :defaultOrder="columns"
      name="rowTemplate"
    >
      <tree-row
        :row-data="rowData"
        :default-order="columns"
      />
    </slot>
  </div>
</template>

<script>
  import TreeRow from './TreeRow'
  export default {
    name: 'TreeBody',
    components: {TreeRow},
    props: {
      data: {
        type: Array,
        default: function(){ return [] }
      },
      columns: {
        type: Array,
        default: function(){ return [] }
      },
    }
  }
</script>

<style scoped>
</style>