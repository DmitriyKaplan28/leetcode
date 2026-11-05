/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let n = nums.length;
    let left = -1;
    let right = -1;
    let max = -Infinity;
    let min = Infinity;

    for (let i = 0; i < n; i++) {
        if (nums[i] < max) {
            right = i;
        } else {
            max = nums[i];
        }
    }

    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] > min) {
            left = i;
        } else {
            min = nums[i];
        }
    }

    return right === -1 ? 0 : right - left + 1;
};
