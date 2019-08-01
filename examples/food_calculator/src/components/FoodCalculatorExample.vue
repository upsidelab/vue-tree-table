<template>
    <tree-table
            class="table"
            :columns="columns"
            :table-data="tableData"
    >
        <template #nodeTemplate="nodeProps">
            <food-calculator-node v-bind="nodeProps" :keys-to-calculate="keysToCalculate"/>
        </template>
    </tree-table>
</template>

<script>
    import TreeTable from '../../../../tree-table/src/package'
    import data from '../resources/data'
    import FoodCalculatorNode from "./FoodCalculatorNode";

    export default {
        name: 'FoodCalculatorExample',
        components: { TreeTable, FoodCalculatorNode },
        props: {
        },
        data: function() {
            return {
                tableData: data.tableData,
                columns: data.columns
            }
        },
        computed: {
            keysToCalculate: function () {
                return this.columns.map(el => el.id).slice(-4)
            }
        },
        methods: {
            calculateNodeValueForKey(node,key){
                if (!node.children) return

                node[key] = 0
                node.children.forEach(child => {
                       this.calculateNodeValueForKey(child, key)
                       node[key]+=child[key]
                })
            },
            calculateValuesForNode(node){
                this.keysToCalculate.forEach(key => {
                   this.calculateNodeValueForKey(node,key)
                })
            },
            computeInitialValuesForTable() {
                this.tableData.forEach(el => this.calculateValuesForNode(el))
            }
        },
        created() {
            this.computeInitialValuesForTable()
        }
    }
</script>

<style scoped>
    .table{
        width: 40%;
        margin: auto;
    }
</style>
