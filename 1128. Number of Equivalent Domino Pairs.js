/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    let map = new Map();

    let count = 0;

    for (let [a, b] of dominoes) {
        let key = a < b ? `${a},${b}` : `${b},${a}`;
        let freq = map.get(key) || 0;
        count += freq; 
        map.set(key, freq + 1);
    }

    return count;
};
