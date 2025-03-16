/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (!t || s.length < t.length) return "";

  const needed = new Map();
  for (let char of t) {
    needed.set(char, (needed.get(char) || 0) + 1);
  }

  let left = 0;
  let right = 0;
  let minLen = Infinity;
  let minStart = 0;
  let matches = 0;
  const requiredMatches = needed.size;

  const window = new Map();

  while (right < s.length) {
    const char = s[right];

    window.set(char, (window.get(char) || 0) + 1);

    if (needed.has(char) && window.get(char) === needed.get(char)) {
      matches++;
    }

    while (matches === requiredMatches) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minStart = left;
      }

      const leftChar = s[left];
      window.set(leftChar, window.get(leftChar) - 1);

      if (needed.has(leftChar) && window.get(leftChar) < needed.get(leftChar)) {
        matches--;
      }

      left++;
    }

    right++;
  }

  return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("a", "a"));
console.log(minWindow("a", "aa"));
