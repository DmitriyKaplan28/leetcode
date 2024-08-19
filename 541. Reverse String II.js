/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var reverseStr = function (s, k) {
  if (s.length < k) {
    return reverseString(s);
  }
  if (s.length < 2 * k) {
    return reverseString(s.slice(0, k)) + s.slice(k);
  }
  return longStringReverse(s.slice(0, 2 * k)) + reverseStr(s.slice(2 * k), k);
};

function reverseString(s) {
  return s.split("").reverse().join("");
}
function longStringReverse(s) {
  return reverseString(s.slice(0, s.length / 2)) + s.slice(s.length / 2);
}
