<template>
    <div class="row">
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
        <div
                v-for="key in defaultOrder"
                :key="key"
                class="cell"
        >
            <input
                class="input"
                v-if="shouldModifyKey(key)"
                v-model="rowData[key]"
            >
            <div v-else> {{ rowData[key] }} </div>
        </div>
        <div @click="deleteNode(rowData.uuid)">X</div>
        <div @click="addNodeAndOpen()">+</div>
    </div>
</template>

<script>

    import {uuid} from "vue-uuid";

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
            shouldModifyKey:{
                type: Function,
                default: () => {}
            },
            calculateValuesFromChildren:{
                type: Function,
                default: () => {}
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
                    this.calculateValuesFromChildren(this.rowData)
                }
            }
        },
        methods: {
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
            }
        },
        created() {
            this.rowData.uuid = uuid.v4()
        }
    }
</script>

<style scoped>
    input {
        display: inline-flex;
        border: none
    }
    .row {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        padding-left: 15px;
        border: solid 0.5px silver;
        border-left: none;
        border-right: none;
        margin-top: -1px;
    }

    .cell {
        text-align: left;
        flex-grow: 1;
        flex-basis: 0;
        box-sizing: border-box;
    }

    .open-button {
        float: left;
        display: inline;
        margin-right: 10px;
    }
</style>
