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
const isValidBsST = function (root) {
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

const isValidBST = function (root) {
  const inorder = [];
  const traverseInOrder = (node) => {
    if (!node) return null;
    traverseInOrder(node.left);
    inorder.push(node.val);
    traverseInOrder(node.right);
  };

  traverseInOrder(root);

  let isValidBST = true;
  for (let i = 1; i < inorder.length; i++) {
    if (inorder[i] <= inorder[i - 1]) {
      isValidBST = false;
      break;
    }
  }
  return isValidBST;
};
