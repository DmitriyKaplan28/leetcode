/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    let sum = 0;
    const prefixSum = new Map();
    prefixSum.set(0, 1);

    for (const num of nums) {
        sum += num;
        count += prefixSum.get(sum - k) || 0;
        prefixSum.set(sum, (prefixSum.get(sum) || 0) + 1);
    }

    return count;
};
