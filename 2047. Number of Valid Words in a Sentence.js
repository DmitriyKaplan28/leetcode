/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence) {
  let tokens = sentence.trim().split(/\s+/);
  let validCount = 0;

  const validWordRegex = /^([a-z]+(-[a-z]+)?)?[!.,]?$/;

  for (let token of tokens) {
    if (/\d/.test(token)) continue;

    if (validWordRegex.test(token)) {
      validCount++;
    }
  }

  return validCount;
};
