/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  let res = "";
  const starts = paths.map((path) => path[0]);
  for (let i = 0; i < paths.length; i++) {
    if (!starts.includes(paths[i][1])) res = paths[i][1];
  }
  return res;
};
