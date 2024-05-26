/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */

var groupThePeople = function (groupSizes) {
  const res = [];
  const find = {};
  for (let i = 0; i < groupSizes.length; i++) {
    if (!find[groupSizes[i]]) {
      find[groupSizes[i]] = [];
    }
    find[groupSizes[i]].push(i);
    if (find[groupSizes[i]].length === groupSizes[i]) {
      res.push(find[groupSizes[i]]);
      find[groupSizes[i]] = [];
    }
  }
  return res;
};
