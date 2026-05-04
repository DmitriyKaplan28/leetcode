/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function (strs) {
    const freq = new Map();
    for (const s of strs) {
        freq.set(s, (freq.get(s) || 0) + 1);
    }

    /** @param {string} small @param {string} big */
    function isSubsequence(small, big) {
        let i = 0;
        for (let k = 0; k < big.length && i < small.length; k++) {
            if (big[k] === small[i]) i++;
        }
        return i === small.length;
    }

    const sorted = [...strs].sort((a, b) => b.length - a.length);

    for (let i = 0; i < sorted.length; i++) {
        const s = sorted[i];
        if (freq.get(s) > 1) continue;

        let containedInLonger = false;
        for (let j = 0; j < i; j++) {
            if (isSubsequence(s, sorted[j])) {
                containedInLonger = true;
                break;
            }
        }
        if (!containedInLonger) return s.length;
    }

    return -1;
};