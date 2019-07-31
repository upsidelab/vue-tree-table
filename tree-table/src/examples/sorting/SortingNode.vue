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
            <div
                    v-if="childrenColumns.includes(key)"
                    style="display: flex; flex-direction: row"
            >
                <div @click="sortChildrenBy({key, asc: true})">
                    ^
                </div>
                <div @click="sortChildrenBy({key, asc: false})">
                    v
                </div>
            </div>
            <div v-else>
                {{ rowData[key] }}
            </div>
        </div>
    </div>
</template>

<script>
    import sortTable from "./sortTable";

    export default {
        name: 'SortingNode',
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
            onOpen: {
                type: Function,
                default: () => {
                }
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
        methods: {
            sortChildrenBy(params) {
                sortTable(this.rowData.children, params)
            },
            toggle() {
                this.isOpen = !this.isOpen
                this.onOpen()
            }
        }
    }
</script>

<style scoped>
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
