const numberOfBinaryTreeTopologies = (n, cache = { 0: 1 }) => {
  if (n in cache) return cache[n]
  let topologies = 0
  for (let i = 0; i < n; i++) {
    let leftTopologies = numberOfBinaryTreeTopologies(i, cache)
    let rightTopologies = numberOfBinaryTreeTopologies(n - i - 1, cache)
    topologies += leftTopologies * rightTopologies
  }
  cache[n] = topologies
  return topologies
}

module.exports = { numberOfBinaryTreeTopologies }
