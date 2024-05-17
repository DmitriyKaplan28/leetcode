/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
  const indexes = new Map();
  for (let i = 0; i < s.length; i++) {
    indexes.set(s[i], i);
  }
  let res = 0;
  for (let i = 0; i < t.length; i++) {
    res += Math.abs(i - indexes.get(t[i]));
  }
  return res;
};
