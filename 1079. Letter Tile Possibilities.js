/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
    const freq = new Array(26).fill(0);
    for (const ch of tiles) {
        freq[ch.charCodeAt(0) - 65]++;
    }

    let count = 0;

    const backtrack = () => {
        for (let i = 0; i < 26; i++) {
            if (freq[i] === 0) continue;

            count++;
            freq[i]--;
            backtrack();
            freq[i]++;
        }
    };

    backtrack();
    return count;
};