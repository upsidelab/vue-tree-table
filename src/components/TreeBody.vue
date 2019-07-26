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
      </tree-node>

      <tree-leaf
        v-if="isLeaf(rowData)"
        :key="index"
        :row-data="rowData"
        :depth="0"
        :default-order="columns"
      >
        <template
          slot="leafTemplate"
          slot-scope="leafProps"
        >
          <slot
            name="leafTemplate"
            v-bind="leafProps"
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