/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }

  const result = [];
  for (const value of nums) {
    if (value !== 0) result.push(value);
  }
  while (result.length < nums.length) result.push(0);
  return result;
};
