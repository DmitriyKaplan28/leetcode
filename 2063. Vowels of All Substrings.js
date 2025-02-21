/**
 * @param {string} word
 * @return {number}
 */
var countVowels = function (word) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let total = 0;
  let n = word.length;

  for (let i = 0; i < n; i++) {
    if (vowels.has(word[i])) {
      total += (i + 1) * (n - i);
    }
  }

  return total;
};
