/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let totalSum = "";
  let carry = 0;
  a = a.split("").reverse().join("");
  b = b.split("").reverse().join("");

  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const digitA = parseInt(i < a.length ? a[i] : 0);
    const digitB = parseInt(i < b.length ? b[i] : 0);

    const total = digitA + digitB + carry;
    const currentSum = total % 2;
    totalSum = currentSum + totalSum;
    carry = Math.floor(total / 2);
  }

  return carry ? 1 + totalSum : totalSum;
};
