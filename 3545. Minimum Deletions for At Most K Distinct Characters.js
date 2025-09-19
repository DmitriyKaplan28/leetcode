/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minDeletion = function (s, k) {
  const charCount = {};
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  const frequencies = Object.values(charCount).sort((a, b) => b - a);

  if (frequencies.length <= k) {
    return 0;
  }

  let deletions = 0;
  for (let i = k; i < frequencies.length; i++) {
    deletions += frequencies[i];
  }

  return deletions;
};
