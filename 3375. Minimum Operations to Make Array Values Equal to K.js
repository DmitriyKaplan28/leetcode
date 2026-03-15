/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    const minNum = Math.min(...nums);
    if (minNum < k) return -1;

    const greaterThanK = new Set(nums.filter(num => num > k));
    return greaterThanK.size;
};

console.log(minOperations([5, 2, 5, 4, 5], 2));
console.log(minOperations([2, 1, 2], 2));
console.log(minOperations([9, 7, 5, 3], 1));