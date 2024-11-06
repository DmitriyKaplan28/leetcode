/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const paths = [];

  function dfs(node, path) {
    if (!node) return;

    path += node.val;

    if (!node.left && !node.right) {
      paths.push(path);
    } else {
      path += "->";
      dfs(node.left, path);
      dfs(node.right, path);
    }
  }

  dfs(root, "");
  return paths;
};
