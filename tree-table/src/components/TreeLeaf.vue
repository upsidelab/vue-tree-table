<template>
  <div>
    <slot
      name="leafTemplate"
      :row-data="rowData"
      :default-order="defaultOrder"
      :depth="depth"
    >
      <TreeDefaultLeaf
        :row-data="rowData"
        :default-order="defaultOrder"
        :depth="depth"
      />
    </slot>
  </div>
</template>

<script>
  import TreeDefaultLeaf from './TreeDefaultLeaf'
  import { uuid } from 'vue-uuid';
  export default {
    name: 'TreeLeaf',
    components: {TreeDefaultLeaf},
    props: {
      rowData: {
        type: Object,
        default: () => { return {} }
      },
      defaultOrder: {
        type: Array,
        default: () => { return {} }
      },
      depth: {
        type: Number,
        default: 0
      }
    },
    created() {
        this.rowData.uuid = uuid.v4()
    }
  }
</script>

