<template>
  <div>
    <div class="row">
      <div
        v-for="key in defaultOrder"
        :key="key"
        class="cell"
      >
        {{ rowData[key] }}
      </div>
    </div>
    <template v-for="child in rowData.children">
      <tree-node
              v-if="!isLeaf(child)"
              :row-data="child"
              :default-order="defaultOrder"
      />
      <tree-leaf
              v-if="isLeaf(child)"
              :row-data="child"
              :default-order="defaultOrder"
      />
    </template>
  </div>
</template>

<script>
  import TreeNode from './TreeNode'
  import TreeLeaf from './TreeLeaf'
  import isLeafFunc from '../utils/isLeaf'

  export default {
    name: 'TreeNode',
    components: {TreeLeaf, TreeNode},
    props: {
      rowData: {
        type: Object,
        default: () => { return {} }
      },
      defaultOrder: {
        type: Array,
        default: () => { return [] }
      }
    },
    methods: {
      isLeaf(rowData){
        return isLeafFunc(rowData)
      }
    }
  }
</script>

<style scoped>
  .row{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .cell{
    flex-grow: 1;
    flex-basis: 0;
    border: solid 0.5px silver;
    border-left: none;
    border-right: none;
    box-sizing: border-box;
    margin-top: -1px;
    margin-left: -1px;
  }
</style>
