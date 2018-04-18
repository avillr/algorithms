const rodCutting = (length, values) => {
  const optimalValues = [0]
  for (let i = 1; i < length; i++) {
    optimalValues[i] = -Infinity
    for (let k = 0; k < i; k++) {
      optimalValues[i] = Math.max(
        optimalValues[i],
        values[k] + optimalValues[i - k - 1]
      )
    }
  }
  return optimalValues[length]
}
