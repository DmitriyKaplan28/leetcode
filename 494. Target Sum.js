/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const total = nums.reduce((sum, n) => sum + n, 0); 
    if (Math.abs(target) > total || (total + target) % 2 !== 0) { 
        return 0; 
    } 
    const subsetSum = (total + target) / 2; 
    const dp = new Array(subsetSum + 1).fill(0); 
    dp[0] = 1;
    for (const num of nums) { 
        for (let j = subsetSum; j >= num; j--) {
            dp[j] += dp[j - num];
        } 
    } 
    return dp[subsetSum]
};
