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
            <div> {{ rowData[key] }} </div>
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
            keysToCalculate: {
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
        watch: {
            'rowData.children': {
                deep: true,
                handler() {
                    this.calculateValues()
                }
            }
        },
        methods: {
            calculateValueForKey(key){
                return this.rowData.children.reduce((acc, child) => acc + child[key], 0)
            },
            calculateValues(){
                this.keysToCalculate.forEach(key => {
                    this.rowData[key] =  this.calculateValueForKey(key)
                })
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
