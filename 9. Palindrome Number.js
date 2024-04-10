/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const reverseX = x.toString().split("").reverse().join("");
  return x == reverseX;
};
