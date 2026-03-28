/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function (nums) {
    let s = 0;
    for (const x of nums) s += x;
    let ans = 0;
    let l = 0;
    for (const x of nums) {
        if (x) {
            l += x;
        } else {
            if (l * 2 === s) ans += 2;
            else if (Math.abs(l * 2 - s) === 1) ans += 1;
        }
    }
    return ans;
};