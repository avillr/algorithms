function root(x, n) {
  if (x === 0) return 0

  let lowerBound = 0
  let upperBound = Math.max(1, x)
  let currentGuess = (upperBound + lowerBound) / 2

  while (currentGuess - lowerBound >= 0.001) {
    if (Math.pow(currentGuess, n) > x) {
      upperBound = currentGuess
    } else {
      lowerBound = currentGuess
    }
    currentGuess = (upperBound + lowerBound) / 2
  }
  return currentGuess
}
