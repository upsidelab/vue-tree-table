function calculateNodeValueForKey(node,key){
    if (!node.children) return node[key]

    return node[key] = node.children.reduce(
        (acc, child) => acc + calculateNodeValueForKey(child, key),
        0
    )
}

function calculateValuesForNode(node, keysToCalculate){
    keysToCalculate.forEach(key => {
        calculateNodeValueForKey(node,key)
    })
}

export default function(tableData, keysToCalculate) {
    tableData.forEach(el => calculateValuesForNode(el, keysToCalculate))
}