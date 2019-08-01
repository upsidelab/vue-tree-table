<template>
    <tree-table
            class="table"
            :columns="columns"
            :table-data="tableData"
    >
        <template #nodeTemplate="nodeProps">
            <food-calculator-node v-bind="nodeProps"
                                  :should-modify-key="shouldModifyKeyFunction(nodeProps.depth)"
                                  :delete-node="deleteNode"
                                  :calculate-values-from-children="calculateValuesFromChildren"/>
        </template>

        <template #leafTemplate="leafProps">
            <food-calculator-leaf v-bind="leafProps"
                                  :delete-node="deleteNode"
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
            deleteNode(uuid){
                this.deleteFromTable(this.tableData, uuid)
            },
            deleteFromTable(table,uuid){
                if (!table) return

                const index = table.findIndex(el => el.uuid === uuid)
                index > -1 ?
                    table.splice(index, 1) :
                    table.forEach(el => this.deleteFromTable(el.children,uuid))
            },
            shouldModifyKeyFunction(depth){
                const keysToModify = this.filedModification[depth] || []
                return (key) => keysToModify.includes(key)
            },
            calculateValuesFromChildren(node){
                this.keysToCalculate.forEach(key => {
                    node[key] =  node.children.reduce((acc, child) => acc + child[key], 0)
                })
            },
            calculateNodeValueForKey(node,key){
                if (!node.children) return node[key]

                return node[key] = node.children.reduce(
                    (acc, child) => acc + this.calculateNodeValueForKey(child, key),
                    0
                )
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
