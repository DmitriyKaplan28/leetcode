/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function(nums, key) {
    const freq = new Map();

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === key) {
      const target = nums[i + 1];
      freq.set(target, (freq.get(target) || 0) + 1);
    }
  }

  let maxTarget = null;
  let maxCount = -1;

  for (const [target, count] of freq.entries()) {
    if (count > maxCount) {
      maxCount = count;
      maxTarget = target;
    }
  }

  return maxTarget;
};
