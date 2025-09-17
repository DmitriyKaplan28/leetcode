/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  const frequency = new Map();
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if ((value & 1) !== 0) continue; // skip odd
    frequency.set(value, (frequency.get(value) || 0) + 1);
  }

  let bestValue = -1;
  let bestCount = 0;
  for (const [value, count] of frequency.entries()) {
    if (
      count > bestCount ||
      (count === bestCount && (bestValue === -1 || value < bestValue))
    ) {
      bestCount = count;
      bestValue = value;
    }
  }

  return bestCount === 0 ? -1 : bestValue;
};
