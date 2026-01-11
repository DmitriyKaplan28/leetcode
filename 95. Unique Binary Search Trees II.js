/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  const generate = (start, end) => {
    if (start > end) {
      return [null];
    }

    const trees = [];

    for (let i = start; i <= end; i++) {
      const leftSubtrees = generate(start, i - 1);

      const rightSubtrees = generate(i + 1, end);

      for (let left of leftSubtrees) {
        for (let right of rightSubtrees) {
          const root = new TreeNode(i, left, right);
          trees.push(root);
        }
      }
    }

    return trees;
  };

  return generate(1, n);
};
