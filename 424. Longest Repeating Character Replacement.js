/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let maxLength = 0;
  let maxCount = 0;
  let start = 0;
  const charCount = new Map();

  for (let end = 0; end < s.length; end++) {
    charCount.set(s[end], (charCount.get(s[end]) || 0) + 1);

    maxCount = Math.max(maxCount, charCount.get(s[end]));

    while (end - start + 1 - maxCount > k) {
      charCount.set(s[start], charCount.get(s[start]) - 1);
      start++;
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};

console.log(characterReplacement("AABABBA", 1));
console.log(characterReplacement("ABAB", 2));
