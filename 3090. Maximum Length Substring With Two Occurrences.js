/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
  let left = 0,
    maxLength = 0;
  let charCount = new Map();

  for (let right = 0; right < s.length; right++) {
    charCount.set(s[right], (charCount.get(s[right]) || 0) + 1);

    while (charCount.get(s[right]) > 2) {
      charCount.set(s[left], charCount.get(s[left]) - 1);
      if (charCount.get(s[left]) === 0) {
        charCount.delete(s[left]);
      }
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
