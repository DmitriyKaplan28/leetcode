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
var sumRootToLeaf = function (root) {
    let total = 0;

    const dfs = (node, curr) => {
        if (!node) return;
        const val = (curr << 1) | node.val;
        if (!node.left && !node.right) {
            total += val;
            return;
        }
        dfs(node.left, val);
        dfs(node.right, val);
    };

    dfs(root, 0);
    return total;
};