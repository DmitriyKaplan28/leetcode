/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[0]) {
            return 1;
        }
    }
    return 0;
};