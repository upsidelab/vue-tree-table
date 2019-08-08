<template>
  <div class="row header">
    <div
      v-for="column in columns"
      :key="column.id"
      class="cell"
      :style="{ 'flex-grow': column.width }"
    >
      {{ column.label }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FoodCalculatorTableHeader',
    props: {
      columns: {
        type: Array,
        default: () => { return [] }
      },
    }
  }
</script>

<style scoped>
  @import "../../../../tree-table/src/components/common.css";

  .header{
    text-transform: uppercase;
    font-weight: bold;
  }
</style>
