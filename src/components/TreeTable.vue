<template>
  <div>
    <slot
      name="headerTemplate"
      :columns="columns"
    >
      <TreeTableHeader :columns="columns" />
    </slot>

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


      <template slot="leafTemplate" slot-scope="leafProps">
        <slot
                name="leafTemplate"
                :defaultOrder="leafProps.defaultOrder"
                :rowData="leafProps.rowData"
                :depth="leafProps.depth"
        />
      </template>
    </TreeBody>
  </div>
</template>

<script>
  import TreeBody from './TreeBody'
  import TreeTableHeader from './TreeTableHeader'

  export default {
    name: 'TreeTable',
    components: {TreeBody, TreeTableHeader},
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
</style>