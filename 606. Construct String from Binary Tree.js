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
 * @return {string}
 */
var tree2str = function (root) {
  if (!root) return "";

  const val = root.val.toString();

  const leftStr = tree2str(root.left);
  const rightStr = tree2str(root.right);

  if (!root.left && !root.right) {
    return val;
  }

  if (!root.left && root.right) {
    return `${val}()(${rightStr})`;
  }

  if (root.left && !root.right) {
    return `${val}(${leftStr})`;
  }

  return `${val}(${leftStr})(${rightStr})`;
};
