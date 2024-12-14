/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  let k = 0;
  let repeatedWord = word;

  while (sequence.includes(repeatedWord)) {
    k++;
    repeatedWord += word;
  }

  return k;
};
