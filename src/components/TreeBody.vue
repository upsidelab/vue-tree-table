<template>
  <div>
    <template
      v-for="(rowData, index) in data"
      :rowData="rowData"
    >
      <tree-node
        v-if="!isLeaf(rowData)"
        :key="index"
        :row-data="rowData"
        :depth="0"
        :default-order="columns"
      >
        <template #nodeTemplate="nodeProps">
          <slot
            name="nodeTemplate"
            :nodeProps="nodeProps"
          />
        </template>

        <template #leafTemplate="leafProps">
          <slot
            name="leafTemplate"
            :leafProps="leafProps"
          />
        </template>
      </tree-node>

      <tree-leaf
        v-if="isLeaf(rowData)"
        :key="index"
        :row-data="rowData"
        :depth="0"
        :default-order="columns"
      >
        <template #leafTemplate="leafProps">
          <slot
            name="leafTemplate"
            :leafProps="leafProps"
          />
        </template>
      </tree-leaf>
    </template>
  </div>
</template>

<script>
  import TreeNode from './TreeNode'
  import TreeLeaf from './TreeLeaf'
  import isLeafFunc from '../utils/isLeaf'

  export default {
    name: 'TreeBody',
    components: {TreeLeaf, TreeNode},
    props: {
      data: {
        type: Array,
        default: function(){ return [] }
      },
      columns: {
        type: Array,
        default: function(){ return [] }
      },
    },
    methods: {
      isLeaf(rowData){
        return isLeafFunc(rowData)
      }
    }
  }
</script>

<style scoped>
</style>