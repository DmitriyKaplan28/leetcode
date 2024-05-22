/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  const indexOfCh = word.indexOf(ch);
  const arr = word.split("");
  const firstPart = arr.splice(0, indexOfCh + 1);
  return firstPart.reverse().join("") + arr.join("");
};
