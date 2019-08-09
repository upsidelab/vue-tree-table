<template>
    <div class="row" v-on:click="changeUrl(url)">
        <div
                class="indentation"
                :style="{ width: leftPadding + 'px' }"
        />
        <div class="cell"> {{ rowData.label }}</div>
    </div>
</template>

<script>
  export default {
    name: 'MenuLeaf',
    props: {
      rowData: {
        type: Object,
        default: () => { return {} }
      },
      depth: {
        type: Number,
        default: 0
      }
    },
    computed: {
      leftPadding: function () {
        return this.depth*15
      },
      url(){
        return this.rowData.href
      }
    },
    methods: {
      changeUrl(url){
        window.location.href = url;
      }
    }
  }
</script>

<style scoped>
  @import "../../../../tree-table/src/components/common.css";

  .row:hover{
      background-color: #EEE2DF;
  }

  .indentation{
      border: solid 0.5px silver;
      border-left: none;
      border-right: none;
      margin-top: -1px;
  }
</style>
