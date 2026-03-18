/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
    const n = nums.length;
    if (n < 3) return 0;

    let maxVal = 0;
    let maxDiff = 0;
    let maxNum = nums[0];

    for (let k = 1; k < n; k++) {
        maxVal = Math.max(maxVal, maxDiff * nums[k]);
        maxDiff = Math.max(maxDiff, maxNum - nums[k]);
        maxNum = Math.max(maxNum, nums[k]);
    }

    return maxVal;
};