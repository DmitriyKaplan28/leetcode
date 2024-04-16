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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) return [];

  function getInOrder(node, sequence) {
    node.left && getInOrder(node.left, sequence);
    sequence.push(node.val);
    node.right && getInOrder(node.right, sequence);
  }

  const sequence = [];
  getInOrder(root, sequence);
  return sequence;
};
