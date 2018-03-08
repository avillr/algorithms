function boggle (boggle, trie) {
  let rows = boggle.getNumRows()
  let cols = boggle.getNumCols()

  let charStack = []
  let words = []

  function findWords (row, col, node) {
    if (visited[row][col]) return
    if (!node || !node.has(boggle.charAt(row, col))) return
    node = node.next(boggle.charAt(row, col))

    charStack.push(boggle.charAt(row, col))
    visited[row][col] = true

    for (let dx = -1; dx <= 1; dx++) {
      let c = col + dx
      if (c < 0 || c >= cols) continue

      for (let dy = -1; dy <= 1; dy++) {
        let r = row + dy
        if (r < 0 || r >= rows) continue
        if (dx === 0 && dy === 0) continue

        findWords(r, c, node)
      }
    }

    if (node.isEndOfWord) {
      let s = ''
      for (let i = 0; i < charStack.length; i++) {
        s = s + charStack[i]
      }
      words.push(s)
    }

    visited[row][col] = false
    charStack.pop()
  }

  // Initialize each position as not visited
  let visited = []
  for (let row = 0; row < rows; row++) {
    visited[row] = []
    for (let col = 0; col < cols; col++) {
      visited[row][col] = false
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      findWords(r, c, trie)
    }
  }

  return words
};
