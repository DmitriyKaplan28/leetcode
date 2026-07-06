/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let xor = 0;

  for (const num of nums) {
    xor ^= num;
  }

  const diff = xor & -xor;
  let a = 0;
  let b = 0;

  for (const num of nums) {
    if (num & diff) {
      a ^= num;
    } else {
      b ^= num;
    }
  }

  return [a, b];
};
