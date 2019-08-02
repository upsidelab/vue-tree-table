const deleteNodeRecursively =  function(table,uuid){
    if (!table) return

    const index = table.findIndex(el => el.uuid === uuid)
    index > -1 ?
        table.splice(index, 1) :
        table.forEach(el => deleteNodeRecursively(el.children,uuid))
}

export default deleteNodeRecursively
