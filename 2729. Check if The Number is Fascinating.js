/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {
    const s = `${n}${2 * n}${3 * n}`;
    if (s.length !== 9 || s.includes("0")) return false;
    return new Set(s).size === 9;
};