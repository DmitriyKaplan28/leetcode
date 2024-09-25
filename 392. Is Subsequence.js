/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let offset = -1;
  for (const letter of s) {
    offset = t.indexOf(letter, offset + 1);
    if (offset === -1) return false;
  }
  return true;
};
