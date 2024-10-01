/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  if (s.toLowerCase().includes("infinity")) {
    return false;
  }
  return !isNaN(s);
};
