/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
  const firstValue = getNumericalValue(firstWord);
  const secondValue = getNumericalValue(secondWord);
  const targetValue = getNumericalValue(targetWord);

  return firstValue + secondValue === targetValue;
};

const getNumericalValue = (word) => {
  return parseInt(
    [...word].map((char) => char.charCodeAt(0) - "a".charCodeAt(0)).join(""),
    10
  );
};

console.log(isSumEqual("acb", "cba", "cdb")); // Output: true
console.log(isSumEqual("aaa", "a", "aab"));  // Output: false
