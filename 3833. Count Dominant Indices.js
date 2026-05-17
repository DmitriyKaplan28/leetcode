/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndices = function(nums) {
    const n = nums.length;

  if (n <= 1) return 0;

  const suffixSum = Array(n).fill(0);
  suffixSum[n - 1] = nums[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    suffixSum[i] = suffixSum[i + 1] + nums[i];
  }

  let count = 0;

  for (let i = 0; i < n - 1; i++) {
    const rightSum = suffixSum[i + 1];
    const rightCount = n - i - 1;
    const average = rightSum / rightCount;

    if (nums[i] > average) {
      count++;
    }
  }

  return count
};
