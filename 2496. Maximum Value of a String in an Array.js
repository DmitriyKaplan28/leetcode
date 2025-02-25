/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
  let res = 0;

  for (let str of strs) {
    if (/^\d+$/.test(str)) {
      res = Math.max(res, parseInt(str, 10));
    } else {
      res = Math.max(res, str.length);
    }
  }

  return res;
};
