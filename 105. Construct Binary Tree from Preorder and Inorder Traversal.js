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
var buildTree = function (preorder, inorder) {
  if (!preorder || !inorder || preorder.length === 0 || inorder.length === 0)
    return null;
  const inorderIndexByValue = new Map();
  for (let i = 0; i < inorder.length; i++) {
    inorderIndexByValue.set(inorder[i], i);
  }

  let preorderIndex = 0;
  function buildSubtree(inLeft, inRight) {
    if (inLeft > inRight) return null;
    const rootValue = preorder[preorderIndex++];
    const root = new TreeNode(rootValue);
    const inorderRootIndex = inorderIndexByValue.get(rootValue);
    root.left = buildSubtree(inLeft, inorderRootIndex - 1);
    root.right = buildSubtree(inorderRootIndex + 1, inRight);
    return root;
  }

  return buildSubtree(0, inorder.length - 1);
};

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]));
console.log(buildTree([-1], [-1]));

