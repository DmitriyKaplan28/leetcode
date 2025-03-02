/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < num.length; i++) {
    if (i % 2 === 0) evenSum += Number.parseInt(num[i]);
    else oddSum += Number.parseInt(num[i]);
  }
  return evenSum === oddSum;
};

console.log(isBalanced("1234"));
console.log(isBalanced("24123"));
