/**
 * @param {string} s
 * @return {number}
 */
var vowelConsonantScore = function(s) {
    let v = 0, c = 0;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    for (const ch of s) {
        if (ch >= 'a' && ch <= 'z') {
            if (vowels.has(ch)) v++;
            else c++;
        }
    }

    if (c === 0) return 0;
    return Math.floor(v / c);
};

console.log(vowelConsonantScore("cooear"));
console.log(vowelConsonantScore("axeyizou"));
console.log(vowelConsonantScore("au 123"));