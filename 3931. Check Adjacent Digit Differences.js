/**
 * @param {string} s
 * @return {boolean}
 */
var isAdjacentDiffAtMostTwo = function (s) {
    for (let i = 1; i < s.length; i++) {
        const a = s.charCodeAt(i - 1) - 48;
        const b = s.charCodeAt(i) - 48;
        if (Math.abs(a - b) > 2) return false;
    }
    return true;
};