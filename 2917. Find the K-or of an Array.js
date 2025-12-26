/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKOr = function (nums, k) {
  let result = 0;

  for (let bit = 0; bit < 32; bit++) {
    let count = 0;

    for (let num of nums) {
      if ((num >> bit) & 1) {
        count++;
      }
    }

    if (count >= k) {
      result |= 1 << bit;
    }
  }

  return result;
};

console.log(findKOr([7, 12, 9, 8, 9, 15], 4));
console.log(findKOr([2, 12, 1, 11, 4, 5], 6));
console.log(findKOr([10, 8, 5, 9, 11, 6, 8], 1));
