/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
    const seen = new Set();
    let sum = 0;
    let best = nums[0];

    for (const num of nums) {
        if (num > 0 && !seen.has(num)) {
            seen.add(num);
            sum += num;
        }
        best = Math.max(best, num);
    }

    return sum > 0 ? sum : best;
};