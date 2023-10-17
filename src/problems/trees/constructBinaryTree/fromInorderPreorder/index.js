/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

const buildTree = (preorder, inorder) => {
  if (!preorder.length || !inorder.length || inorder.length !== preorder.length)
    return;

  const root = preorder[0];
  const inorderRootIndex = inorder.indexOf(root);
  return new TreeNode(
    root,
    buildTree(
      preorder.slice(1, inorderRootIndex + 1),
      inorder.slice(0, inorderRootIndex)
    ),
    buildTree(
      preorder.slice(1 + inorderRootIndex),
      inorder.slice(inorderRootIndex + 1)
    )
  );
};
