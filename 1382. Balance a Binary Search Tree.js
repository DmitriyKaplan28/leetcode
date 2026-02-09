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
 * @return {TreeNode}
 */
var balanceBST = function (root) {
    const arr = [];
    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        arr.push(node.val);
        inorder(node.right);
    }
    inorder(root);

    function build(l, r) {
        if (l > r) return null;
        const mid = (l + r) >> 1;
        const node = new TreeNode(arr[mid]);
        node.left = build(l, mid - 1);
        node.right = build(mid + 1, r);
        return node;
    }
    return build(0, arr.length - 1);
};
