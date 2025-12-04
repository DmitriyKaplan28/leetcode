/**
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function (nums) {
  let evenCount = 0;
  for (const x of nums) {
    if ((x & 1) === 0) {
      evenCount++;
      if (evenCount >= 2) return true;
    }
  }
  return false;
};
