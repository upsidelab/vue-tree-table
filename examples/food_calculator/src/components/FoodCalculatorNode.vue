<template>
    <div class="row">
        <div
                class="cell"
                @click="toggle"
                :style="{ 'flex-grow': getWidth('open_button') }"
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
        <div
                v-for="key in order"
                :key="key"
                class="cell"
                :style="{ 'flex-grow': getWidth(key) }"
        >
            <input
                class="input"
                v-if="isKeyEditable(key)"
                v-model="rowData[key]"
            >
            <div v-else> {{ rowData[key] }} </div>
        </div>
        <div class="cell" :style="{'flex-grow': getWidth('actions')}">
          <div class="action green" @click="addNodeAndOpen()">✚</div>
          <div class="action red" @click="deleteNode(rowData.uuid)">✖</div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'FoodCalculatorNode',
        props: {
          rowData: {
            type: Object,
            default: () => {
              return {}
            }
          },
          defaultOrder: {
            type: Array,
            default: () => {
              return []
            }
          },
          isKeyEditable:{
            type: Function,
            default: () => {}
          },
          keysToCalculate:{
            type: Array,
            default: () => {
              return []
            }
          },
          onOpen: {
            type: Function,
            default: () => {}
          },
          onToggle: {
            type: Function,
            default: () => {}
          },
          deleteNode: {
            type: Function,
            default: () => {}
          },
          addNode: {
            type: Function,
            default: () => {}
          },
          columns: {
            type: Array,
            default: () => { return [] }
          }
        },
        data: function () {
            return {
                isOpen: false
            }
        },
        watch: {
            'rowData.children': {
                deep: true,
                handler() {
                    this.calculateValuesFromChildren()
                }
            }
        },
        computed: {
          order: function(){
            return this.defaultOrder.slice(1,9)
          }
        },
        methods: {
            calculateValuesFromChildren(){
                this.keysToCalculate.forEach(key => {
                    this.rowData[key] =  this.rowData.children.reduce((acc, child) => acc + child[key], 0)
                })
            },
            addNodeAndOpen() {
                this.addNode(this.rowData.children)
                this.open()
            },
            open() {
                this.isOpen = true
                this.onOpen()
            },
            toggle() {
              this.isOpen = !this.isOpen
              this.onToggle()
            },
            getWidth(columnId){
              return this.columns.find((col) => col.id == columnId ).width
            }
        }
    }
</script>

<style scoped>
    @import "../../../../tree-table/src/components/common.css";

    input {
        border: none;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    .open-button {
        float: left;
        display: inline;
        margin-right: 10px;
    }

    .closed::before{
        content: "▸";
    }

    .open::before{
        content: "▾";
    }

    .action{
        display: inline-block;
        margin: 0.125rem;
    }

    .red{
        color: red;
    }

    .green{
        color: green;
    }
</style>
