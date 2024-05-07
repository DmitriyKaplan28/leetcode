/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let shuffledArray = [];
  for (let i = 0; i < n; i++) {
    shuffledArray.push(nums[i], nums[i + n]);
  }
  return shuffledArray;
};
