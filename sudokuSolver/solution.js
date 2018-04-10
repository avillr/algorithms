function sudokuSolve(board) {
  // your code goes here
  // 3 rules
  // 1. every column has to have 1-9 in it
  // 2. every row has to have 1-9 in it
  // 3. every sub-board needs to have 1-9 in it

  let candidates = null
  let candidateRow = -1
  let candidateCol = -1
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === '.') {
        let newCandidates = getCandidates(r, c, board)
        // remember position with shortest set of candidates
        if (candidates === null || newCandidates.length < candidates.length) {
          candidates = newCandidates
          candidateRow = r
          candidateCol = c
        }
      }
    }
  }

  // no candidates === solved board
  if (candidates === null) {
    return true
  }

  // recursively solve board with each candidate substituted for empty space
  for (let i = 0; i < candidates.length; i++) {
    board[candidateRow][candidateCol] = candidates[i]
    if (sudokuSolve(board)) return true
    board[candidateRow][candidateCol] = '.'
  }

  return false
}

function getCandidates(r, c, board) {
  let candidates = []

  // for each character
  for (let char = 1; char < 10; char++) {
    let collision = false
    // check if collision
    for (let i = 0; i < 9; i++) {
      if (
        board[r][i] === `${char}` ||
        board[i][c] === `${char}` ||
        board[r - r % 3 + Math.floor(i / 3)][c - c % 3 + i % 3] === `${char}`
      ) {
        collision = true
        break
      }
    }

    // if no collision we add to candidates
    if (!collision) {
      candidates.push(`${char}`)
    }
  }

  return candidates
}

const testBoard = [
  ['.', '8', '9', '.', '4', '.', '6', '.', '5'],
  ['.', '7', '.', '.', '.', '8', '.', '4', '1'],
  ['5', '6', '.', '9', '.', '.', '.', '.', '8'],
  ['.', '.', '.', '7', '.', '5', '.', '9', '.'],
  ['.', '9', '.', '4', '.', '1', '.', '5', '.'],
  ['.', '3', '.', '9', '.', '6', '.', '1', '.'],
  ['8', '.', '.', '.', '.', '.', '.', '.', '7'],
  ['.', '2', '.', '8', '.', '.', '.', '6', '.'],
  ['.', '.', '6', '.', '7', '.', '.', '8', '.']
]

console.log(sudokuSolve(testBoard)) //false
