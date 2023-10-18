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
  Time: O(H)
    H is the height of the BST
    average: H = logn
  Space: O(H)
    recursive stack space
 */
const lcaBstRecursive = function (root, p, q) {
  const getLCA = (node) => {
    if (p.val < node.val && q.val < node.val) return getLCA(node.left);
    else if (p.val > node.val && q.val > node.val) return getLCA(node.right);
    return node;
  };
  return getLCA(root, p, q);
};

/*
  Time: O(H)
    H is the height of the BST
    average: H = logn
  Space: O(1)
 */
const lcaBstIterative = function (root, p, q) {
  let curr = root;
  while (true) {
    if (p.val < curr.val && q.val < curr.val) curr = curr.left;
    else if (p.val > curr.val && q.val > curr.val) curr = curr.right;
    else return curr;
  }
};
