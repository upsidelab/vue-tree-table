<template>
    <div class="row">
      <div class="cell" v-for="key in defaultOrder" >
        {{ rowData[key] }}
      </div>
    </div>
</template>

<script>
  export default {
    name: 'TreeRow',
    props: {
      rowData: Object,
      defaultOrder: Array
    }
  }
</script>

<style scoped>
  .row{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .cell{
    flex-grow: 1;
    flex-basis: 0;
    border: solid 0.5px silver;
    box-sizing: border-box;
    margin-top: -1px;
    margin-left: -1px;
  }
</style>
