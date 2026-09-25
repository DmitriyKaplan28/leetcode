/**
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialIntegers = function (nums) {
  if (nums.length === 0) return 0;

  const blockCounts = new Map();
  let currentBlock = new Set();

  for (let i = 0; i <= nums.length; i++) {
    if (i === nums.length || nums[i] !== nums[i - 1]) {
      if (i > 0) {
        for (const value of currentBlock) {
          blockCounts.set(value, (blockCounts.get(value) || 0) + 1);
        }
        currentBlock = new Set();
      }

      if (i < nums.length) {
        currentBlock.add(nums[i]);
      }
    } else {
      currentBlock.add(nums[i]);
    }
  }

  let answer = 0;
  for (const count of blockCounts.values()) {
    if (count === 1) {
      answer++;
    }
  }

  return answer;
};
