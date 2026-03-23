/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    for (let i = 0; i < nums.length; i++) {
    const digitSum = Math.abs(nums[i])
      .toString()
      .split('')
      .reduce((sum, digit) => sum + Number(digit), 0);

    if (digitSum === i) {
      return i;
    }
  }
  return -1;
};
