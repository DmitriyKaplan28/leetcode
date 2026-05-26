/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueEven = function (nums) {
    const count = new Map();
    for (const x of nums) {
        count.set(x, (count.get(x) || 0) + 1);
    }
    for (const x of nums) {
        if (x % 2 === 0 && count.get(x) === 1) return x;
    }
    return -1;
};