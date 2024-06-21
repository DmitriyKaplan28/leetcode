/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
  let acronym = "";
  words.forEach((word) => (acronym += word[0]));
  return s === acronym;
};
