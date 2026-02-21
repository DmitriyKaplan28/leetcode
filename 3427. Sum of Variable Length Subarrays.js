/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function (nums) {
    const n = nums.length;
    const pre = new Array(n + 1);
    pre[0] = 0;
    for (let i = 0; i < n; i++) pre[i + 1] = pre[i] + nums[i];

    let total = 0;
    for (let i = 0; i < n; i++) {
        const start = Math.max(0, i - nums[i]);
        total += pre[i + 1] - pre[start];
    }
    return total;
};

console.log(subarraySum([2,3,1]));
console.log(subarraySum([3,1,1,2]));