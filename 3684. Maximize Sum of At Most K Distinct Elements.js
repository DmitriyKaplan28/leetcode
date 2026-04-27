/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxKDistinct = function (nums, k) {
    const distinct = [...new Set(nums)];
    distinct.sort((a, b) => b - a);
    return distinct.slice(0, k);
};