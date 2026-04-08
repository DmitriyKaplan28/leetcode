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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) return true;

    const q = [root.left, root.right];
    let idx = 0;

    while (idx < q.length) {
        const a = q[idx++];
        const b = q[idx++];

        if (!a && !b) continue;
        if (!a || !b) return false;
        if (a.val !== b.val) return false;

        q.push(a.left);
        q.push(b.right);
        q.push(a.right);
        q.push(b.left);
    }

    return true;
};