/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
  if (!nums || nums.length === 0) return [];
  const frequencyByValue = new Map();
  for (const arr of nums) {
    for (const value of arr) {
      frequencyByValue.set(value, (frequencyByValue.get(value) || 0) + 1);
    }
  }
  const result = [];
  for (const [value, freq] of frequencyByValue.entries()) {
    if (freq === nums.length) result.push(value);
  }
  result.sort((a, b) => a - b);
  return result;
};
