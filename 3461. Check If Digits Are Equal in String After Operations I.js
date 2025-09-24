/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
    while (s.length > 2) {
        let newS = '';
        for (let i = 0; i < s.length - 1; i++) {
            const sum = parseInt(s[i]) + parseInt(s[i + 1]);
            newS += (sum % 10).toString();
        }
        s = newS;
    }
    return s[0] === s[1];
};