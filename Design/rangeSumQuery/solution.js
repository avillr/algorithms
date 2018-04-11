/*
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) return

  this.matrix = matrix
  this.rows = matrix.length
  this.cols = matrix[0].length

  // row sums
  for (let r = 0; r < this.rows; r++) {
    for (let c = 1; c < this.cols; c++) {
      this.matrix[r][c] = this.matrix[r][c] + this.matrix[r][c - 1]
    }
  }
}

/*
 * @param {number} row
 * @param {number} col
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function(row, col, val) {
  let original =
    col === 0
      ? this.matrix[row][0]
      : this.matrix[row][col] - this.matrix[row][col - 1]

  let diff = val - original

  for (let c = col; c < this.cols; c++) {
    this.matrix[row][c] += diff
  }
}

/*
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let sum = 0
  for (let r = row1; r <= row2; r++) {
    sum +=
      col1 === 0
        ? this.matrix[r][col2]
        : this.matrix[r][col2] - this.matrix[r][col1 - 1]
  }
  return sum
}

// naive solution
// /*
//  * @param {number[][]} matrix
//  */
// var NumMatrix = function(matrix) {
//   this.matrix = []
//   for (let row = 0; row < matrix.length; row++) {
//     this.matrix[row] = []
//     for (let col = 0; col < matrix[row].length; col++) {
//       this.matrix[row][col] = matrix[row][col]
//     }
//   }
// }

// /*
//  * @param {number} row
//  * @param {number} col
//  * @param {number} val
//  * @return {void}
//  */
// NumMatrix.prototype.update = function(row, col, val) {
//   this.matrix[row][col] = val
// }

// /*
//  * @param {number} row1
//  * @param {number} col1
//  * @param {number} row2
//  * @param {number} col2
//  * @return {number}
//  */
// NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
//   let sum = 0
//   for (let row = row1; row <= row2; row++) {
//     for (let col = col1; col <= col2; col++) {
//       sum += this.matrix[row][col]
//     }
//   }
//   return sum
// }

let matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

let myMatrix = new NumMatrix(matrix)
myMatrix.update(0, 0, 9)
