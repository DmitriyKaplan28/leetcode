/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
  const n = nums.length;
  const kDistantIndices = new Set();

  const keyIndices = [];
  for (let j = 0; j < n; j++) {
    if (nums[j] === key) {
      keyIndices.push(j);
    }
  }

  for (let j of keyIndices) {
    for (let i = Math.max(0, j - k); i <= Math.min(n - 1, j + k); i++) {
      kDistantIndices.add(i);
    }
  }

  return Array.from(kDistantIndices).sort((a, b) => a - b);
};
