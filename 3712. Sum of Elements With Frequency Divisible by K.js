/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function(nums, k) {
    const frequencyMap = new Map();
    
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    let totalSum = 0;
    
    for (const [num, freq] of frequencyMap) {
        if (freq % k === 0) {
            totalSum += num * freq;
        }
    }
    
    return totalSum;
};
