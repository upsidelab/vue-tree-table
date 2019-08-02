function isLeaf(rowData){
  if( !rowData.children ){
    return true
  }
  return false
}

export default isLeaf