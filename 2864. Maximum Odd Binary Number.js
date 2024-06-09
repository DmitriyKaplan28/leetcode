/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
  let ones = 0,
    zeros = 0;
  for (let i = 0; i < s.length; i++) {
    ones += s[i] === "1" ? 1 : 0;
    zeros += s[i] === "0" ? 1 : 0;
  }
  return "1".repeat(ones - 1) + "0".repeat(zeros) + "1";
};
