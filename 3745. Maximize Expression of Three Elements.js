/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeExpressionOfThree = function (nums) {
    const minVal = Math.min(...nums);
    const minIdx = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === minVal) minIdx.push(i);
    }

    const ranked = nums
        .map((v, i) => ({ v, i }))
        .sort((a, b) => b.v - a.v)
        .slice(0, 4);

    let best = -Infinity;
    for (const c of minIdx) {
        let picked = 0;
        let sum = 0;
        for (const { v, i } of ranked) {
            if (i === c) continue;
            sum += v;
            if (++picked === 2) break;
        }
        best = Math.max(best, sum - minVal);
    }
    return best;
};