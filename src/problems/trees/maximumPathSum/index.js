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
  Time: O(H)
    H is the height of the BST
    average: H = logn
  Space: O(H)
    recursive stack space
 */
const maxPathSum = function (root) {
  let maxPathSum = -Infinity;

  const dfs = (node) => {
    if (!node) return 0;

    // if sum is negative, take 0
    const leftMaxPathSum = Math.max(0, dfs(node.left)),
      rightMaxPathSum = Math.max(0, dfs(node.right));
    maxPathSum = Math.max(
      maxPathSum,
      node.val + leftMaxPathSum + rightMaxPathSum
    );
    return node.val + Math.max(leftMaxPathSum, rightMaxPathSum);
  };

  dfs(root);
  return maxPathSum;
};
