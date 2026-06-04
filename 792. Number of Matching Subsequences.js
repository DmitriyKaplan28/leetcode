/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
    const buckets = Array.from({ length: 26 }, () => []);
    for (const w of words) {
        buckets[w.charCodeAt(0) - 97].push([w, 0]);
    }

    let count = 0;
    for (let i = 0; i < s.length; i++) {
        const pending = buckets[s.charCodeAt(i) - 97];
        buckets[s.charCodeAt(i) - 97] = [];
        for (const [w, idx] of pending) {
            const next = idx + 1;
            if (next === w.length) count++;
            else buckets[w.charCodeAt(next) - 97].push([w, next]);
        }
    }
    return count;
};