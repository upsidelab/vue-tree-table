<template>
  <div>
    <div class="row">
      <slot name="headerTemplate"></slot>
    </div>

    <TreeBody v-bind:data="data">
      <template slot="rowTemplate" slot-scope="rowProps">
        <slot name="rowTemplate" :rowData="rowProps.rowData">
        </slot>
      </template>
    </TreeBody>
  </div>
</template>

<script>
  import TreeBody from './TreeBody'
  import TreeRowWithOrder from './TreeRowWithOrder'

  export default {
    name: 'TreeTable',
    components: {TreeBody, TreeRowWithOrder},
    props: {
      data: Array
    }
  }
</script>

<style scoped>
  .row{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
</style>