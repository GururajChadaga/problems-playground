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
 * @return {number[][]}
 */

/*
  Time; O(n)
    loop
  Space: O(n)
   queue
*/
const levelOrderIterative = function (root) {
  if (!root) return [];
  const lot = [],
    queue = [root];

  while (queue.length) {
    const qLen = queue.length,
      level = [];
    for (let i = 1; i <= qLen; i++) {
      const node = queue.shift();
      if (node?.left) queue.push(node.left);
      if (node?.right) queue.push(node.right);
      level.push(node?.val);
    }
    lot.push(level);
  }
  return lot;
};

/*
  Time; O(n)
  Space: O(n)
   auxiliary stack space for recursion
*/
const levelOrderRecursive = function (root) {
  const lot = [];
  const traverse = (node, level) => {
    if (!node) return null;
    if (lot[level]?.length) {
      lot[level].push(node.val);
    } else {
      lot[level] = [node.val];
    }
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  };
  traverse(root, 0);
  return lot;
};
