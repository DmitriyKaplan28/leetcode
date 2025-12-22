/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum % k;
};
