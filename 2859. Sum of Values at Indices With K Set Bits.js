/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
  const countSetBits = (n) => {
    let count = 0;
    while (n > 0) {
      count += n & 1;
      n >>= 1;
    }
    return count;
  };

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (countSetBits(i) === k) {
      sum += nums[i];
    }
  }

  return sum;
};

console.log(sumIndicesWithKSetBits([4,3,2,1], 2))
console.log(sumIndicesWithKSetBits([5,10,1,5,2], 1))