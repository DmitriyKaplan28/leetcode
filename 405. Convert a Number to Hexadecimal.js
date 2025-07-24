/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  if (num === 0) return "0";
  const hex = "0123456789abcdef";
  let result = "";
  let n = num >>> 0;
  while (n > 0) {
    result = hex[n & 0xf] + result;
    n >>>= 4;
  }
  return result;
};

console.log(toHex(26));
console.log(toHex(-1));