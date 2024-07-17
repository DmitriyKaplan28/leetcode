/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    let count = 0
    words.forEach(word => {
        if (s.startsWith(word)) count ++
    })
    return count
};