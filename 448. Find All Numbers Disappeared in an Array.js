/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const n = nums.length;
  const res = [];
  for (let i = 0; i < n; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }
  return res;
};
