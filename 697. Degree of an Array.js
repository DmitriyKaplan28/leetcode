/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let freq = {}, firstIndex = {}, lastIndex = {};
    let degree = 0;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (firstIndex[num] === undefined) firstIndex[num] = i;

        lastIndex[num] = i;
        freq[num] = (freq[num] || 0) + 1;
        degree = Math.max(degree, freq[num]);
    }

    let minLength = Infinity;
    for (let num in freq) {
        if (freq[num] === degree) {
            minLength = Math.min(minLength, lastIndex[num] - firstIndex[num] + 1);
        }
    }
    return minLength;  
};
