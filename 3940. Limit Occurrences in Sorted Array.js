/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var limitOccurrences = function (nums, k) {
    const result = [];
    let kept = 0;
    let prev = null;

    for (const x of nums) {
        if (x !== prev) {
            prev = x;
            kept = 0;
        }
        if (kept < k) {
            result.push(x);
            kept++;
        }
    }
    return result;
};