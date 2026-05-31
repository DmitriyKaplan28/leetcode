/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findValidElements = function (nums) {
    const n = nums.length;
    if (n === 0) return [];

    const prefixMax = new Array(n).fill(-Infinity);
    for (let i = 1; i < n; i++) {
        prefixMax[i] = Math.max(prefixMax[i - 1], nums[i - 1]);
    }

    const suffixMax = new Array(n).fill(-Infinity);
    for (let i = n - 2; i >= 0; i--) {
        suffixMax[i] = Math.max(suffixMax[i + 1], nums[i + 1]);
    }

    const result = [];
    for (let i = 0; i < n; i++) {
        if (
            i === 0 ||
            i === n - 1 ||
            nums[i] > prefixMax[i] ||
            nums[i] > suffixMax[i]
        ) {
            result.push(nums[i]);
        }
    }
    return result;
};