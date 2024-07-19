/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
  if (num[num.length - 1] === "0") {
    num = num.slice(0, -1);
    return removeTrailingZeros(num);
  } else return num;
};

console.log(removeTrailingZeros("51230100"));
