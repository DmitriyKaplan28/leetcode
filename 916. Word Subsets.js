/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
    const need = new Array(26).fill(0);

    for (const word of words2) {
        const count = new Array(26).fill(0);
        for (const c of word) count[c.charCodeAt(0) - 97]++;
        for (let i = 0; i < 26; i++) {
            need[i] = Math.max(need[i], count[i]);
        }
    }

    const result = [];
    for (const word of words1) {
        const count = new Array(26).fill(0);
        for (const c of word) count[c.charCodeAt(0) - 97]++;
        let ok = true;
        for (let i = 0; i < 26; i++) {
            if (count[i] < need[i]) {
                ok = false;
                break;
            }
        }
        if (ok) result.push(word);
    }
    return result;
};