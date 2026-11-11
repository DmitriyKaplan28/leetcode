/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  const stack = [];

  for (const value of nums) {
    const node = new TreeNode(value);
    while (stack.length > 0 && stack[stack.length - 1].val < value) {
      node.left = stack.pop();
    }
    if (stack.length > 0) {
      stack[stack.length - 1].right = node;
    }
    stack.push(node);
  }

  return stack.length === 0 ? null : stack[0];
};
