/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
    const n = nums.length;
    const sum = nums.reduce((a, b) => a + b, 0);

    let f = nums.reduce((acc, num, i) => acc + i * num, 0);
    let max = f;

    for (let k = 1; k < n; k++) {
        f = f + sum - n * nums[n - k];
        max = Math.max(max, f);
    }

    return max;
};
