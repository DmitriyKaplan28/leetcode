/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function (n) {
  return String(n)
    .split("")
    .reduce((score, digit) => score + Number(digit), 0);
};

console.log(digitFrequencyScore(122));
console.log(digitFrequencyScore(101));
