function isLeaf(rowData){
  if( !rowData.children || rowData.children.length == 0 ){
    return true
  }
  return false
}

export default isLeaf