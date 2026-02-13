/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function (s) {
    const n = s.length;
    let maxLen = 0;

    let run = 1;
    for (let i = 1; i < n; i++) {
        if (s[i] === s[i - 1]) run++;
        else { maxLen = Math.max(maxLen, run); run = 1; }
    }
    maxLen = Math.max(maxLen, run);

    const pairs = [
        ['a', 'b'], ['a', 'c'], ['b', 'c']
    ];
    for (const [x, y] of pairs) {
        let diff = 0;
        const first = new Map();
        first.set(0, -1);
        for (let i = 0; i < n; i++) {
            const ch = s[i];
            if (ch !== x && ch !== y) {
                diff = 0;
                first.clear();
                first.set(0, i);
                continue;
            }
            if (ch === x) diff++;
            else diff--;
            if (!first.has(diff)) first.set(diff, i);
            maxLen = Math.max(maxLen, i - first.get(diff));
        }
    }

    let pa = 0, pb = 0, pc = 0;
    const map = new Map();
    const key = (a, b) => `${a},${b}`;
    map.set(key(0, 0), 0);
    for (let j = 0; j < n; j++) {
        if (s[j] === 'a') pa++; else if (s[j] === 'b') pb++; else pc++;
        const k = key(pa - pb, pa - pc);
        if (map.has(k)) {
            const i = map.get(k);
            maxLen = Math.max(maxLen, j - i + 1);
        } else {
            map.set(k, j + 1);
        }
    }

    return maxLen;
};


console.log(longestBalanced("abbac"));
console.log(longestBalanced("aabcc"));
console.log(longestBalanced("aba"));