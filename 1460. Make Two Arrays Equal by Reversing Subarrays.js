/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  target.sort((a, b) => a - b);
  arr.sort((a, b) => a - b);
  for (let i = 0; i < target.length; i++) {
    if (arr[i] !== target[i]) {
      return false;
    }
  }
  return true;
};

console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]));
