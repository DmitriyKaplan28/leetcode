/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
    let zerosRight = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "0") zerosRight++;
    }

    let onesLeft = 0;
    let ans = Infinity;
    for (let i = 0; i <= s.length; i++) {
        ans = Math.min(ans, onesLeft + zerosRight);
        if (i < s.length) {
            if (s[i] === "1") onesLeft++;
            else zerosRight--;
        }
    }
    return ans;
};