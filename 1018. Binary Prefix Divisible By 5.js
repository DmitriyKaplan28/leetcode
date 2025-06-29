/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    const result = [];
    let current = 0;

    for (let i = 0; i < nums.length; i++) {
        current = ((current << 1) + nums[i]) % 5;
        result.push(current === 0);
    }

    return result;
};
