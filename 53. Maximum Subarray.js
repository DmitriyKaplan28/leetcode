/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        max = Math.max(max, sum);
        if(sum < 0) {
            sum = 0;
        }
    }
    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5,4,-1,7,8]));
