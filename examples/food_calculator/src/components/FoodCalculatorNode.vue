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
        <div @click="addNode()">+</div>
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
            depth: {
                type: Number,
                default: 0
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
            deleteNode: {
                type: Function,
                default: () => {}
            }
        },
        data: function () {
            return {
                isOpen: false
            }
        },
        computed: {
            columnWithOpenButton: function () {
                return this.defaultOrder[0]
            },
            childrenColumns: function () {
                return this.defaultOrder.slice(2)
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
            addNode(){
                this.rowData.children.push(
                    {ingredient: '', carbs: 0, proteins: 0, fat: 0, kcal: 0},
                )
            },
            toggle() {
                this.isOpen = !this.isOpen
                this.onOpen()
            }
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
