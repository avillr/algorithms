function minNumberOfJumps(array) {
  // Initialize all indexes as 'unreachable' with inifinite number of jumps needed to get there
  let jumps = Array(array.length).fill(Infinity)
  // Getting to the first index takes 0 jumps
  jumps[0] = 0
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      // Find smallest number of jumps to get to index i
      if (array[j] >= i - j) {
        jumps[i] = Math.min(jumps[i], jumps[j] + 1)
      }
    }
  }
  return jumps[jumps.length - 1]
}
