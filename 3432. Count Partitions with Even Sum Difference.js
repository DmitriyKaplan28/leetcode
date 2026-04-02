/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
    let sum = 0;
    for (const x of nums) sum += x;

    return sum % 2 === 0 ? Math.max(0, nums.length - 1) : 0;
};