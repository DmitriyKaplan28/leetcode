/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
    if (nums.length === 1) return String(nums[0]);
    if (nums.length === 2) return nums.join("/");
    return nums[0] + "/(" + nums.slice(1).join("/") + ")";
};
