/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    nums.sort((a, b) => b - a);
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    let subseqSum = 0;
    const subseq = [];

    for (const num of nums) {
        subseqSum += num;
        subseq.push(num);
        if (subseqSum > totalSum - subseqSum) {
            break;
        }
    }

    return subseq;
};
