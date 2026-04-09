/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function (nums, k) {
    const n = nums.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        const leftIdx = i - k;
        const rightIdx = i + k;

        if (leftIdx >= 0 && nums[i] <= nums[leftIdx]) continue;
        if (rightIdx < n && nums[i] <= nums[rightIdx]) continue;

        sum += nums[i];
    }

    return sum;
};