/**
 * @param {number} n
 * @return {string}
 */
var concatHex36 = function (n) {
  const bn = BigInt(n);
  const hex = (bn * bn).toString(16).toUpperCase();
  const base36 = (bn * bn * bn).toString(36).toUpperCase();
  return hex + base36;
};

console.log(concatHex36(13));
console.log(concatHex36(36));