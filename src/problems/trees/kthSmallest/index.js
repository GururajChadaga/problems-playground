/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

/*
  Time: O(n)
    DFS
  Space: O(n) + O(n)
    inorder array
    auxiliary stack space for recursion
 */
const kthSmallest = function (root, k) {
  const inorder = [];
  const traverse = (node) => {
    if (!node) return null;
    traverse(node.left);
    inorder.push(node.val);
    traverse(node.right);
  };
  traverse(root);
  traverse(root);
  return inorder[k - 1];
};

/*
  Time: O(n)
    DFS
  Space: O(n)
    auxiliary stack space for recursion
    note: this can be optimized further with Morris Traversal
      by elminating the recursive stack space => O(1)
 */
const kthSmallestSpaceOptimized = function (root, k) {
  let count = 0,
    kthSmallest;
  const traverse = (node) => {
    if (!node) return null;
    traverse(node.left);
    count++;
    if (count === k) kthSmallest = node.val;
    traverse(node.right);
  };
  traverse(root);
  traverse(root);
  return kthSmallest;
};
