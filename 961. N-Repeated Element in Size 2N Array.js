/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  const frequency = new Map();
  const n = nums.length / 2;

  for (const num of nums) {
    frequency.set(num, (frequency.get(num) || 0) + 1);
    if (frequency.get(num) === n) {
      return num;
    }
  }

  return -1;
};
