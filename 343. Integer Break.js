/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  if (n === 2) return 1;
  if (n === 3) return 2;
  if (n === 4) return 4;

  let product = 1;

  while (n > 4) {
    product *= 3;
    n -= 3;
  }

  product *= n;

  return product;
};

console.log(integerBreak(10));
console.log(integerBreak(2));