/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

/*
  Time: O(n + m)
    worst case if both trees are different
    m and n are heights of both the trees
  Space: O(n)
    auxiliary stack space for recursive calls
*/
const checkSubtree = (tree1, tree2) => {
  if (!tree1 && !tree2) return true;
  if (tree1?.val !== tree2?.val) return false;
  return (
    checkSubtree(tree1.left, tree2.left) &&
    checkSubtree(tree1.right, tree2.right)
  );
};

const isSameTree = function (p, q) {
  return checkSubtree(p, q);
};
