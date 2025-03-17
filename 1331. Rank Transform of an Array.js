/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  let sorted = [...new Set(arr)].sort((a, b) => a - b);
  let rankMap = new Map();
  sorted.forEach((num, index) => rankMap.set(num, index + 1));
  return arr.map((num) => rankMap.get(num));
};
