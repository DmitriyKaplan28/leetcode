/**
 * @param {string} s
 * @return {number}
 */
var findSubstringInWraproundString = function (s) {
    const best = new Array(26).fill(0);
    let run = 0;

    for (let i = 0; i < s.length; i++) {
        if (
            i > 0 &&
            ((s.charCodeAt(i) - s.charCodeAt(i - 1) + 26) % 26 === 1)
        ) {
            run++;
        } else {
            run = 1;
        }

        const idx = s.charCodeAt(i) - 97;
        best[idx] = Math.max(best[idx], run);
    }

    return best.reduce((sum, v) => sum + v, 0);
};