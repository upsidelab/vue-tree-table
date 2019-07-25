<template>
  <div class="cell">
    {{ columnData.label }}
  </div>
</template>

<script>
  export default {
    name: 'TreeColumnHeader',
    props: {
      columnData: {
        type: Object,
        default: () => { return {} }
      },
    }
  }
</script>

<style scoped>

  .cell{
    flex-grow: 1;
    flex-basis: 0;
    border: solid 0.5px silver;
    border-left: none;
    border-right: none;
    box-sizing: border-box;
    margin-top: -1px;
    background-color: aliceblue;
    text-align: left;
  }
</style>
