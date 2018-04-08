/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * return number
 */
const longestUnivaluePath = function(root) {
  let longestPath = [0] // to maintain reference to longest path when passed in to dfs
  if (root !== null) dfs(root, longestPath)
  return longestPath[0]
}

const dfs = (node, longestPath) => {
  let leftPathLength = node.left === null ? 0 : dfs(node.left, longestPath)
  let rightPathLength = node.right === null ? 0 : dfs(node.right, longestPath)

  let newLeftPathLength =
    node.left !== null && node.left.val === node.val ? leftPathLength + 1 : 0
  let newRightPathLength =
    node.right !== null && node.right.val === node.val ? rightPathLength + 1 : 0

  longestPath[0] = Math.max(
    longestPath[0],
    newLeftPathLength + newRightPathLength
  )
  return Math.max(newLeftPathLength, newRightPathLength)
}
