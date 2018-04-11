/*
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  // find heighest wall to right
  let rightMax = 0
  let rightWalls = []
  for (let i = height.length - 1; i >= 0; i--) {
    rightMax = Math.max(rightMax, height[i])
    rightWalls[i] = rightMax
  }

  // find heighest wall to left
  let leftMax = 0
  let leftWalls = []
  for (let i = 0; i < height.length; i++) {
    leftMax = Math.max(leftMax, height[i])
    leftWalls[i] = leftMax
  }

  // find volume over each block for sum
  let sum = 0
  for (let i = 1; i < height.length; i++) {
    sum += Math.min(leftWalls[i], rightWalls[i]) - height[i]
  }

  return sum
}

// let heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
// console.log(trap(heights)) //6
