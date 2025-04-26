/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  if (nums.length === 1) return 0;

  let maxIndex = 0;
  let maxNum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > maxNum) {
      maxNum = nums[i];
      maxIndex = i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i !== maxIndex && maxNum < nums[i] * 2) {
      return -1;
    }
  }

  return maxIndex;
};
