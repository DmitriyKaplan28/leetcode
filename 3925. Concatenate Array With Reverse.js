/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function (nums) {
    const n = nums.length;
    const ans = nums.slice();
    for (let i = 0; i < n; i++) {
        ans.push(nums[n - 1 - i]);
    }
    return ans;
};