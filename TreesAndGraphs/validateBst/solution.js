/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @return {boolean}
 */

const isValidBST = function(root) {
  return checkBST(root, -Infinity, Infinity)
}

const checkBST = (root, minVal, maxVal) => {
  if (root === null) return true
  if (root.val >= maxVal || root.val <= minVal) return false
  return (
    checkBST(root.left, minVal, root.val) &&
    checkBST(root.right, root.val, maxVal)
  )
}
