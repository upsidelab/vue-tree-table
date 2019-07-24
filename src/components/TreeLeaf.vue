<template>
  <div class="row">
    <div
            v-for="key in defaultOrder"
            :key="key"
            class="cell"
    >
      {{ rowData[key] }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TreeLeaf',
    props: {
      rowData: {
        type: Object,
        default: () => { return {} }
      },
      defaultOrder: {
        type: Array,
        default: () => { return {} }
      }
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
    border-left: none;
    border-right: none;
    box-sizing: border-box;
    margin-top: -1px;
    margin-left: -1px;
  }
</style>
