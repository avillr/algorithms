const riverSizes = matrix => {
  const sizes = []
  const visited = matrix.map(row => row.map(value => false))
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (visited[y][x]) continue
      checkRiver(y, x, matrix, visited, sizes)
    }
  }
  return sizes
}

const checkRiver = (y, x, matrix, visited, sizes) => {
  let currentRiverSize = 0
  const nodesToExplore = [[y, x]]
  while (nodesToExplore.length) {
    const [y, x] = nodesToExplore.pop()
    if (visited[y][x]) continue
    visited[y][x] = true
    if (matrix[y][x] === 0) continue
    currentRiverSize++
    // push all possible neighbors to stack
    getPossibleNeighbors(y, x, matrix, visited, nodesToExplore)
  }
  if (currentRiverSize > 0) sizes.push(currentRiverSize)
}

const getPossibleNeighbors = (y, x, matrix, visited, nodesToExplore) => {
  if (y > 0) nodesToExplore.push([y - 1, x])
  if (y < matrix.length - 1) nodesToExplore.push([y + 1, x])
  if (x > 0) nodesToExplore.push([y, x - 1])
  if (x < matrix[0].length - 1) nodesToExplore.push([y, x + 1])
}

module.exports = { riverSizes }
