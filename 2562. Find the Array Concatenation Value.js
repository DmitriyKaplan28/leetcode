/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
  let result = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (left === right) {
      result += nums[left];
    } else {
      const concat = parseInt(nums[left].toString() + nums[right].toString());
      result += concat;
    }
    left++;
    right--;
  }

  return result;
};
