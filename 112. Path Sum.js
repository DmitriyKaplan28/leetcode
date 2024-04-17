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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  function checkSum(node, sum) {
    if (!node) return false;
    if (!node.left && !node.right) return sum + node.val === targetSum;
    return (
      checkSum(node.left, sum + node.val) ||
      checkSum(node.right, sum + node.val)
    );
  }
  return checkSum(root, 0);
};
