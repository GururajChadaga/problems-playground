/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function (root) {
  const dfs = (node) => {
    if (!node) return '#';
    return `${node.val},${dfs(node.left)},${dfs(node.right)}`;
  };
  return dfs(root);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function (data) {
  const serialized = data.split(',');
  let curr = 0;
  const dfs = () => {
    if (serialized[curr] === '#') {
      curr++;
      return null;
    }
    const node = new TreeNode(+serialized[curr]);
    curr++;
    node.left = dfs();
    node.right = dfs();
    return node;
  };
  return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
