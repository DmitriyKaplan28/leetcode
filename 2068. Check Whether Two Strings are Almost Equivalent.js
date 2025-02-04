/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function (word1, word2) {
  let freq1 = new Array(26).fill(0);
  let freq2 = new Array(26).fill(0);

  for (let char of word1) {
    freq1[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  for (let char of word2) {
    freq2[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  for (let i = 0; i < 26; i++) {
    if (Math.abs(freq1[i] - freq2[i]) > 3) {
      return false;
    }
  }

  return true;
};
