/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMiddleElementUnique = function(nums) {
    const middle = nums[Math.floor(nums.length / 2)];
  return nums.filter(x => x === middle).length === 1;
};
