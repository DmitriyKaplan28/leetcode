/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  const numberOfWords = sentences.map((s) => s.split(" ").length);
  return Math.max(...numberOfWords);
};
