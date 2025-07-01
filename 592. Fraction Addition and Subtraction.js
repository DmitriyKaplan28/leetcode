/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
  function gcd(a, b) {
    return b === 0 ? Math.abs(a) : gcd(b, a % b);
  }
  const regex = /[+-]?\d+\/\d+/g;
  const fractions = expression.match(regex);
  let num = 0,
    den = 1;
  for (let frac of fractions) {
    let [n, d] = frac.split("/").map(Number);
    num = num * d + n * den;
    den = den * d;
    let g = gcd(num, den);
    num /= g;
    den /= g;
  }
  if (den < 0) {
    num = -num;
    den = -den;
  }
  return num + "/" + den;
};

console.log(fractionAddition("1/3-1/2"));
console.log(fractionAddition("-1/2+1/2"));
console.log(fractionAddition("-1/2+1/2+1/3"));
