/*
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0) return []

  let output = []
  let ceil = 0
  let floor = matrix.length - 1
  let left = 0
  let right = matrix[0].length - 1

  while (ceil <= floor && left <= right) {
    // collect top level
    for (let c = left; c <= right; c++) {
      output.push(matrix[ceil][c])
    }
    ceil++

    //collect right most
    for (let r = ceil; r <= floor; r++) {
      output.push(matrix[r][right])
    }
    right--

    //collect bottom
    if (ceil <= floor) {
      for (let c = right; c >= left; c--) {
        output.push(matrix[floor][c])
      }
    }
    floor--

    //collect left most
    if (left <= right) {
      for (let r = floor; r >= ceil; r--) {
        output.push(matrix[r][left])
      }
    }
    left++
  }

  return output
}

// let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// let matrix = [[1, 2], [3, 4]]
let matrix = [[2, 3, 4], [5, 6, 7], [8, 9, 10], [11, 12, 13], [14, 15, 16]]

console.log(spiralOrder(matrix))
