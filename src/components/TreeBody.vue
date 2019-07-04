<template>
    <div>
      <slot v-for="rowData in data" :rowData="rowData" name="rowTemplate">
        <tree-row :rowData="rowData" v-bind:defaultOrder="defaultOrder" />
      </slot>
    </div>
</template>

<script>
  import TreeRow from './TreeRow'
  export default {
    name: 'TreeBody',
    components: {TreeRow},
    props: {
      data: Array
    },
    computed: {
      defaultOrder: function(){
        if( this.data.length == 0 ){
          return []
        }
        return Object.keys(this.data[0])
      }
    }
  }
</script>

<style scoped>
</style>