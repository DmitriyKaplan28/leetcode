/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let minAvg = Infinity;
    for (let i = 0; i < n / 2; i++) {
        const avg = (nums[i] + nums[n - 1 - i]) / 2;
        minAvg = Math.min(minAvg, avg);
    }
    return minAvg;
};