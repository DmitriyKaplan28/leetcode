/**
 * @param {string} s
 * @return {string}
 */
var largestEven = function (s) {
    let rightmostTwo = -1;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '2') {
            rightmostTwo = i;
            break;
        }
    }

    if (rightmostTwo === -1) return "";

    let result = s.substring(0, rightmostTwo) + '2';

    return result;
};
console.log(largestEven('221'))
console.log(largestEven('1112'))
console.log(largestEven('1'))