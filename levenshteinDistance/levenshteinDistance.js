function levenshteinDistance (strA, strB) {
  if (strA.length === 0) return strB.length
  if (strB.length === 0) return strA.length

  const minEdits = []

  // Build base 2D array for min num of edits
  for (let i = 0; i < strB.length + 1; i++) {
    const row = []
    for (let j = 0; j < strA.length + 1; j++) {
      row.push(j)
    }
    row[0] = 1
    minEdits.push(row)
  }
  for (let i = 1; i < strB.length + 1; i++) {
    for (let j = 1; j < strA.length + 1; j++) {
      if (strB[i - 1] === strA[j - 1]) {
        minEdits[i][j] = minEdits[i - 1][j - 1]
      } else {
        minEdits[i][j] = 1 + Math.min(minEdits[i - 1][j - 1], minEdits[i - 1][j], minEdits[i][j - 1])
      }
    }
  }
  return minEdits[strB.length][strA.length]
}
