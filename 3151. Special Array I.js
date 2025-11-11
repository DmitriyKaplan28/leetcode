/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    for (let i = 1; i < nums.length; i++) {
    const prevEven = nums[i - 1] % 2 === 0;
    const currEven = nums[i] % 2 === 0;
    if (prevEven === currEven) return false;
  }
  return true;
};
