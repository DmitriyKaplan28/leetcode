/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
    let maxFreq = 0;
    const counts = new Array(101).fill(0);
    for (const num of nums) {
        maxFreq = Math.max(maxFreq, ++counts[num]);
    }
    return counts.filter((count) => count === maxFreq).length * maxFreq;
};