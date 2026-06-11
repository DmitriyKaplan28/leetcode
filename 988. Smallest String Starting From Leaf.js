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
var smallestFromLeaf = function (root) {
    let answer = null;

    function dfs(node, path) {
        if (!node) return;

        path.push(String.fromCharCode(97 + node.val));

        if (!node.left && !node.right) {
            const current = [...path].reverse().join('');

            if (answer === null || current < answer) {
                answer = current;
            }
        }

        dfs(node.left, path);
        dfs(node.right, path);

        path.pop();
    }

    dfs(root, []);
    return answer;
};