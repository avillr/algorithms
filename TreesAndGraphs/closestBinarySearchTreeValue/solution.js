/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
const closestValue = function(root, target) {
  let closestValue = root.val
  while (root != null) {
    if (Math.abs(target - root.val) < Math.abs(target - closestValue)) {
      closestValue = root.val
    }
    root = root.val > target ? root.left : root.right
  }
  return closestValue
}
