/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sum = nums.reduce((acc, curr) => acc + curr);
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    if (left === sum - left - nums[i]) {
      return i;
    }
    left += nums[i];
  }

  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([-1, -1, 0, 1, 1, 0]));
