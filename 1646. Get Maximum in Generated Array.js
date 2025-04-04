/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let nums = new Array(n + 1).fill(0);
    nums[1] = 1;
    let maxVal = 1;

    for (let i = 1; 2 * i <= n; i++) {
        nums[2 * i] = nums[i];
        if (2 * i + 1 <= n) {
            nums[2 * i + 1] = nums[i] + nums[i + 1]; 
            maxVal = Math.max(maxVal, nums[2 * i + 1]); 
        }
    }
    return maxVal;  
};
