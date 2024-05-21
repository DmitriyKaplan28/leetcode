/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
  const arr = [];
  const sorted = nums.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (i%2 === 0) {
        arr.push(nums[i+1], nums[i])
    }
  }
  return arr
};

console.log(numberGame([5, 4, 2, 3]));
