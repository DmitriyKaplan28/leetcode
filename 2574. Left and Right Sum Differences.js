/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let rightSum = nums.reduce((acc, number) => acc + number);
    let leftSum = 0
    let res = []
    for (let i=0; i<nums.length; i++) {
        rightSum = rightSum - nums[i]
        res.push(Math.abs(leftSum - rightSum))
        leftSum = leftSum + nums[i]
    }
    return res
};
