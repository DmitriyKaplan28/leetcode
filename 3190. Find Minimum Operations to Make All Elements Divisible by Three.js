/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    let ops = 0;
    for (const x of nums) {
        const r = ((x % 3) + 3) % 3;
        if (r !== 0) ops += 1;
    }
    return ops;
};