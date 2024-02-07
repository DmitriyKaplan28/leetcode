/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let count = {};
    for (const letter of s) {
        count[letter] = (count[letter] || 0) + 1;
    }
    console.log(count)
    let res = "";
    let countInOrder = Object.keys(count).sort((a, b) => count[b] - count[a])
    for (element of countInOrder) {
        for (let i = 0; i < count[element]; i++) {
            res += element
        }

    }
    return res
};