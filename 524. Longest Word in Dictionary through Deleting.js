/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
    const m = s.length;

    const nextPos = new Array(m + 1);
    for (let i = 0; i <= m; i++) nextPos[i] = new Int32Array(26);

    nextPos[m].fill(m);
    for (let i = m - 1; i >= 0; i--) {
        nextPos[i].set(nextPos[i + 1]);
        const idx = s.charCodeAt(i) - 97;
        nextPos[i][idx] = i;
    }

    const isSubsequence = (word) => {
        let pos = 0;
        for (let i = 0; i < word.length; i++) {
            const idx = word.charCodeAt(i) - 97;
            const at = nextPos[pos][idx];
            if (at === m) return false;
            pos = at + 1;
        }
        return true;
    };

    let best = "";
    for (const word of dictionary) {
        if (!isSubsequence(word)) continue;
        if (word.length > best.length || (word.length === best.length && word < best)) {
            best = word;
        }
    }

    return best;
};

console.log(findLongestWord("abpcplea", ["ale","apple","monkey","plea"]));
console.log(findLongestWord("abpcplea", ["a","b","c"]));