/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
    let maxDist = 0, last = -1;
    for (let i = 0; n > 0; i++, n >>>= 1) {
        if (n & 1) {
            if (last !== -1) maxDist = Math.max(maxDist, i - last);
            last = i;
        }
    }
    return maxDist;
};

console.log(binaryGap(22));
console.log(binaryGap(8));
console.log(binaryGap(5));