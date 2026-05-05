/**
 * @param {number} n
 * @return {number[]}
 */
var decimalRepresentation = function (n) {
    const s = String(n);
    const result = [];

    for (let i = 0; i < s.length; i++) {
        const digit = s.charCodeAt(i) - 48;
        if (digit === 0) continue;

        const placeValue = 10 ** (s.length - 1 - i);
        result.push(digit * placeValue);
    }

    return result;
};