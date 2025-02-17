/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function (s1, s2, s3) {
  let minLength = Math.min(s1.length, s2.length, s3.length);
  for (let i = 0; i < minLength; i++) {
    if (s1[i] !== s2[i] || s2[i] !== s3[i]) {
      let operations = s1.length + s2.length + s3.length - i * 3;
      return i === 0 ? -1 : operations;
    }
  }
  return s1.length + s2.length + s3.length - minLength * 3;
};
