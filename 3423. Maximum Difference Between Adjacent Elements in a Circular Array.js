/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums) {
    const n = nums.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        const j = (i + 1) % n;
        const diff = Math.abs(nums[i] - nums[j]);
        if (diff > ans) ans = diff;
    }
    return ans;
};