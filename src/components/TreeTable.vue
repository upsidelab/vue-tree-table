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
        slot="nodeTemplate"
        slot-scope="nodeProps"
      >
        <slot
          name="nodeTemplate"
          v-bind="nodeProps"
        />
      </template>


      <template
        slot="leafTemplate"
        slot-scope="leafProps"
      >
        <slot
          name="leafTemplate"
          v-bind="leafProps"
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