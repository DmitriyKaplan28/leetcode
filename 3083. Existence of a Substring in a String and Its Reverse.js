/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function (s) {
  const n = s.length;
  if (n < 2) return false;
  const substrings = new Set();
  for (let i = 0; i < n - 1; i++) {
    substrings.add(s.substring(i, i + 2));
  }
  const reversed = s.split("").reverse().join("");
  for (let i = 0; i < n - 1; i++) {
    if (substrings.has(reversed.substring(i, i + 2))) {
      return true;
    }
  }
  return false;
};
