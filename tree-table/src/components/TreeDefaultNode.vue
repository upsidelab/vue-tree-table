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
          />
          <div
            v-if="isOpen"
            class="open"
          />
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
    name: 'TreeDefaultNode',
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
  @import "common.css";

  .open-button{
    float: left;
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
