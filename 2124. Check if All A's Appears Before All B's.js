/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
  let lastA = s.lastIndexOf("a");
  let firstB = s.indexOf("b");
  return firstB === -1 ? true : lastA < firstB;
};
