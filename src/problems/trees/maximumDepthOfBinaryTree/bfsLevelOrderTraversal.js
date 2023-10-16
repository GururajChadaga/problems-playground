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
  Time; O(n)
    loop
  Space: O(n)
   queue
*/

const maxDepthBFS = function (root) {
  if (!root) return 0;

  const queue = [root];
  let level = 0;
  while (queue.length) {
    const qLength = queue.length;
    for (let i = 1; i <= qLength; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    level++;
  }
  return level;
};
