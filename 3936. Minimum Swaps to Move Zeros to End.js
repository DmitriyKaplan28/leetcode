/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSwaps = function(nums) {
    let zeros = 0;

    for (const num of nums) {
        if (num === 0) zeros++;
    }

    let swaps = 0;

    for (let i = nums.length - zeros; i < nums.length; i++) {
        if (i >= 0 && nums[i] !== 0) {
            swaps++;
        }
    }

    return swaps;
};
