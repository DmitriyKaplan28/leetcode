/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  const numsMap = new Map();
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!numsMap.has(nums[i])) {
      result += nums[i];
      numsMap.set(nums[i], 1);
    } else {
      const count = numsMap.get(nums[i]);
      if (count === 1) {
        result -= nums[i];
        numsMap.set(nums[i], 2);
      }
    }
  }
  return result;
};
