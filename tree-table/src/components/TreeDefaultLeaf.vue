<template>
  <div class="row">
    <div
      class="indentation"
      :style="{ width: leftPadding + 'px' }"
    />
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
    name: 'TreeDefaultLeaf',
    props: {
      rowData: {
        type: Object,
        default: () => { return {} }
      },
      defaultOrder: {
        type: Array,
        default: () => { return [] }
      },
      depth: {
        type: Number,
        default: 0
      }
    },
    computed: {
      leftPadding: function () {
        return this.depth*16
      }
    }
  }
</script>

<style scoped>
  @import "common.css";

</style>
