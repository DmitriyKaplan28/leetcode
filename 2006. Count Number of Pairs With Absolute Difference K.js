/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  const numCount = new Map();
  let count = 0;

  for (let num of nums) {
    if (numCount.has(num + k)) {
      count += numCount.get(num + k);
    }

    if (numCount.has(num - k)) {
      count += numCount.get(num - k);
    }

    numCount.set(num, (numCount.get(num) || 0) + 1);
  }

  return count;
};
