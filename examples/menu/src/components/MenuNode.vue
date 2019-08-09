<template>
  <div>
    <div class="row menu-node" @click="toggle">
      <div
              class="indentation"
              :style="{ width: leftPadding + 'px' }"
      />
      <div class="cell">
        <div class="menu-label">
          {{ rowData[column] }}
        </div>
        <div
                class="open-button"
        >
          <div
                  v-if="!isOpen"
                  class="closed"
          >
          </div>
          <div
                  v-if="isOpen"
                  class="open"
          >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MenuNode',
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
    },
    data: function(){
      return {
        isOpen: false
      }
    },
    computed: {
      column: function(){
        return this.defaultOrder[0]
      },
      leftPadding: function () {
        return this.depth*16
      }
    },
    methods: {
      toggle(){
        this.isOpen = !this.isOpen
        this.onToggle()
      }
    }
  }
</script>

<style scoped>
  .menu-node{
    padding-right: 1.5rem;
  }

  .menu-node:hover{
    background-color: #EEE2DF;
  }

  .menu-label{
    display: inline;
  }

  .open-button{
    float: right;
    display: inline;
    padding-right: 0.5rem;
  }

  .closed::before{
    content: "▸";
  }

  .open::before{
    content: "▾";
  }
</style>