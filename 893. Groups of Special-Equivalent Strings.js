/**
 * @param {string[]} words
 * @return {number}
 */
var numSpecialEquivGroups = function (words) {
    const seen = new Set();
    for (const w of words) {
        const even = [];
        const odd = [];
        for (let i = 0; i < w.length; i++) {
            (i % 2 === 0 ? even : odd).push(w[i]);
        }
        even.sort();
        odd.sort();
        seen.add(even.join('') + '|' + odd.join(''));
    }
    return seen.size;
};