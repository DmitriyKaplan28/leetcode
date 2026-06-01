/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    const index = new Map();
    for (let i = 0; i < inorder.length; i++) {
        index.set(inorder[i], i);
    }

    let postIdx = postorder.length - 1;

    function build(inLeft, inRight) {
        if (inLeft > inRight) return null;
        const rootVal = postorder[postIdx--];
        const root = new TreeNode(rootVal);
        const mid = index.get(rootVal);
        root.right = build(mid + 1, inRight);
        root.left = build(inLeft, mid - 1);
        return root;
    }

    return build(0, inorder.length - 1);
};