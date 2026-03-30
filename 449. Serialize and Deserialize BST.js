/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (!root) return '';

    const out = [];
    const dfs = (node) => {
        if (!node) return;
        out.push(node.val);
        dfs(node.left);
        dfs(node.right);
    };

    dfs(root);
    return out.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (!data) return null;

    const vals = data.split(',').map(Number);
    let idx = 0;

    const build = (low, high) => {
        if (idx >= vals.length) return null;
        const v = vals[idx];
        if (v <= low || v >= high) return null;

        idx++;
        const node = new TreeNode(v);
        node.left = build(low, v);
        node.right = build(v, high);
        return node;
    };

    return build(-Infinity, Infinity);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */