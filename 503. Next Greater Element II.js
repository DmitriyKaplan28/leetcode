/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const result = new Array(nums.length).fill(-1);
  const stack = [];

  for (let i = 0; i < nums.length * 2; i++) {
    const index = i % nums.length;

    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[index]) {
      result[stack.pop()] = nums[index];
    }

    if (i < nums.length) {
      stack.push(index);
    }
  }

  return result;
};
