/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
  const sortedFolders = [...folder].sort();
  const result = [];

  for (const path of sortedFolders) {
    const parent = result[result.length - 1];
    if (parent && (path === parent || path.startsWith(`${parent}/`))) {
      continue;
    }
    result.push(path);
  }

  return result;
};
