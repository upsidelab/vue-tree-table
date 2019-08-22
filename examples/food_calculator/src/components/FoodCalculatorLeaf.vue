<template>
    <div class="row">
        <div
                v-for="key in order"
                :key="key"
                :style="{ 'flex-grow': getWidth(key) }"
                class="cell"
        >
            <input
                    class="input"
                    v-if="isKeyEditable(key)"
                    v-model.number="rowData[key]"
            >
            <div v-else> {{ rowData[key] }} </div>
        </div>
        <div @click="deleteNode(rowData.uuid)" class="cell red" :style="{ 'flex-grow': getWidth('actions') }">✖</div>
    </div>
</template>

<script>

  export default {
    name: 'FoodCalculatorLeaf',
    props: {
      rowData: {
        type: Object,
        default: () => { return {} }
      },
      defaultOrder: {
        type: Array,
        default: () => { return [] }
      },
      isKeyEditable:{
        type: Function,
        default: () => {}
      },
      deleteNode:{
        type: Function,
        default: () => {}
      },
      columns: {
        type: Array,
        default: () => { return [] }
      }
    },
    computed: {
      order: function(){
        return this.defaultOrder.slice(0,9)
      }
    },
    methods: {
      getWidth(columnId){
        return this.columns.find((col) => col.id == columnId ).width
      }
    }
  }
</script>

<style scoped>
    input {
        width: 60px;
        display: inline-flex;
        border: none
    }

    .red{
        color: red;
        text-align: right;
        padding-right: 0.9rem;
    }
</style>
