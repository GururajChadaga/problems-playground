const getInorderTraversal = (root) => {
  const inorder = [];

  const traverse = (node) => {
    if (!node) return null;
    traverse(node.left);
    inorder.push(node.val);
    traverse(node.right);
  };
  traverse(root);
  return inorder;
};
