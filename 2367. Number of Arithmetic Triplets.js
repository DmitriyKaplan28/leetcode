/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let count = 0
    for (let i =0; i < nums.length; i++) {
        if (nums.includes(nums[i] - diff) && nums.includes(nums[i] + diff)) count ++
    }
    return count
};