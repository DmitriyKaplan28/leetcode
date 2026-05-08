/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums) {
    let minValue = nums[0];
    let maxValue = nums[0];
    const present = new Set(nums);
    const missing = [];

    for (const num of nums) {
        if (num < minValue) minValue = num;
        if (num > maxValue) maxValue = num;
    }

    for (let value = minValue; value <= maxValue; value++) {
        if (!present.has(value)) {
            missing.push(value);
        }
    }

    return missing;
};