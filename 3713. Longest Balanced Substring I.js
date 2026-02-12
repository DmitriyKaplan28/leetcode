/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function (s) {
    let maxLen = 0;
    const n = s.length;

    for (let i = 0; i < n; i++) {
        const freq = new Map();

        for (let j = i; j < n; j++) {
            const ch = s[j];
            freq.set(ch, (freq.get(ch) || 0) + 1);

            let minFreq = Infinity;
            let maxFreq = 0;
            for (const count of freq.values()) {
                minFreq = Math.min(minFreq, count);
                maxFreq = Math.max(maxFreq, count);
            }

            if (minFreq === maxFreq && minFreq > 0) {
                maxLen = Math.max(maxLen, j - i + 1);
            }
        }
    }

    return maxLen;
};

console.log(longestBalanced("abbac"));
console.log(longestBalanced("zzabccy"));
console.log(longestBalanced("aba"));