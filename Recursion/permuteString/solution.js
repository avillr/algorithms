const permuteString = str => {
  const permutations = []
  for (let i = 0; i < str.length; i++) {
    permuteStringRec(str, [i], str[i], permutations)
  }
  return permutations
}

const permuteStringRec = (str, visitedIndices, permutation, permutations) => {
  if (permutation.length === str.length) {
    permutations.push(permutation)
  } else {
    for (let i = 0; i < str.length; i++) {
      if (visitedIndices.includes(i)) continue
      permuteStringRec(
        str,
        [...visitedIndices, i],
        permutation + str[i],
        permutations
      )
    }
  }
}

module.exports = { permuteString }
