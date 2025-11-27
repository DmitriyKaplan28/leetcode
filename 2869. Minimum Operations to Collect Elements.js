/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  const needed = new Set();
  let ops = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    ops++;
    const val = nums[i];
    if (val <= k) {
      needed.add(val);
      if (needed.size === k) return ops;
    }
  }

  return ops;
};
