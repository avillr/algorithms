function flattenDictionary(dict) {
  const flatDictionary = {}
  buildFlattenedDictionary(dict, '', flatDictionary)
  return flatDictionary
}

function buildFlattenedDictionary(dict, prefix, flatDictionary) {
  for (let key in dict) {
    // get correct prefix
    let prefixedKey
    if (prefix === '') {
      prefixedKey = key
    } else if (key === '') {
      prefixedKey = prefix
    } else {
      prefixedKey = `${prefix}.${key}`
    }
    // flatten
    if (typeof dict[key] !== 'object') {
      flatDictionary[prefixedKey] = dict[key]
    } else {
      buildFlattenedDictionary(dict[key], prefixedKey, flatDictionary)
    }
  }
}
