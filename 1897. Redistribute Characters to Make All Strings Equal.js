/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
  const charCount = {};

  for (const word of words) {
    for (const char of word) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }

  for (const count of Object.values(charCount)) {
    if (count % words.length !== 0) {
      return false;
    }
  }

  return true;
};
