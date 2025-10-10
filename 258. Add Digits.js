/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  return num === 0 ? 0 : 1 + ((num - 1) % 9);
};
console.log(addDigits(38));
console.log(addDigits(0));
