<template>
  <div>
    <slot
      name="headerTemplate"
      :columns="columns"
    >
      <TreeTableHeader :columns="columns" />
    </slot>

    <TreeBody
      :table-data="tableData"
      :columns="columnsOrder"
    >
      <template #nodeTemplate="nodeProps">
        <slot
          name="nodeTemplate"
          v-bind="nodeProps"
        />
      </template>


      <template #leafTemplate="leafProps">
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
  import { uuid } from 'vue-uuid';

  export default {
    name: 'TreeTable',
    components: {TreeBody, TreeTableHeader},
    props: {
      tableData: {
        type: Array,
        default: () => { return [] }
      },
      columns: {
        type: Array,
        default: () => { return [] }
      }
    },
    computed: {
      columnsOrder(){
        return this.columns.map(column => column.id);
      },
    },
    created() {
        this.enrichTableData()
    },
    methods: {
      addUniqueId(data){
        data.uuid = uuid.v4()
        if (data.children) {
            data.children.forEach(child => this.addUniqueId(child))
        }
      },
      enrichTableData() {
          this.tableData.forEach(el => this.addUniqueId(el))
      }
    },
  }
</script>

<style scoped>
</style>