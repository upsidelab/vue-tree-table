<template>
  <div>
    <div class="row">
      <div
        class="indentation"
        :style="{ width: leftPadding + 'px' }"
      />
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
    computed: {
      columnWithOpenButton: function(){
        return this.defaultOrder[0]
      },
      reguralColumns: function(){
        return this.defaultOrder.slice(1)
      },
      leftPadding: function () {
        return this.depth*15
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
    padding-left: 15px;
    border: solid 0.5px silver;
    border-left: none;
    border-right: none;
    margin-top: -1px;
  }

  .indentation{
    border: solid 0.5px silver;
    border-left: none;
    border-right: none;
    margin-top: -1px;
  }

  .cell{
    text-align: left;
    flex-grow: 1;
    flex-basis: 0;
    box-sizing: border-box;
  }

  .open-button{
    float: left;
    display: inline;
    margin-right: 10px;
  }
</style>
