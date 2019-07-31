<template>
  <div class="row">
    <div
      v-for="column in columns"
      :key="column.id"
      class="cell"
    >
      {{ column.label }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TreeTableHeader',
    props: {
      columns: {
        type: Array,
        default: () => { return [] }
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

  .cell{
    flex-grow: 1;
    flex-basis: 0;
    border: solid 0.5px silver;
    border-left: none;
    border-right: none;
    box-sizing: border-box;
    margin-top: -1px;
    text-align: left;
  }
</style>
