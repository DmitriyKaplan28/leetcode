/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let maxSoFar = nums[0];
    let minSoFar = nums[0];
    let ans = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const x = nums[i];
        const candidates = [x, maxSoFar * x, minSoFar * x];
        maxSoFar = Math.max(...candidates);
        minSoFar = Math.min(...candidates);
        ans = Math.max(ans, maxSoFar);
    }
    return ans;
};

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));