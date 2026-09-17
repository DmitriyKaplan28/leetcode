/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
    const n = nums.length;
    const dp = Array(n).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        dp[i] = nums[i];

        for (let j = i + 1; j < n; j++) {
            dp[j] = Math.max(nums[i] - dp[j], nums[j] - dp[j - 1]);
        }
    }

    return dp[n - 1] >= 0;
};
