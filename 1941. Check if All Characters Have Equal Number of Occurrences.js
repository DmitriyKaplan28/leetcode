/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let count = {}
    for (let i =0; i<s.length; i++) {
        if (!count[s[i]]) count[s[i]] = 1
        count[s[i]]++
    }
    const set = new Set(Object.values(count))
    return set.size === 1
};


console.log(areOccurrencesEqual("aaabb"))