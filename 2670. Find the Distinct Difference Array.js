/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function (nums) {
  const n = nums.length;
  const prefixDistinctCounts = new Array(n);
  const suffixDistinctCounts = new Array(n).fill(0);

  const seenPrefix = new Set();
  for (let i = 0; i < n; i++) {
    seenPrefix.add(nums[i]);
    prefixDistinctCounts[i] = seenPrefix.size;
  }

  const seenSuffix = new Set();
  for (let i = n - 1; i >= 0; i--) {
    seenSuffix.add(nums[i]);
    suffixDistinctCounts[i] = seenSuffix.size;
  }

  const diff = new Array(n);
  for (let i = 0; i < n; i++) {
    const suffixExcludingI = i + 1 < n ? suffixDistinctCounts[i + 1] : 0;
    diff[i] = prefixDistinctCounts[i] - suffixExcludingI;
  }

  return diff;
};
