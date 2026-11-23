/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
  if (s.length < k) {
    return false;
  }

  const frequencies = new Array(26).fill(0);
  for (const character of s) {
    frequencies[character.charCodeAt(0) - 97]++;
  }

  const oddCharacterCount = frequencies.filter(
    (count) => count % 2 === 1,
  ).length;
  return oddCharacterCount <= k;
};
