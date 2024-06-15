/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    const prefWords = words.filter(word => word.startsWith(pref))
    return prefWords.length
};