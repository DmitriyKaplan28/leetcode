/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const secondNum = {};
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (need in secondNum) {
      return [secondNum[need], i];
    }
    secondNum[nums[i]] = i;
  }
};
