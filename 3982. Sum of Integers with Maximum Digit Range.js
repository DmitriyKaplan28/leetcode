/**
 * @param {number[]} nums
 * @return {number}
 */
var maxDigitRange = function(nums) {
    const getRange = n => {
    const digits = String(Math.abs(n)).split('').map(Number);
    return Math.max(...digits) - Math.min(...digits);
  };

  let maxRange = -1;
  let sum = 0;

  for (const num of nums) {
    const range = getRange(num);

    if (range > maxRange) {
      maxRange = range;
      sum = num;
    } else if (range === maxRange) {
      sum += num;
    }
  }

  return sum;
};
