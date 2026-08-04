/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function (a, b) {
  let res = "";

  while (a > 0 || b > 0) {
    if (a > b) {
      res += "a";
      a--;
      if (a > b) {
        res += "a";
        a--;
      }
      if (b > 0) {
        res += "b";
        b--;
      }
    } else {
      res += "b";
      b--;
      if (b > a) {
        res += "b";
        b--;
      }
      if (a > 0) {
        res += "a";
        a--;
      }
    }
  }

  return res;
};
