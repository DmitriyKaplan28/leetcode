/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  let res = "";
  n = n.toString();
  for (i = n.length - 3; i > 0; i -= 3) {
    res = `.${n.slice(i, i + 3)}${res}`;
  }
  return n.slice(0, i + 3) + res;
};
