/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.split(' ')
    return words.map(word => word.split('').reverse().join('')).join(' ')
};