/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map()
    for (let i=0; i< arr.length; i++) {
        if (!map[arr[i]]) map[arr[i]] = 1
        else map[arr[i]]++
    }
    const values = Object.values(map)
    const set = new Set(values)
    return values.length === set.size

};

console.log(uniqueOccurrences([1,2,2,1,1,3]))