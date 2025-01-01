/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  const count = Array(10).fill(0);
  for (const digit of num) {
    count[Number(digit)]++;
  }

  for (let i = 0; i < num.length; i++) {
    if (count[i] !== Number(num[i])) {
      return false;
    }
  }

  return true;
};
