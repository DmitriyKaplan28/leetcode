/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
  if (s.length < 2) return "";

  const charSet = new Set();

  for (let char of s) {
    charSet.add(char);
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const isUpperCase = char === char.toUpperCase();
    const oppositeCase = isUpperCase ? char.toLowerCase() : char.toUpperCase();

    if (!charSet.has(oppositeCase)) {
      const left = longestNiceSubstring(s.substring(0, i));
      const right = longestNiceSubstring(s.substring(i + 1));

      return left.length >= right.length ? left : right;
    }
  }

  return s;
};
