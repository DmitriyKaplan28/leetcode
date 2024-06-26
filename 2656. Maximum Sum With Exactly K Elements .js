/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
  let maxValue = Math.max(...nums);
  let res = 0;
  while (k > 0) {
    res += maxValue
    maxValue++
    k--
  }
  return res
};

console.log(maximizeSum([1,2,3,4,5], 3))
