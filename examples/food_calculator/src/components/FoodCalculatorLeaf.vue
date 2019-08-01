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
    import {uuid} from "vue-uuid";

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
            shouldModifyKey:{
                type: Function,
                default: () => {}
            },
            deleteNode:{
                type: Function,
                default: () => {}
            },
        },
        created() {
            this.rowData.uuid = uuid.v4()
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
</style>
