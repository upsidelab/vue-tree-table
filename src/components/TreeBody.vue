<template>
    <div>
      <tree-row v-for="rowData in data" v-bind:rowData="rowData" v-bind:defaultOrder="defaultOrder" />
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