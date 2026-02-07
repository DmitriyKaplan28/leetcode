/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
    const count = new Map();
    for (const x of nums) {
        count.set(x, (count.get(x) || 0) + 1);
    }
    const result = [];
    for (const [x, c] of count) {
        if (c === 2) result.push(x);
    }
    return result;
};