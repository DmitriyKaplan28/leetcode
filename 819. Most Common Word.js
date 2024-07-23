/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  const frequency = {};
  let count = null;
  for (let word of paragraph.split(/[!?',;.\s]+/)) {
    if (!word) continue;
    word = word.toLowerCase();
    if (banned.includes(word)) continue;
    frequency[word] = (frequency[word] || 0) + 1;
    if (!count || frequency[word] >= frequency[count]) count = word;
  }
  return count;
};