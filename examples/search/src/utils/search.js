function search(data, query){
  function searchForPaths(paths, currentPath, currentEl){
    const newPath = [...currentPath]
    newPath.push(currentEl.uuid)

    if( elContainsQuery(currentEl, query)){
      paths.push(newPath)
    }
    if(isLeaf(currentEl)){ return}

    currentEl.children.forEach((el) => {
      searchForPaths(paths, newPath, el)
    })
  }

  let paths = []
  data.forEach(el => {
    searchForPaths(paths, [], el)
  })
  return paths
}

function elContainsQuery(el, query){
  const contains = Object.keys(el).filter(key => key!="uuid").reduce((acc, key) => {
    const value = el[key]
    return acc || isSubstring(value, query)
  }, false)
  return contains
}

function isSubstring(base, query){
  if( !query ){ return false }
  if( typeof base !== "string"){ return false }
  return base.toLowerCase().includes(query.toLowerCase())
}

function isLeaf(el) {
  return !el.children
}


export default search