/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function (nums) {
    if (nums.length < 2) return 0;

    const target = nums[0] + nums[1];
    let count = 0;
    for (let i = 0; i + 1 < nums.length; i += 2) {
        if (nums[i] + nums[i + 1] !== target) break;
        count++;
    }
    return count;
};