/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
    let maxDigit = 0;
    for (let i = 0; i < n.length; i++) {
        const d = n.charCodeAt(i) - 48;
        if (d > maxDigit) maxDigit = d;
        if (maxDigit === 9) return 9;
    }
    return maxDigit;
};