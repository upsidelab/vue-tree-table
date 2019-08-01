<template>
    <tree-table
            class="table"
            :columns="columns"
            :table-data="tableData"
    >
        <template #nodeTemplate="nodeProps">
            <food-calculator-node v-bind="nodeProps"
                                  :should-modify-key="shouldModifyKeyFunction(nodeProps.depth)"
                                  :calculate-values-from-children="calculateValuesFromChildren"/>
        </template>

        <template #leafTemplate="leafProps">
            <food-calculator-leaf v-bind="leafProps"
                                  :should-modify-key="shouldModifyKeyFunction(leafProps.depth)"/>
        </template>
    </tree-table>
</template>

<script>
    import TreeTable from '../../../../tree-table/src/package'
    import data from '../resources/data'
    import FoodCalculatorNode from "./FoodCalculatorNode";
    import FoodCalculatorLeaf from "./FoodCalculatorLeaf";

    export default {
        name: 'FoodCalculatorExample',
        components: { TreeTable, FoodCalculatorNode, FoodCalculatorLeaf },
        props: {
        },
        data: function() {
            return {
                tableData: data.tableData,
                columns: data.columns,
                filedModification: {
                    0: ['day', 'day_name'],
                    1: ['meal'],
                    2: ['ingredient', 'carbs','proteins', 'fat', 'kcal']
                },
                keysToCalculate: ['carbs','proteins', 'fat', 'kcal']
            }
        },
        methods: {
            shouldModifyKeyFunction(depth){
                const keysToModify = this.filedModification[depth] || []
                return (key) => keysToModify(depth).includes(key)
            },
            calculateValuesFromChildren(node){
                this.keysToCalculate.forEach(key => {
                    node[key] =  node.children.reduce((acc, child) => acc + child[key], 0)
                })
            },
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
