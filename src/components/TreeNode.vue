<template>
  <div>
    <div class="row">
      <div class="cell">
        <div
          class="open-button"
          @click="toggle"
        >
          <div
            v-if="!isOpen"
            class="closed"
          >
            >
          </div>
          <div
            v-if="isOpen"
            class="opened"
          >
            v
          </div>
        </div>
        <div>
          {{ rowData[columnWithOpenButton] }}
        </div>
      </div>
      <div
        v-for="key in reguralColumns"
        :key="key"
        class="cell"
      >
        {{ rowData[key] }}
      </div>
    </div>
    <template v-if="isOpen">
      <template
        v-for="(child, index) in rowData.children"
      >
        <tree-node
          v-if="!isLeaf(child)"
          :key="index"
          :row-data="child"
          :default-order="defaultOrder"
        />
        <tree-leaf
          v-if="isLeaf(child)"
          :key="index"
          :row-data="child"
          :default-order="defaultOrder"
        />
      </template>
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
      },
    },
    data: function(){
      return {
        isOpen: false
      }
    },
    computed: {
      columnWithOpenButton: function(){
        return this.defaultOrder[0];
      },
      reguralColumns: function(){
        return this.defaultOrder.slice(1);

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

  .open-button{
    float: left;
    display: inline;
  }
</style>
