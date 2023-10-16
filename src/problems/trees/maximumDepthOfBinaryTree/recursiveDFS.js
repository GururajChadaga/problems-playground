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
 * @return {number}
 */

/*
  Time: O(n)
  Space: O(1) + O(n)
    O(n) for auxiliary stack space for recursive calls
*/
const getMaxDepth = (node) => {
  if (!node) return 0;
  return 1 + Math.max(getMaxDepth(node.left), getMaxDepth(node.right));
};

const maxDepthRecursiveDFS = function (root) {
  return getMaxDepth(root);
};
