/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumOfGoodIntegers = function (n, k) {
    let sum = 0;
    const start = Math.max(1, n - k);
    const end = n + k;

    for (let x = start; x <= end; x++) {
        if ((n & x) === 0) sum += x;
    }
    return sum;
};