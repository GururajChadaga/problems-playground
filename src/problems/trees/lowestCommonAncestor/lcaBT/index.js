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
 * @param {TreeNode} q
 * @return {TreeNode}
 */

/*
  Time: O(n)
    DFS
  Space: O(n)
    recursion stack space
*/
const lcaBt = function (root, p, q) {
  const getLCA = (node) => {
    if (!node) return;
    if (node.val === p.val || node.val === q.val) return node;

    const left = getLCA(node.left);
    const right = getLCA(node.right);

    if (!left) return right;
    if (!right) return left;
    return node;
  };
  return getLCA(root, p, q);
};
