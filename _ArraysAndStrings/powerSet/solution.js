function powerset(array) {
  let superSet = [[]]
  array.forEach(el => {
    let superSetLength = superSet.length
    for (let i = 0; i < superSetLength; i++) {
        superSet.push(superSet[i].concat(el))
    }
  })
  return superSet
}

console.log(powerset([1, 2, 3]))
