/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function (words, weights) {
    let result = '';

    for (const word of words) {
        let wordWeight = 0;
        for (let i = 0; i < word.length; i++) {
            const charIndex = word.charCodeAt(i) - 'a'.charCodeAt(0);
            wordWeight += weights[charIndex];
        }

        const modValue = wordWeight % 26;
        const mappedChar = String.fromCharCode('z'.charCodeAt(0) - modValue);

        result += mappedChar;
    }

    return result;
};