/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const seen = new Set();

  while (n !== 1) {
    let sum = 0;
    while (n > 0) {
      const digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10);
    }

    if (seen.has(sum)) {
      return false;
    }

    seen.add(sum);
    n = sum;
  }

  return true;
};
