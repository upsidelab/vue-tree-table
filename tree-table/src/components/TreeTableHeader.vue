<template>
  <div class="row header">
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
  @import "common.css";

  .header{
    text-transform: uppercase;
    font-weight: bold;
  }
</style>
