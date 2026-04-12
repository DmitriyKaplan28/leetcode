/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function (nums, k) {
    const n = nums.length;

    if (k === 1) {
        const freq = new Map();
        for (const x of nums) {
            freq.set(x, (freq.get(x) || 0) + 1);
        }
        let best = -1;
        for (const x of nums) {
            if (freq.get(x) === 1) {
                best = Math.max(best, x);
            }
        }
        return best;
    }

    if (k === n) {
        return Math.max(...nums);
    }

    const first = nums[0];
    const last = nums[n - 1];
    let countFirst = 0;
    let countLast = 0;
    for (const x of nums) {
        if (x === first) countFirst++;
        if (x === last) countLast++;
    }

    let best = -1;
    if (countFirst === 1) best = Math.max(best, first);
    if (countLast === 1) best = Math.max(best, last);
    return best;
};
