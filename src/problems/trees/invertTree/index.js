/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

/*
  Time; O(n)
  Space: O(n)
   auxiliary stack space for recursion
*/
const invertTree = function (node) {
  if (node?.left || node?.right) {
    invertTree(node.left);
    invertTree(node.right);
  }
  if (node) {
    const tmp = node?.left;
    node.left = node.right;
    node.right = tmp;
  }
  return node;
};
