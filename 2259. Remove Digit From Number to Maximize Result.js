/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
  let maxResult = "";

  for (let i = 0; i < number.length; i++) {
    if (number[i] === digit) {
      const newNumber = number.slice(0, i) + number.slice(i + 1);

      if (newNumber > maxResult) {
        maxResult = newNumber;
      }
    }
  }

  return maxResult;
};
