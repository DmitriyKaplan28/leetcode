/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  if (!nums || nums.length === 0) return [];
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const dp = new Array(n).fill(1);
  const parent = new Array(n).fill(-1);
  let maxSize = 1;
  let maxIndex = 0;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0 && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
        parent[i] = j;
      }
    }
    if (dp[i] > maxSize) {
      maxSize = dp[i];
      maxIndex = i;
    }
  }

  const result = [];
  let current = maxIndex;
  while (current !== -1) {
    result.push(nums[current]);
    current = parent[current];
  }

  return result.reverse();
};
