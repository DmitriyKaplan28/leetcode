/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    const need = 1 << k;
    if (s.length < k || s.length - k + 1 < need) return false;

    const seen = new Set();
    let val = 0;

    for (let i = 0; i < s.length; i++) {
        val = ((val << 1) & (need - 1)) | (s[i] === '1' ? 1 : 0);
        if (i >= k - 1) {
            seen.add(val);
            if (seen.size === need) return true;
        }
    }

    return seen.size === need;
};

console.log(hasAllCodes("00110110", 2));
console.log(hasAllCodes("0110", 1));
console.log(hasAllCodes("0110", 2));