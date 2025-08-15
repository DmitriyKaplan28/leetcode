/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums.sort((a, b) => a - b);
  const n = nums.length;
  const maxProduct = nums[n - 1] * nums[n - 2];
  const minProduct = nums[0] * nums[1];
  return maxProduct - minProduct;
};
