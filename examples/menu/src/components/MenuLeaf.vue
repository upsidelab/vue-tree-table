<template>
    <div class="row" v-on:click="changeUrl(rowData.href)">
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
  .row{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding-left: 15px;
    background-color: none;
  }

  .cell{
    text-align: left;
    flex-grow: 1;
    flex-basis: 0;
    border: solid 0.5px silver;
    border-left: none;
    border-right: none;
    box-sizing: border-box;
    margin-top: -1px;
    margin-left: -1px;
  }

  .indentation{
    border: solid 0.5px silver;
    border-left: none;
    border-right: none;
    margin-top: -1px;
  }
</style>
