/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  return text.split(/\s+/).filter((word) => !brokenLetters.split("").some((s) => word.includes(s))).length;
};
