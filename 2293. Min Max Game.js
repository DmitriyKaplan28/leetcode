/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function (nums) {
  while (nums.length > 1) {
    const newLength = nums.length / 2;
    const newNums = new Array(newLength);

    for (let i = 0; i < newLength; i++) {
      const a = nums[2 * i];
      const b = nums[2 * i + 1];
      newNums[i] = i % 2 === 0 ? Math.min(a, b) : Math.max(a, b);
    }

    nums = newNums;
  }

  return nums[0];
};
