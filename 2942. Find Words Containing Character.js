/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  const result = [];

  for (let i = 0; words.length > i; i++) {
    if (words[i].includes(x)) {
      result.push(i);
    }
  }

  return result;
};
