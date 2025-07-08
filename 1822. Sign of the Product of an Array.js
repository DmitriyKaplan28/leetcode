/**
 * @param {number[]} nums
 * @return {number}
 */
var signFunc = function(x) {
    if (x > 0) return 1;
    if (x < 0) return -1;
    return 0;
};

var arraySign = function(nums) {
    let sign = 1;
    for (let num of nums) {
        if (num === 0) return 0;
        if (num < 0) sign = -sign;
    }
    return sign;
};

console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]));
console.log(arraySign([1, 5, 0, 2, -3]));
console.log(arraySign([-1, 1, -1, 1, -1]));