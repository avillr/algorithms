/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
const inorderSuccessor = (root, p) => {
  let successor = null
  while (root !== null) {
    if (p.val < root.val) {
      successor = root
      root = root.left
    } else {
      root = root.right
    }
  }
  return successor
}
