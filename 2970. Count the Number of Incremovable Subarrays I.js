/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function (nums) {
    const n = nums.length;

    let prefEnd = 0;
    while (prefEnd + 1 < n && nums[prefEnd] < nums[prefEnd + 1]) prefEnd++;

    if (prefEnd === n - 1) return (n * (n + 1)) / 2;

    let sufStart = n - 1;
    while (sufStart - 1 >= 0 && nums[sufStart - 1] < nums[sufStart]) sufStart--;

    let ans = 0;
    let j = sufStart;

    for (let i = -1; i <= prefEnd; i++) {
        if (i >= 0) {
            while (j < n && nums[i] >= nums[j]) j++;
        }

        const minJ = Math.max(j, sufStart, i + 2);
        if (minJ <= n) ans += (n - minJ + 1);
    }

    return ans;
};