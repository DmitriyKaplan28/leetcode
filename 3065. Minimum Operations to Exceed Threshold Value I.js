/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  let operations = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < k) {
      operations++;
    }
  }
  return operations;
};
console.log(minOperations([2,11,10,1,3], 10));
console.log(minOperations([1,1,2,4,9], 1));
console.log(minOperations([1,1,2,4,9], 9));
