<template>
  <div class="cell">
    {{ columnData.label }}
  </div>
</template>

<script>
  export default {
    name: 'TreeColumnHeaderRed',
    props: {
      columnData: Object,
    }
  }
</script>

<style scoped>

  .cell{
    flex-grow: 1;
    flex-basis: 0;
    border: solid 0.5px silver;
    box-sizing: border-box;
    margin-top: -1px;
    margin-left: -1px;
    background-color: palevioletred;
  }
</style>
