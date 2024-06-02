/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let s2 = s.split(' ')
    let arr = []
    s2.forEach((word) => {
        let position = word[word.length - 1]
        arr[position - 1] = word.slice(0, - 1)
    })
    return arr.join(' ')
};