/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    const n = nums.length;
    if (n <= 1) return 0;

    const good = new Array(n).fill(false);
    const seen = new Set();

    for (let i = n - 1; i >= 0; i--) {
        if (seen.has(nums[i])) {
            good[i] = false;
        } else {
            seen.add(nums[i]);
            good[i] = i === n - 1 ? true : good[i + 1];
        }
    }

    const maxOps = Math.floor((n + 2) / 3);

    for (let k = 0; k <= maxOps; k++) {
        const start = 3 * k;
        if (start >= n) {
            return k;
        }
        if (good[start]) {
            return k;
        }
    }

    return maxOps;
};