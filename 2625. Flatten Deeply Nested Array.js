/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const resultArr = []

    const makeFlat = function (arr, depth) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && depth > 0) {
                makeFlat(arr[i], depth - 1)
            } else {
                resultArr.push(arr[i])
            }
        }
    }
    makeFlat(arr, n)
    return resultArr
};