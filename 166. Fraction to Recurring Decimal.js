/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  if (numerator === 0) return "0";
  if (denominator === 0) return "";

  let sign = "";
  if (numerator < 0 !== denominator < 0) {
    sign = "-";
  }

  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);

  const integerPart = Math.floor(numerator / denominator);
  let remainder = numerator % denominator;

  if (remainder === 0) {
    return sign + integerPart.toString();
  }

  const decimalPart = [];
  const remainderMap = new Map();
  let index = 0;

  while (remainder !== 0 && !remainderMap.has(remainder)) {
    remainderMap.set(remainder, index);

    remainder *= 10;
    const digit = Math.floor(remainder / denominator);
    decimalPart.push(digit);

    remainder = remainder % denominator;
    index++;
  }

  let result = sign + integerPart.toString() + ".";

  if (remainder === 0) {
    result += decimalPart.join("");
  } else {
    const cycleStart = remainderMap.get(remainder);
    const nonRepeating = decimalPart.slice(0, cycleStart);
    const repeating = decimalPart.slice(cycleStart);

    result += nonRepeating.join("") + "(" + repeating.join("") + ")";
  }

  return result;
};

console.log(fractionToDecimal(1, 2));
console.log(fractionToDecimal(2, 1));
console.log(fractionToDecimal(4, 333));
