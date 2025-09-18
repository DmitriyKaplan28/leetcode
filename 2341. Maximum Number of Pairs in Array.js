/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  const frequency = new Map();
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    frequency.set(value, (frequency.get(value) || 0) + 1);
  }

  let pairs = 0;
  let leftovers = 0;
  for (const count of frequency.values()) {
    pairs += Math.floor(count / 2);
    leftovers += count % 2;
  }

  return [pairs, leftovers];
};
