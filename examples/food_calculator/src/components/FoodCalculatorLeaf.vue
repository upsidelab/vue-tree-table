<template>
    <div class="row">
        <div
                v-for="key in defaultOrder"
                :key="key"
                class="cell"
        >
            <input
                    class="input"
                    v-if="shouldModifyKey(key)"
                    v-model.number="rowData[key]"
            >
            <div v-else> {{ rowData[key] }} </div>
        </div>
        <div @click="deleteNode(rowData.uuid)">X</div>
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
            depth: {
                type: Number,
                default: 0
            },
            shouldModifyKey:{
                type: Function,
                default: () => {}
            },
            deleteNode:{
                type: Function,
                default: () => {}
            },
        },
        computed: {
            leftPadding: function () {
                return this.depth*15
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
