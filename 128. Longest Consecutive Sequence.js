/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  nums.sort((a, b) => a - b);
  let longest = 1;
  let current = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      current++;
    } else if (nums[i] === nums[i - 1]) {
      continue;
    } else {
      current = 1;
    }
    longest = Math.max(longest, current);
  }
  return longest;
};
