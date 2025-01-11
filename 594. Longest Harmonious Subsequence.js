/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  const frequencyMap = new Map();
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }
  let maxLength = 0;

  for (const [key, value] of frequencyMap.entries()) {
    if (frequencyMap.has(key + 1)) {
      maxLength = Math.max(maxLength, value + frequencyMap.get(key + 1));
    }
  }

  return maxLength;
};
