/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let res = 0;
  for (let word of words) {
    if (canFormWord(word, chars)) {
      res += word.length; 
    }
  }

  return res;
};

const canFormWord = (word, chars) => {
  let charCount = {};
  for (let char of chars) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let char of word) {
    if (!charCount[char] || charCount[char] <= 0) {
      return false;
    }
    charCount[char]--;
  }
  return true;
};
