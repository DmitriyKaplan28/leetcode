/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
    let i = 0;
  while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
    i++;
  }

  const prefixSum = nums.slice(0, i + 1).reduce((a, b) => a + b, 0);

  const set = new Set(nums);
  let x = prefixSum;
  while (set.has(x)) {
    x++;
  }

  return x;
};
