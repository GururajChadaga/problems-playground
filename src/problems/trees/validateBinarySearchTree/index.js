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
 * @return {boolean}
 */

/*
  Time: O(n)
  Space: O(n)
 */
const isValidBST = function (root) {
  const getIsValid = (node, min, max) => {
    if (!node) return true;
    if (node.val >= max || node.val <= min) return false;
    return (
      getIsValid(node.left, min, node.val) &&
      getIsValid(node.right, node.val, max)
    );
  };

  return getIsValid(root, -Infinity, Infinity);
};

//TODO: Alt solution: check if inorder traversal is striclty increasing.
