/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    return words.filter(word =>word.includes(x)).map(el => words.indexOf(el))
};