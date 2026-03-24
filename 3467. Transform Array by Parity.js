/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function (nums) {
    const evens = nums.filter(x => x % 2 === 0).length;
    const zeros = new Array(evens).fill(0);
    const ones = new Array(nums.length - evens).fill(1);
    return [...zeros, ...ones];
};