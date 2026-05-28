/**
 * @param {number[]} nums
 * @return {number}
 */
var minAbsoluteDifference = function (nums) {
    let lastOne = -1;
    let lastTwo = -1;
    let ans = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            lastOne = i;
            if (lastTwo !== -1) ans = Math.min(ans, i - lastTwo);
        } else if (nums[i] === 2) {
            lastTwo = i;
            if (lastOne !== -1) ans = Math.min(ans, i - lastOne);
        }
    }

    return ans === Infinity ? -1 : ans;
};