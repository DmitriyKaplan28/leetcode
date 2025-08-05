/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  function isValidSubstring(start, end) {
    const charCount = {};
    for (let i = start; i <= end; i++) {
      charCount[s[i]] = (charCount[s[i]] || 0) + 1;
    }

    for (let char in charCount) {
      if (charCount[char] < k) {
        return false;
      }
    }
    return true;
  }

  function longestSubstringHelper(start, end) {
    if (end - start + 1 < k) {
      return 0;
    }

    const charCount = {};
    for (let i = start; i <= end; i++) {
      charCount[s[i]] = (charCount[s[i]] || 0) + 1;
    }

    const invalidChars = new Set();
    for (let char in charCount) {
      if (charCount[char] < k) {
        invalidChars.add(char);
      }
    }

    if (invalidChars.size === 0) {
      return end - start + 1;
    }

    const splitPositions = [];
    for (let i = start; i <= end; i++) {
      if (invalidChars.has(s[i])) {
        splitPositions.push(i);
      }
    }

    let maxLength = 0;
    let prevPos = start - 1;

    for (let pos of splitPositions) {
      if (pos - prevPos - 1 >= k) {
        maxLength = Math.max(
          maxLength,
          longestSubstringHelper(prevPos + 1, pos - 1)
        );
      }
      prevPos = pos;
    }

    if (end - prevPos >= k) {
      maxLength = Math.max(maxLength, longestSubstringHelper(prevPos + 1, end));
    }

    return maxLength;
  }

  return longestSubstringHelper(0, s.length - 1);
};
