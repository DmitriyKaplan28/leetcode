/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  if (k < 0) return 0;

  if (k === 0) {
    const counts = new Map();
    for (const value of nums) {
        counts.set(value, (counts.get(value) || 0) + 1);
    }
    return [...counts.values()].filter(count => count > 1).length;
  }

  const values = new Set(nums);
  let count = 0;

  for (const value of values) {
    if (values.has(value + k)) count++;
  }

  return count;
};
