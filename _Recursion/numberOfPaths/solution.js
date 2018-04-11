// time: O(n^2) space: O(n^2)
function numOfPathsToDest(n) {
  if (n < 3) return 1

  // keep track of num paths to given vertex
  const memo = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j === 0) memo[i] = []
      memo[i][j] = -1
    }
  }

  return numOfPathsTo(n - 1, n - 1, memo)
}

function numOfPathsTo(x, y, memo) {
  if (x < 0 || y < 0) {
    return 0
  } else if (x < y) {
    memo[x][y] = 0
  } else if (memo[x][y] !== -1) {
    return memo[x][y]
  } else if (x === 0 && y === 0) {
    memo[x][y] = 1
  } else {
    memo[x][y] = numOfPathsTo(x - 1, y, memo) + numOfPathsTo(x, y - 1, memo)
  }
  return memo[x][y]
}
