/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let start = 0,
        end = nums.length - 1;
    if (nums[start] < nums[end]) return nums[0];
    while (start < end) {
        const middle = (start + end) >> 1;
        if (nums[middle] > nums[end]) start = middle + 1;
        else end = middle;
    }
    return nums[start];
};
