/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    const maxVal = Math.max(...nums);
    const sum = nums.reduce((a, b) => a + b, 0);
    return nums.length * maxVal - sum;
};