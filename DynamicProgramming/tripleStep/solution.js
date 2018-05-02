const tripleStep = n => {
  return waysToStep(n, {})
}

const waysToStep = (n, memo) => {
  if (n < 0) {
    return 0
  } else if (n === 0) {
    return 1
  } else if (memo[n] !== undefined) {
    return memo[n]
  } else {
    memo[n] =
      waysToStep(n - 1, memo) +
      waysToStep(n - 2, memo) +
      waysToStep(n - 3, memo)
    return memo[n]
  }
}

module.exports = { tripleStep }
