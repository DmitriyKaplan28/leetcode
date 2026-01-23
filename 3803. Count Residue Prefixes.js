/**
 * @param {string} s
 * @return {number}
 */
var residuePrefixes = function (s) {
    let count = 0;
    const seen = new Set();

    for (let i = 0; i < s.length; i++) {
        seen.add(s[i]);
        const distinctCount = seen.size;
        const prefixLength = i + 1;

        if (distinctCount === prefixLength % 3) {
            count++;
        }
    }

    return count;
};
console.log(residuePrefixes("abc"));
console.log(residuePrefixes("dd"));
console.log(residuePrefixes("bob"));