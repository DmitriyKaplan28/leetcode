/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const charCount = {};
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let maxLength = 0;
  let isOddFound = false;

  for (let count of Object.values(charCount)) {
    if (count % 2 === 0) {
      maxLength += count;
    } else {
      maxLength += count - 1;
      isOddFound = true;
    }
  }
  if (isOddFound) {
    maxLength += 1;
  }
  return maxLength;
};

console.log(longestPalindrome("abccccdd"));
