/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const arr = sentence.split("");
  const set = new Set(arr);

  return set.size === 26;
};
