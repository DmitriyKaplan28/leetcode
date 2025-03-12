/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
  if (word.length < 3) return false;

  if (!/^[a-zA-Z0-9]+$/.test(word)) return false;

  const vowels = /[aeiouAEIOU]/;
  const consonants = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/;

  return vowels.test(word) && consonants.test(word);
};
