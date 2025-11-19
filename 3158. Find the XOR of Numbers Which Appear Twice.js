/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function(nums) {
    const count = {};
  let result = 0;

  for (const num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  for (const [num, freq] of Object.entries(count)) {
    if (freq === 2) {
      result ^= Number(num);
    }
  }

  return result;
};
