/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  const contentToPaths = new Map();

  for (const entry of paths) {
    const parts = entry.split(" ");
    const dir = parts[0];
    for (let i = 1; i < parts.length; i++) {
      const file = parts[i];
      const openIdx = file.indexOf("(");
      const closeIdx = file.lastIndexOf(")");
      if (openIdx === -1 || closeIdx === -1 || closeIdx <= openIdx) continue;
      const name = file.substring(0, openIdx);
      const content = file.substring(openIdx + 1, closeIdx);
      const fullPath = dir + "/" + name;
      if (!contentToPaths.has(content)) contentToPaths.set(content, []);
      contentToPaths.get(content).push(fullPath);
    }
  }

  const result = [];
  for (const pathsWithSameContent of contentToPaths.values()) {
    if (pathsWithSameContent.length > 1) result.push(pathsWithSameContent);
  }
  return result;
};

console.log(
  findDuplicate([
    "root/a 1.txt(abcd) 2.txt(efgh)",
    "root/c 3.txt(abcd)",
    "root/c/d 4.txt(efgh)",
    "root 4.txt(efgh)",
  ])
);
console.log(
  findDuplicate([
    "root/a 1.txt(abcd) 2.txt(efgh)",
    "root/c 3.txt(abcd)",
    "root/c/d 4.txt(efgh)",
  ])
);
