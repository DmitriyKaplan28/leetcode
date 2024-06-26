/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  const binarySubs = s.match(/(.)(\1)*/g);
  let result = 0;
  for (let i = 1; i < binarySubs.length; i++) {
    result += Math.min(binarySubs[i].length, binarySubs[i - 1].length);
  }
  return result;
};
