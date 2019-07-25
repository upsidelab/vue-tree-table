<template>
  <div>
    <div class="row">
      <slot
        v-for="column in columns"
        :columnData="column"
        name="headerTemplate"
      >
        <TreeColumnHeader :column-data="column" />
      </slot>
    </div>

    <TreeBody
      :data="data"
      :columns="columnsOrder"
    >
      <template
        slot="rowTemplate"
        slot-scope="rowProps"
      >
        <slot
          name="rowTemplate"
          :defaultOrder="rowProps.defaultOrder"
          :rowData="rowProps.rowData"
        />
      </template>
    </TreeBody>
  </div>
</template>

<script>
  import TreeBody from './TreeBody'
  import TreeColumnHeader from './TreeColumnHeader'

  export default {
    name: 'TreeTable',
    components: {TreeBody, TreeColumnHeader},
    props: {
      data: {
        type: Array,
        default: () => { return {} }
      },
      columns: {
        type: Array,
        default: () => { return [] }
      }
    },
    computed: {
      columnsOrder(){
        return this.columns.map(column => column.id);
      }
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
  }
</style>