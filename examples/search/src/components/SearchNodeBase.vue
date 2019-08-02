<template>
  <div>
    <div v-if="isShown" class="row">
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
  </div>
</template>

<script>
  export default {
    name: 'SearchNodeBase',
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
      },
      onToggle: {
        type: Function,
        default: () => {}
      },
      onOpen: {
        type: Function,
        default: () => {}
      },
      onClose: {
        type: Function,
        default: () => {}
      },
      eventHub: Object
    },
    data: function(){
      return {
        isOpen: false,
        isShown: true,
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
      },
      uuid: function(){
        return this.rowData.uuid
      }
    },
    created: function() {
      this.eventHub.$on('search-display-event', this.handleOpenEvent)
      this.eventHub.$on('search-reset', this.handleSearchResetEvent)
      this.eventHub.$on('search-hide-all', this.hide)
    },
    beforeDestroy: function(){
      this.eventHub.$off('search-display-event', this.handleOpenEvent)
      this.eventHub.$off('search-reset', this.handleSearchResetEvent)
      this.eventHub.$off('search-hide-all', this.hide)
    },
    methods: {
      toggle(){
        this.isOpen = !this.isOpen
        this.onToggle()
      },
      handleOpenEvent(path){
        if( path[0] != this.uuid ){ return }
        this.isShown = true
        if( this.isLastInThePath(path) ){ return }
        this.isOpen = true
      },
      handleSearchResetEvent(){
        this.isOpen = false
        this.isShown = true
      },
      hide(){
        this.isShown = false
      },
      isLastInThePath(path){
        return path.length == 1
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
