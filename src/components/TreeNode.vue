<template>
  <div>
    <TreeDefaultNode :row-data="rowData" :default-order="defaultOrder" :depth="depth" :is-open="isOpen" v-on:openClicked="toggle" />
    <template v-if="isOpen">
      <template
        v-for="(child, index) in rowData.children"
      >
        <tree-node
          v-if="!isLeaf(child)"
          :key="index"
          :depth="depth+1"
          :row-data="child"
          :default-order="defaultOrder">
          <template slot="leafTemplate" slot-scope="leafProps">
            <slot
                    name="leafTemplate"
                    :defaultOrder="leafProps.defaultOrder"
                    :rowData="leafProps.rowData"
                    :depth="leafProps.depth"
            />
          </template>
        </tree-node>


        <tree-leaf
          v-if="isLeaf(child)"
          :key="index"
          :depth="depth+1"
          :row-data="child"
          :default-order="defaultOrder">
          <template slot="leafTemplate" slot-scope="leafProps">
            <slot
                    name="leafTemplate"
                    :defaultOrder="leafProps.defaultOrder"
                    :rowData="leafProps.rowData"
                    :depth="leafProps.depth"
            />
          </template>
        </tree-leaf>
      </template>
    </template>
  </div>
</template>

<script>
  import TreeNode from './TreeNode'
  import TreeLeaf from './TreeLeaf'
  import isLeafFunc from '../utils/isLeaf'
  import TreeDefaultNode from './TreeDefaultNode'

  export default {
    name: 'TreeNode',
    components: {TreeDefaultNode, TreeLeaf, TreeNode},
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
    data: function(){
      return {
        isOpen: false
      }
    },
    methods: {
      isLeaf(rowData){
        return isLeafFunc(rowData)
      },
      toggle(){
        this.isOpen = !this.isOpen
      }
    }
  }
</script>

